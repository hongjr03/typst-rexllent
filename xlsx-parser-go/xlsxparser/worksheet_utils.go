package xlsxparser

import (
	"fmt"

	"github.com/xuri/excelize/v2"
)

// GetTableDimensions 获取表格的最大行列数
func GetTableDimensions(f *excelize.File, sheetName string) (uint32, uint32, error) {
	rows, err := f.GetRows(sheetName)
	if err != nil {
		return 0, 0, fmt.Errorf("获取工作表内容失败: %v", err)
	}

	if len(rows) == 0 {
		return 0, 0, fmt.Errorf("工作表中没有数据")
	}

	var maxRow uint32 = uint32(len(rows))
	var maxCol uint32 = 0

	// 找出最大列数
	for _, row := range rows {
		if uint32(len(row)) > maxCol {
			maxCol = uint32(len(row))
		}
	}

	if maxCol == 0 {
		return 0, 0, fmt.Errorf("工作表中没有数据")
	}

	return maxCol, maxRow, nil
}

// GetColumnWidths 获取列宽
func GetColumnWidths(f *excelize.File, sheetName string, maxCol uint32, defaultWidth float64) ([]float64, error) {
	columns := make([]float64, maxCol)

	// 先填充默认宽度
	for i := range columns {
		columns[i] = defaultWidth
	}

	// 获取每一列的宽度
	for i := uint32(1); i <= maxCol; i++ {
		colName := NumberToColumn(i)
		width, err := f.GetColWidth(sheetName, colName)
		if err == nil && width > 0 {
			columns[i-1] = width
		}
	}

	return columns, nil
}

// GetRowHeights 获取行高
func GetRowHeights(f *excelize.File, sheetName string, maxRow uint32, defaultHeight float64) ([]float64, error) {
	rows := make([]float64, maxRow)

	// 先填充默认高度
	for i := range rows {
		rows[i] = defaultHeight
	}

	// 获取每一行的高度
	for i := uint32(1); i <= maxRow; i++ {
		height, err := f.GetRowHeight(sheetName, int(i))
		if err == nil && height > 0 {
			rows[i-1] = height
		}
	}

	return rows, nil
}

// ProcessMergedCells 处理合并单元格
func ProcessMergedCells(f *excelize.File, sheetName string) ([]MergedCell, error) {
	mergedCells, err := f.GetMergeCells(sheetName)
	if err != nil {
		return nil, fmt.Errorf("获取合并单元格失败: %v", err)
	}

	result := make([]MergedCell, 0, len(mergedCells))

	for _, mc := range mergedCells {
		startCol, startRow := ParseCellReference(mc.GetStartAxis())
		endCol, endRow := ParseCellReference(mc.GetEndAxis())

		result = append(result, MergedCell{
			Range: fmt.Sprintf("%s:%s", mc.GetStartAxis(), mc.GetEndAxis()),
			Start: Position{
				Row:    startRow,
				Column: startCol,
			},
			End: Position{
				Row:    endRow,
				Column: endCol,
			},
		})
	}

	return result, nil
}
