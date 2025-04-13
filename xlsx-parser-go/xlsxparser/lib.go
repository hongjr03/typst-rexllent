package xlsxparser

import (
	"bytes"
	"fmt"

	"github.com/pelletier/go-toml/v2"
	"github.com/xuri/excelize/v2"
)

// ToTypst 将 Excel 二进制数据转换为 TOML 格式字符串
// 这是与 xlsx-parser-rs 中 to_typst 函数对应的 Go 实现
func ToTypst(
	fileBytes []byte,
	sheetIndex int,
	parseAlignment bool,
	parseBorder bool,
	parseBgColor bool,
	parseFontStyle bool,
	formatted bool,
) (string, error) {
	// 读取 Excel 文件
	reader := bytes.NewReader(fileBytes)
	f, err := excelize.OpenReader(reader)
	if err != nil {
		return "", fmt.Errorf("打开 Excel 文件失败: %v", err)
	}
	defer f.Close()

	// 获取所有工作表名称
	sheetList := f.GetSheetList()
	if len(sheetList) <= sheetIndex {
		return "", fmt.Errorf("工作表索引 %d 超出范围，当前工作簿只有 %d 个工作表", sheetIndex, len(sheetList))
	}

	sheetName := sheetList[sheetIndex]

	// 构建表格数据
	tableData, err := BuildTableData(
		f,
		sheetName,
		parseAlignment,
		parseBorder,
		parseBgColor,
		parseFontStyle,
		formatted,
	)
	if err != nil {
		return "", err
	}

	// 转换为 TOML
	tomlBytes, err := toml.Marshal(tableData)
	if err != nil {
		return "", fmt.Errorf("序列化为 TOML 失败: %v", err)
	}

	return string(tomlBytes), nil
}

// BuildTableData 构建表格数据结构
func BuildTableData(
	f *excelize.File,
	sheetName string,
	parseAlignment bool,
	parseBorder bool,
	parseBgColor bool,
	parseFontStyle bool,
	formatted bool,
) (*TableData, error) {
	// 获取表格维度
	maxCol, maxRow, err := GetTableDimensions(f, sheetName)
	if err != nil {
		return nil, err
	}

	// 创建表格数据结构
	tableData := &TableData{
		Dimensions: TableDimensions{
			Columns:    []float64{},
			Rows:       []float64{},
			MaxColumns: &maxCol,
			MaxRows:    &maxRow,
		},
		Rows:        []RowData{},
		MergedCells: []MergedCell{},
	}

	// 获取默认行高和列宽
	defaultColWidth := 8.43  // Excel 默认列宽
	defaultRowHeight := 15.0 // Excel 默认行高

	// 处理表格尺寸
	columns, err := GetColumnWidths(f, sheetName, maxCol, defaultColWidth)
	if err != nil {
		return nil, err
	}
	tableData.Dimensions.Columns = columns

	rows, err := GetRowHeights(f, sheetName, maxRow, defaultRowHeight)
	if err != nil {
		return nil, err
	}
	tableData.Dimensions.Rows = rows

	// 处理合并单元格
	mergedCells, err := ProcessMergedCells(f, sheetName)
	if err != nil {
		return nil, err
	}
	tableData.MergedCells = mergedCells

	// 处理行数据
	err = ProcessRows(
		f,
		sheetName,
		tableData,
		maxRow,
		maxCol,
		parseAlignment,
		parseBorder,
		parseBgColor,
		parseFontStyle,
		formatted,
	)
	if err != nil {
		return nil, err
	}

	return tableData, nil
}

// ProcessRows 处理行和单元格数据
func ProcessRows(
	f *excelize.File,
	sheetName string,
	tableData *TableData,
	maxRow uint32,
	maxCol uint32,
	parseAlignment bool,
	parseBorder bool,
	parseBgColor bool,
	parseFontStyle bool,
	formatted bool,
) error {
	for rowNum := uint32(1); rowNum <= maxRow; rowNum++ {
		rowData := RowData{
			RowNumber: rowNum,
			Cells:     []CellData{},
		}

		for colNum := uint32(1); colNum <= maxCol; colNum++ {
			// 检查是否为合并单元格的非主单元格部分
			if IsMergedCell(tableData, rowNum, colNum) {
				continue
			}

			cellCoord := CellCoordinates(colNum, rowNum)
			value, err := CellValue(f, sheetName, cellCoord, formatted)
			if err != nil {
				// 如果获取单元格值失败，跳过该单元格
				continue
			}

			// 如果单元格为空，跳过
			if value == "" {
				continue
			}

			// 获取单元格样式ID
			styleID, err := f.GetCellStyle(sheetName, cellCoord)
			if err != nil {
				// 如果获取样式失败，使用默认样式
				styleID = 0
			}

			// 创建单元格数据
			cellData := CellData{
				Value:  value,
				Column: colNum,
				Style:  CreateCellStyle(f, styleID, parseAlignment, parseBorder, parseBgColor, parseFontStyle),
			}

			rowData.Cells = append(rowData.Cells, cellData)
		}

		// 如果行有数据，添加到表格数据中
		if len(rowData.Cells) > 0 {
			tableData.Rows = append(tableData.Rows, rowData)
		}
	}

	return nil
}
