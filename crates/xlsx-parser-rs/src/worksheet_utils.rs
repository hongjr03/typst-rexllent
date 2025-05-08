use umya_spreadsheet::Worksheet;

use crate::utils::parse_cell_reference;

pub fn get_table_dimensions(worksheet: &Worksheet) -> Result<(u32, u32), String> {
    let mut max_col = 0;
    let mut max_row = 0;

    for cell in worksheet.get_cell_collection() {
        let (col_num, row_num) = parse_cell_reference(&cell.get_coordinate().to_string());
        max_col = max_col.max(col_num);
        max_row = max_row.max(row_num);
    }

    if max_col == 0 || max_row == 0 {
        return Err("No data found in the worksheet".to_string());
    }

    Ok((max_col, max_row))
}

pub fn get_column_widths(worksheet: &Worksheet, max_col: u32, default_width: f64) -> Vec<f64> {
    let mut columns = vec![default_width; max_col as usize];
    for col in worksheet.get_column_dimensions() {
        let col_idx = *col.get_col_num() as usize - 1;
        if col_idx < columns.len() {
            columns[col_idx] = *col.get_width();
        }
    }
    columns
}

pub fn get_row_heights(worksheet: &Worksheet, max_row: u32, default_height: f64) -> Vec<f64> {
    let mut rows = vec![default_height; max_row as usize];
    for row in worksheet.get_row_dimensions() {
        let row_idx = (*row.get_row_num() as usize) - 1;
        if row_idx < rows.len() {
            rows[row_idx] = *row.get_height();
        }
    }
    rows
}
