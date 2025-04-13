package xlsxparser

import (
	"strings"

	"github.com/xuri/excelize/v2"
)

// CellValue 获取单元格的值
func CellValue(f *excelize.File, sheetName string, cell string, formatted bool) (string, error) {
	if formatted {
		return f.GetCellValue(sheetName, cell)
	}

	// 获取原始值 (不包括格式)
	return f.GetCellValue(sheetName, cell)
}

// GetCellAlignment 获取单元格的对齐方式
func GetCellAlignment(f *excelize.File, styleID int) *Alignment {
	style, err := f.GetStyle(styleID)
	if err != nil || style == nil || style.Alignment == nil {
		return nil
	}

	horizontal := "default"
	switch style.Alignment.Horizontal {
	case "left":
		horizontal = "left"
	case "center":
		horizontal = "center"
	case "right":
		horizontal = "right"
	}

	vertical := "default"
	switch style.Alignment.Vertical {
	case "top":
		vertical = "top"
	case "center":
		vertical = "center"
	case "bottom":
		vertical = "bottom"
	}

	return &Alignment{
		Horizontal: horizontal,
		Vertical:   vertical,
	}
}

// GetCellBorder 获取单元格的边框信息
func GetCellBorder(f *excelize.File, styleID int) *Border {
	style, err := f.GetStyle(styleID)
	if err != nil || style == nil || style.Border == nil {
		return nil
	}

	return &Border{
		Left:   style.Border[0].Type != "",
		Right:  style.Border[1].Type != "",
		Top:    style.Border[2].Type != "",
		Bottom: style.Border[3].Type != "",
	}
}

// GetCellBgColor 获取单元格的背景颜色
func GetCellBgColor(f *excelize.File, styleID int) *string {
	style, err := f.GetStyle(styleID)
	if err != nil || style == nil {
		return nil
	}

	// excelize 中前景色填充通常是单元格的背景颜色
	if style.Fill.Type == "solid" {
		if style.Fill.Color != nil {
			color := style.Fill.Color[0]
			if color != "" {
				// 移除可能的 alpha 通道（前两个字符）
				if len(color) == 8 && strings.HasPrefix(color, "FF") {
					colorWithoutAlpha := color[2:]
					return &colorWithoutAlpha
				}
				return &color
			}
		}
	}
	return nil
}

// GetCellFontStyle 获取单元格的字体样式
func GetCellFontStyle(f *excelize.File, styleID int) *FontStyle {
	style, err := f.GetStyle(styleID)
	if err != nil || style == nil || style.Font == nil {
		return nil
	}

	fontStyle := &FontStyle{
		Bold:      style.Font.Bold,
		Italic:    style.Font.Italic,
		Underline: style.Font.Underline == "single",
		Strike:    style.Font.Strike,
	}

	// 设置字体大小
	if style.Font.Size > 0 {
		fontStyle.Size = float64(style.Font.Size)
	} else {
		fontStyle.Size = 11.0 // 默认字体大小
	}

	// 设置字体颜色
	if style.Font.Color != "" {
		color := style.Font.Color
		if len(color) == 8 && strings.HasPrefix(color, "FF") {
			colorWithoutAlpha := color[2:]
			fontStyle.Color = &colorWithoutAlpha
		} else {
			fontStyle.Color = &color
		}
	}

	return fontStyle
}

// CreateCellStyle 根据解析标志创建单元格样式
func CreateCellStyle(
	f *excelize.File,
	cellStyleID int,
	parseAlignment bool,
	parseBorder bool,
	parseBgColor bool,
	parseFontStyle bool,
) *CellStyle {
	if !parseAlignment && !parseBorder && !parseBgColor && !parseFontStyle {
		return nil
	}

	cellStyle := &CellStyle{}

	if parseAlignment {
		cellStyle.Alignment = GetCellAlignment(f, cellStyleID)
	}

	if parseBorder {
		cellStyle.Border = GetCellBorder(f, cellStyleID)
	}

	if parseBgColor {
		cellStyle.Color = GetCellBgColor(f, cellStyleID)
	}

	if parseFontStyle {
		cellStyle.Font = GetCellFontStyle(f, cellStyleID)
	}

	return cellStyle
}

// IsMergedCell 检查单元格是否是合并单元格的一部分（除了左上角单元格）
func IsMergedCell(tableData *TableData, rowNum, colNum uint32) bool {
	for _, mc := range tableData.MergedCells {
		if rowNum >= mc.Start.Row &&
			rowNum <= mc.End.Row &&
			colNum >= mc.Start.Column &&
			colNum <= mc.End.Column &&
			!(rowNum == mc.Start.Row && colNum == mc.Start.Column) {
			return true
		}
	}
	return false
}
