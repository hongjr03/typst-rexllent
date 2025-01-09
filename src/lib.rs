#![cfg_attr(feature = "typst-plugin", allow(missing_docs))]

use core::num::NonZeroU32;
use getrandom::{register_custom_getrandom, Error};

// Some application-specific error code
const MY_CUSTOM_ERROR_CODE: u32 = Error::CUSTOM_START + 42;
pub fn always_fail(_buf: &mut [u8]) -> Result<(), Error> {
    let code = NonZeroU32::new(MY_CUSTOM_ERROR_CODE).unwrap();
    Err(Error::from(code))
}

register_custom_getrandom!(always_fail);

use std::io::Cursor;
use umya_spreadsheet::{reader, HorizontalAlignmentValues, Spreadsheet, VerticalAlignmentValues};
use wasm_minimal_protocol::*;

wasm_minimal_protocol::initiate_protocol!();

fn column_to_number(column: &str) -> u32 {
    column
        .chars()
        .fold(0, |acc, c| acc * 26 + (c as u32 - 'A' as u32 + 1))
}

fn parse_cell_reference(cell_ref: &str) -> (u32, u32) {
    let col_str: String = cell_ref.chars().take_while(|c| c.is_alphabetic()).collect();
    let row: u32 = cell_ref
        .chars()
        .skip_while(|c| c.is_alphabetic())
        .collect::<String>()
        .parse()
        .unwrap_or(0);
    (column_to_number(&col_str), row)
}

fn parse_merge_range(range: &str) -> (String, String) {
    let parts: Vec<&str> = range.split(':').collect();
    (parts[0].to_string(), parts[1].to_string())
}

