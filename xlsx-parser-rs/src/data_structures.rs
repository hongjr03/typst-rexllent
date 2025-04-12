use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct TableData {
    pub dimensions: TableDimensions,
    pub rows: Vec<RowData>,
    pub merged_cells: Vec<MergedCell>,
}

#[derive(Serialize, Deserialize)]
pub struct TableDimensions {
    pub columns: Vec<f64>,
    pub rows: Vec<f64>,
    pub max_columns: Option<u32>,
    pub max_rows: Option<u32>,
}

#[derive(Serialize, Deserialize)]
pub struct RowData {
    pub row_number: u32,
    pub cells: Vec<CellData>,
}

#[derive(Serialize, Deserialize)]
pub struct CellData {
    pub value: String,
    pub column: u32,
    pub style: Option<CellStyle>,
    pub format: String,
    pub data_type: String,
}

#[derive(Serialize, Deserialize)]
pub struct CellStyle {
    pub alignment: Option<Alignment>,
    pub border: Option<Border>,
    pub color: Option<String>,
    pub font: Option<FontStyle>,
}

#[derive(Serialize, Deserialize)]
pub struct Position {
    pub row: u32,
    pub column: u32,
}

#[derive(Serialize, Deserialize)]
pub struct MergedCell {
    pub range: String,
    pub start: Position,
    pub end: Position,
}

#[derive(Serialize, Deserialize)]
pub struct Alignment {
    pub horizontal: String,
    pub vertical: String,
}

#[derive(Serialize, Deserialize)]
pub struct Border {
    pub left: bool,
    pub right: bool,
    pub top: bool,
    pub bottom: bool,
}

#[derive(Serialize, Deserialize)]
pub struct FontStyle {
    pub bold: bool,
    pub italic: bool,
    pub size: f64,
    pub color: Option<String>,
    pub underline: bool,
    pub strike: bool,
}
