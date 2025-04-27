use crate::data_structures::{Alignment, Border, FontStyle};
use umya_spreadsheet::{
    BorderStyleValues, Cell, HorizontalAlignmentValues, Spreadsheet, UnderlineValues,
    VerticalAlignmentValues,
};

pub fn cell_value(cell: &Cell, formatted: bool) -> Result<String, String> {
    if cell.get_raw_value().is_error() {
        Err(format!(
            "Error in cell {}",
            cell.get_coordinate().to_string()
        ))
    } else if formatted {
        Ok(cell.get_formatted_value())
    } else {
        Ok(cell.get_value().to_string())
    }
}

pub fn get_cell_alignment(cell: &Cell) -> Option<Alignment> {
    let style = cell.get_style();
    let alignment = match style.get_alignment() {
        Some(alignment) => alignment,
        None => return None,
    };

    Some(Alignment {
        horizontal: match alignment.get_horizontal() {
            HorizontalAlignmentValues::Left => "left",
            HorizontalAlignmentValues::Center => "center",
            HorizontalAlignmentValues::Right => "right",
            _ => "default",
        }
        .to_string(),
        vertical: match alignment.get_vertical() {
            VerticalAlignmentValues::Bottom => "bottom",
            VerticalAlignmentValues::Center => "center",
            VerticalAlignmentValues::Top => "top",
            _ => "default",
        }
        .to_string(),
    })
}

pub fn get_cell_border(cell: &Cell) -> Option<Border> {
    let style = cell.get_style();
    let border = match style.get_borders() {
        Some(border) => border,
        None => return None,
    };

    Some(Border {
        left: border.get_left().get_style() != &BorderStyleValues::None,
        right: border.get_right().get_style() != &BorderStyleValues::None,
        top: border.get_top().get_style() != &BorderStyleValues::None,
        bottom: border.get_bottom().get_style() != &BorderStyleValues::None,
    })
}

pub fn get_cell_bg_color(cell: &Cell, book: &Spreadsheet) -> Option<String> {
    let style = cell.get_style();
    let color = style.get_background_color()?;
    let argb = color.get_argb_with_theme(book.get_theme());
    if argb.is_empty() {
        Some("".to_string())
    } else {
        Some(if argb.len() == 8 {
            argb.chars().skip(2).collect::<String>() // skip 的作用是去掉前两位，即 alpha 通道
        } else {
            argb.to_string()
        })
    }
}

pub fn get_cell_font_style(cell: &Cell, book: &Spreadsheet) -> Option<FontStyle> {
    let font = match cell.get_style().get_font() {
        Some(font) => font,
        None => {
            return None;
        }
    };

    Some(FontStyle {
        bold: *font.get_font_bold().get_val(),
        italic: *font.get_font_italic().get_val(),
        size: *font.get_font_size().get_val(),
        color: {
            let argb = font.get_color().get_argb_with_theme(book.get_theme());
            if argb.is_empty() {
                None
            } else {
                Some(if argb.len() == 8 {
                    argb.chars().skip(2).collect::<String>() // skip 的作用是去掉前两位，即 alpha 通道
                } else {
                    argb.to_string()
                })
            }
        },
        underline: font.get_font_underline().get_val() != &UnderlineValues::None,
        strike: *font.get_font_strike().get_val(),
    })
}
