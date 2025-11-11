use typst_wasm_protocol::wasm_export;

use std::{io::Cursor, str};
use umya_spreadsheet::{reader, Cell, Spreadsheet};
mod cell_utils;
mod data_structures;
mod utils;
mod worksheet_utils;
// mod tests;

use cell_utils::*;
use data_structures::*;
use utils::*;
use worksheet_utils::*;

#[wasm_export]
pub fn to_typst(
    bytes: &[u8],
    sheet_index: &[u8],
    sheet_name: &[u8],
    parse_alignment: &[u8],
    parse_border: &[u8],
    parse_bg_color: &[u8],
    parse_font_style: &[u8],
) -> Result<String, String> {
    // Parse arguments from byte arrays
    let sheet_index_str =
        str::from_utf8(sheet_index).map_err(|e| format!("Failed to parse sheet index: {}", e))?;
    let sheet_name_str =
        str::from_utf8(sheet_name).map_err(|e| format!("Failed to parse sheet name: {}", e))?;
    let parse_alignment = parse_arg::<bool>(parse_alignment, "parse_alignment")?;
    let parse_border = parse_arg::<bool>(parse_border, "parse_border")?;
    let parse_bg_color = parse_arg::<bool>(parse_bg_color, "parse_bg_color")?;
    let parse_font_style = parse_arg::<bool>(parse_font_style, "parse_font_style")?;

    // Read Excel file
    let file = Cursor::new(bytes);
    let book: Spreadsheet = reader::xlsx::read_reader(file, true)
        .map_err(|e| format!("Failed to read Excel file: {}", e))?;

    let worksheet = if !sheet_name_str.is_empty() {
        book.get_sheet_by_name(sheet_name_str)
            .ok_or_else(|| format!("Failed to get worksheet by name: {}", sheet_name_str))?
    } else {
        let index = sheet_index_str
            .parse::<usize>()
            .map_err(|_| format!("Invalid sheet index: {}", sheet_index_str))?;
        book.get_sheet(&index)
            .ok_or_else(|| format!("Failed to get worksheet by index: {}", index))?
    };

    // Build table data
    let table_data = build_table_data(
        worksheet,
        &book,
        parse_alignment,
        parse_border,
        parse_bg_color,
        parse_font_style,
    )?;

    // Convert to TOML
    let toml_string =
        toml::to_string(&table_data).map_err(|e| format!("Failed to serialize to TOML: {}", e))?;

    Ok(toml_string)
}

// Helper function to parse arguments from byte arrays
fn parse_arg<T: std::str::FromStr>(arg: &[u8], arg_name: &str) -> Result<T, String>
where
    T::Err: std::fmt::Display,
{
    str::from_utf8(arg)
        .map_err(|e| format!("Failed to parse {}: {}", arg_name, e))?
        .parse()
        .map_err(|e| format!("Failed to parse {}: {}", arg_name, e))
}

// Function to build the table data structure
fn build_table_data(
    worksheet: &umya_spreadsheet::Worksheet,
    book: &Spreadsheet,
    parse_alignment: bool,
    parse_border: bool,
    parse_bg_color: bool,
    parse_font_style: bool,
) -> Result<TableData, String> {
    let (max_col, max_row) = get_table_dimensions(worksheet)?;

    let mut table_data = TableData {
        dimensions: TableDimensions {
            columns: Vec::new(),
            rows: Vec::new(),
            max_columns: Some(max_col),
            max_rows: Some(max_row),
        },
        rows: Vec::new(),
        merged_cells: Vec::new(),
    };

    // Process table dimensions
    let properties = worksheet.get_sheet_format_properties();
    table_data.dimensions.columns =
        get_column_widths(worksheet, max_col, *properties.get_default_column_width());
    table_data.dimensions.rows =
        get_row_heights(worksheet, max_row, *properties.get_default_row_height());

    // Process merged cells
    for merge_cell in worksheet.get_merge_cells() {
        let range = merge_cell.get_range().to_string();
        let (start, end) = parse_merge_range(&range);
        let (start_col, start_row) = parse_cell_reference(&start);
        let (end_col, end_row) = parse_cell_reference(&end);

        table_data.merged_cells.push(MergedCell {
            range,
            start: Position {
                row: start_row,
                column: start_col,
            },
            end: Position {
                row: end_row,
                column: end_col,
            },
        });
    }

    // Process row data
    process_rows(
        worksheet,
        book,
        &mut table_data,
        max_row,
        max_col,
        parse_alignment,
        parse_border,
        parse_bg_color,
        parse_font_style,
    )?;

    Ok(table_data)
}

// Process rows and cells
fn process_rows(
    worksheet: &umya_spreadsheet::Worksheet,
    book: &Spreadsheet,
    table_data: &mut TableData,
    max_row: u32,
    max_col: u32,
    parse_alignment: bool,
    parse_border: bool,
    parse_bg_color: bool,
    parse_font_style: bool,
) -> Result<(), String> {
    for row_num in 1..=max_row {
        let row = worksheet.get_collection_by_row(&row_num);
        let mut row_data = RowData {
            row_number: row_num,
            cells: Vec::new(),
        };

        // Map to store cells by column
        let mut col_cell_map: Vec<Option<&Cell>> = vec![None; max_col as usize];
        for cell in row {
            let (col_num, _) = parse_cell_reference(&cell.get_coordinate().to_string());
            col_cell_map[(col_num - 1) as usize] = Some(cell);
        }

        // Process each column
        for col_num in 1..=max_col {
            // Check if it's a merged cell
            let is_merged = is_merged_cell(table_data, row_num, col_num);

            if !is_merged {
                if let Some(Some(cell)) = col_cell_map.get((col_num - 1) as usize) {
                    let cell_style = create_cell_style(
                        cell,
                        book,
                        parse_alignment,
                        parse_border,
                        parse_bg_color,
                        parse_font_style,
                    );

                    row_data.cells.push(CellData {
                        data_type: cell_type(cell)?,
                        format: cell_format_code(cell)?,
                        value: cell_value(cell)?,
                        column: col_num,
                        style: cell_style,
                    });
                }
            }
        }

        if !row_data.cells.is_empty() {
            table_data.rows.push(row_data);
        }
    }
    Ok(())
}

// Check if cell is part of a merged range (except the top-left cell)
fn is_merged_cell(table_data: &TableData, row_num: u32, col_num: u32) -> bool {
    table_data.merged_cells.iter().any(|mc| {
        row_num >= mc.start.row
            && row_num <= mc.end.row
            && col_num >= mc.start.column
            && col_num <= mc.end.column
            && !(row_num == mc.start.row && col_num == mc.start.column)
    })
}

// Create cell style based on parsing flags
fn create_cell_style(
    cell: &Cell,
    book: &Spreadsheet,
    parse_alignment: bool,
    parse_border: bool,
    parse_bg_color: bool,
    parse_font_style: bool,
) -> Option<CellStyle> {
    if parse_alignment || parse_border || parse_bg_color || parse_font_style {
        Some(CellStyle {
            alignment: if parse_alignment {
                get_cell_alignment(cell)
            } else {
                None
            },
            border: if parse_border {
                get_cell_border(cell)
            } else {
                None
            },
            color: if parse_bg_color {
                get_cell_bg_color(cell, book)
            } else {
                None
            },
            font: if parse_font_style {
                get_cell_font_style(cell, book)
            } else {
                None
            },
        })
    } else {
        None
    }
}
