

use typst_wasm_protocol::wasm_export;

use std::io::Cursor;
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
    parse_alignment: &[u8],
    parse_border: &[u8],
    parse_bg_color: &[u8],
    parse_font_style: &[u8],
    formatted_cell: &[u8],
) -> Result<String, String> {
    let file = Cursor::new(bytes);
    let book: Spreadsheet = reader::xlsx::read_reader(file, true)
        .map_err(|e| format!("Failed to read Excel file: {}", e))?;
    // parse string -> bytes -> usize
    let sheet_index: usize = String::from_utf8(sheet_index.to_vec())
        .map_err(|e| format!("Failed to parse sheet index: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse sheet index: {}", e))?;
    let parse_alignment: bool = String::from_utf8(parse_alignment.to_vec())
        .map_err(|e| format!("Failed to parse parse_alignment: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse parse_alignment: {}", e))?;
    let parse_border: bool = String::from_utf8(parse_border.to_vec())
        .map_err(|e| format!("Failed to parse parse_border: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse parse_border: {}", e))?;
    let parse_bg_color: bool = String::from_utf8(parse_bg_color.to_vec())
        .map_err(|e| format!("Failed to parse parse_bg_color: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse parse_bg_color: {}", e))?;
    let parse_font_style: bool = String::from_utf8(parse_font_style.to_vec())
        .map_err(|e| format!("Failed to parse parse_font_style: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse parse_font_style: {}", e))?;
    let formatted: bool = String::from_utf8(formatted_cell.to_vec())
        .map_err(|e| format!("Failed to parse formatted_cell: {}", e))?
        .parse()
        .map_err(|e| format!("Failed to parse formatted_cell: {}", e))?;
    let worksheet = book
        .get_sheet(&sheet_index)
        .ok_or_else(|| "Failed to get worksheet".to_string())?;

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

    // 处理表格尺寸

    let properties = worksheet.get_sheet_format_properties();
    table_data.dimensions.columns =
        get_column_widths(worksheet, max_col, *properties.get_default_column_width());
    table_data.dimensions.rows =
        get_row_heights(worksheet, max_row, *properties.get_default_row_height());

    // 处理合并单元格
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
    // 处理行数据
    for row_num in 1..=max_row {
        let row = worksheet.get_collection_by_row(&row_num);
        let mut row_data = RowData {
            row_number: row_num,
            cells: Vec::new(),
        };

        // 创建一个映射来存储每列的单元格
        let mut col_cell_map: Vec<Option<&Cell>> = vec![None; max_col as usize];
        for cell in row {
            let (col_num, _) = parse_cell_reference(&cell.get_coordinate().to_string());
            col_cell_map[(col_num - 1) as usize] = Some(cell);
        }

        // 处理每一列
        for col_num in 1..=max_col {
            // 检查是否是被合并的单元格
            let is_merged = table_data.merged_cells.iter().any(|mc| {
                row_num >= mc.start.row
                    && row_num <= mc.end.row
                    && col_num >= mc.start.column
                    && col_num <= mc.end.column
                    && !(row_num == mc.start.row && col_num == mc.start.column)
            });

            if !is_merged {
                if let Some(Some(cell)) = col_cell_map.get((col_num - 1) as usize) {
                    let cell_style = if parse_alignment || parse_font_style {
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
                                get_cell_bg_color(cell, &book)
                            } else {
                                None
                            },
                            font: if parse_font_style {
                                get_cell_font_style(cell, &book)
                            } else {
                                None
                            },
                        })
                    } else {
                        None
                    };

                    row_data.cells.push(CellData {
                        value: cell_value(cell, formatted)?,
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

    let toml_string =
        toml::to_string(&table_data).map_err(|e| format!("Failed to serialize to TOML: {}", e))?;

    Ok(toml_string)
}
