pub fn column_to_number(column: &str) -> u32 {
    column
        .chars()
        .fold(0, |acc, c| acc * 26 + (c as u32 - 'A' as u32 + 1))
}

pub fn parse_cell_reference(cell_ref: &str) -> (u32, u32) {
    let col_str: String = cell_ref.chars().take_while(|c| c.is_alphabetic()).collect();
    let row: u32 = cell_ref
        .chars()
        .skip_while(|c| c.is_alphabetic())
        .collect::<String>()
        .parse()
        .unwrap_or(0);
    (column_to_number(&col_str), row)
}

pub fn parse_merge_range(range: &str) -> (String, String) {
    let parts: Vec<&str> = range.split(':').collect();
    (parts[0].to_string(), parts[1].to_string())
}