#[cfg_attr(feature = "typst-plugin", wasm_func)]
pub fn to_typst(bytes: &[u8], sheet_index: &[u8]) -> Result<Vec<u8>, String> {
    let file = Cursor::new(bytes);
    let book: Spreadsheet = reader::xlsx::read_reader(file, true)
        .map_err(|e| format!("Failed to read Excel file: {}", e))?;
    // parse string -> bytes -> usize
    let sheet_index: usize = String::from_utf8(sheet_index.to_vec())
        .map_err(|e| format!("Failed to parse sheet index: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse sheet index: {}", e))?;
    let worksheet = book
        .get_sheet(&sheet_index)
        .ok_or_else(|| "Failed to get first worksheet".to_string())?;

    let properties = worksheet.get_sheet_format_properties();

    let mut typst_code = String::new();
    let mut max_col = 0;
    let mut max_row = 0;

    for cell in worksheet.get_cell_collection() {
        let coord = cell.get_coordinate().to_string();
        let (col_num, row_num) = parse_cell_reference(&coord);
        max_col = max_col.max(col_num);
        max_row = max_row.max(row_num);
    }

    if max_col == 0 || max_row == 0 {
        return Err("No data found in the worksheet".to_string());
    }

    let default_col_width = *properties.get_default_column_width();
    let mut columns = vec![default_col_width; max_col as usize];
    for col in worksheet.get_column_dimensions() {
        let col_num = col.get_col_num();
        let col_idx = *col_num as usize - 1;
        if col_idx < columns.len() {
            columns[col_idx] = col.get_width().clone();
        }
    }

    // // to pt unit
    let columns: Vec<f64> = columns.iter().map(|w| w * 64.0 / 8.43).collect();

    let default_row_height = *properties.get_default_row_height();
    let mut rows = vec![default_row_height; max_row as usize];
    for row in worksheet.get_row_dimensions() {
        let row_idx = (*row.get_row_num() as usize) - 1;
        if row_idx < rows.len() {
            rows[row_idx] = row.get_height().clone();
        }
    }

    // Format dimensions
    let columns_str = format!(
        "({})",
        columns
            .iter()
            .map(|w| format!("{}pt", w))
            .collect::<Vec<_>>()
            .join(", ")
    );
    let rows_str = format!(
        "({})",
        rows.iter()
            .map(|h| format!("{}pt", h))
            .collect::<Vec<_>>()
            .join(", ")
    );

    let default_horizontal_alignment = match HorizontalAlignmentValues::default() {
        HorizontalAlignmentValues::Left => "left",
        HorizontalAlignmentValues::Center => "center",
        HorizontalAlignmentValues::Right => "right",
        _ => "None",
    };
    let default_vertical_alignment = match VerticalAlignmentValues::default() {
        VerticalAlignmentValues::Bottom => "bottom",
        VerticalAlignmentValues::Center => "horizon",
        VerticalAlignmentValues::Top => "top",
        _ => "None",
    };

    // if not None then join with "+"
    let default_alignment = vec![default_horizontal_alignment, default_vertical_alignment]
        .into_iter()
        .filter(|s| *s != "None")
        .collect::<Vec<_>>()
        .join("+");

    typst_code.push_str(&format!(
        "table(columns: {}, rows: {}, align:{},\n",
        columns_str, rows_str, default_alignment
    ));

    // parse merged ranges
    let merged_ranges: Vec<(String, (u32, u32, u32, u32))> = worksheet
        .get_merge_cells()
        .iter()
        .map(|cell| {
            let range = cell.get_range().to_string();
            let (start, end) = parse_merge_range(&range);
            let (start_col, start_row) = parse_cell_reference(&start);
            let (end_col, end_row) = parse_cell_reference(&end);
            (range, (start_col, start_row, end_col, end_row))
        })
        .collect();

    // on each row
    for row_num in 1..=max_row as u32 {
        typst_code.push_str("  ");
        let row = worksheet.get_collection_by_row(&row_num);

        let cell_map: std::collections::HashMap<u32, &umya_spreadsheet::Cell> = row
            .iter()
            .map(|&cell| {
                let coord = cell.get_coordinate().to_string();
                let col_str: String = coord.chars().take_while(|c| c.is_alphabetic()).collect();
                let col_num = column_to_number(&col_str);
                (col_num, cell)
            })
            .collect();

        // on each column
        for col_num in 1..=max_col {
            // check if the current cell is the beginning of a merged range
            let is_merged_cell =
                merged_ranges
                    .iter()
                    .any(|(_, (start_col, start_row, end_col, end_row))| {
                        let current_col = col_num;
                        let current_row = row_num;

                        // if the current cell is within the merged range, return true
                        current_col >= *start_col
                            && current_col <= *end_col
                            && current_row >= *start_row
                            && current_row <= *end_row
                            && !(current_col == *start_col && current_row == *start_row)
                    });

            // skip if the current cell is a merged cell (already handled)
            if is_merged_cell {
                continue;
            }

            if let Some(cell) = cell_map.get(&col_num) {
                let mut params = Vec::new();
                let cell_ref = cell.get_coordinate().to_string();

                // Handle merged ranges
                if let Some((_, (start_col, start_row, end_col, end_row))) = merged_ranges
                    .iter()
                    .find(|(range, _)| range.starts_with(&cell_ref))
                {
                    // calculate rowspan and colspan
                    let colspan = end_col - start_col + 1;
                    let rowspan = end_row - start_row + 1;

                    if rowspan > 1 {
                        params.push(format!("rowspan: {}", rowspan));
                    }
                    if colspan > 1 {
                        params.push(format!("colspan: {}", colspan));
                    }
                }

                // Handle alignment
                if let Some(alignment) = cell.get_style().get_alignment() {
                    let mut align_parts = Vec::new();
                    let horizontal = alignment.get_horizontal();
                    let vertical = alignment.get_vertical();

                    if horizontal != &umya_spreadsheet::HorizontalAlignmentValues::General {
                        let align_str = match horizontal {
                            umya_spreadsheet::HorizontalAlignmentValues::Left => "left",
                            umya_spreadsheet::HorizontalAlignmentValues::Center => "center",
                            umya_spreadsheet::HorizontalAlignmentValues::Right => "right",
                            _ => "None",
                        }
                        .to_string();
                        if align_str != "None" {
                            align_parts.push(align_str);
                        }
                    }
                    if vertical != &umya_spreadsheet::VerticalAlignmentValues::Bottom {
                        let align_str = match vertical {
                            umya_spreadsheet::VerticalAlignmentValues::Bottom => "bottom",
                            umya_spreadsheet::VerticalAlignmentValues::Center => "horizon",
                            umya_spreadsheet::VerticalAlignmentValues::Top => "top",
                            _ => "None",
                        }
                        .to_string();
                        if align_str != "None" {
                            align_parts.push(align_str);
                        }
                    }
                    if !align_parts.is_empty() {
                        params.push(format!("align: {}", align_parts.join("+")));
                    }
                }

                let mut cell_code = "table.cell(".to_string();
                if !params.is_empty() {
                    cell_code.push_str(&params.join(", "));
                    cell_code.push_str(", ");
                }

                let mut formatted_value = if cell.get_raw_value().is_error() {
                    return Err(format!(
                        "Error in cell {}",
                        cell_ref,
                    ));
                } else {
                    cell.get_value().to_string()
                };


                if let Some(font) = cell.get_style().get_font() {
                    let mut text_params = Vec::new();

                    if *font.get_font_bold().get_val() {
                        text_params.push("weight: \"bold\"");
                    }
                    if *font.get_font_italic().get_val() {
                        text_params.push("style: \"italic\"");
                    }
                    let size = font.get_font_size().get_val();
                    let formatted_size_str = format!("{}pt", size);
                    let size_param = format!("size: {}", formatted_size_str);
                    text_params.push(&size_param);
                    let argb_color = font.get_color().get_argb();
                    let mut color_param = String::new();
                    if argb_color.starts_with("FF") {
                        let rgb_color = &argb_color[2..]; // remove alpha
                        color_param = format!("fill: rgb(\"{}\")", rgb_color);
                        text_params.push(&color_param);
                    }
                    if !text_params.is_empty() {
                        formatted_value =
                            format!("#text({})[{}]", text_params.join(", "), formatted_value);
                    } else {
                        formatted_value = format!("#text[{}]", formatted_value);
                    }
                    if font.get_font_underline().get_val()
                        != &umya_spreadsheet::UnderlineValues::None
                    {
                        formatted_value = format!("#underline[{}]", formatted_value);
                    }
                    // strike
                    if *font.get_font_strike().get_val() {
                        formatted_value = format!("#strike[{}]", formatted_value);
                    }
                }

                cell_code.push_str(&format!(")[{}], ", formatted_value));

                typst_code.push_str(&cell_code);
            } else {
                // 空单元格
                typst_code.push_str("[], ");
            }
        }
        typst_code.push_str("\n");
    }

    typst_code.push(')');

    // 将结果序列化为 CBOR
    let mut buffer = vec![];
    ciborium::ser::into_writer(&typst_code, &mut buffer)
        .map_err(|e| format!("Failed to serialize results: {}", e))?;

    Ok(buffer)
}
