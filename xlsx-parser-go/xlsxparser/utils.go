package xlsxparser

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
	"unicode"
)

// ColumnToNumber 将列字母转换为数字（例如：A -> 1, Z -> 26, AA -> 27）
func ColumnToNumber(column string) uint32 {
	var result uint32
	for _, char := range column {
		result = result*26 + uint32(unicode.ToUpper(char)-'A'+1)
	}
	return result
}

// NumberToColumn 将数字转换为列字母（例如：1 -> A, 26 -> Z, 27 -> AA）
func NumberToColumn(num uint32) string {
	var result string
	for num > 0 {
		num-- // 调整为 0-based 索引
		result = string(rune('A'+num%26)) + result
		num /= 26
	}
	return result
}

// ParseCellReference 解析单元格引用（例如：A1 -> (1, 1)）
func ParseCellReference(cellRef string) (uint32, uint32) {
	re := regexp.MustCompile(`([A-Za-z]+)(\d+)`)
	matches := re.FindStringSubmatch(cellRef)
	if len(matches) == 3 {
		colStr := matches[1]
		row, _ := strconv.ParseUint(matches[2], 10, 32)
		return ColumnToNumber(colStr), uint32(row)
	}
	return 0, 0
}

// CellCoordinates 将列号和行号转换为单元格引用（例如：(1, 1) -> A1）
func CellCoordinates(col, row uint32) string {
	return fmt.Sprintf("%s%d", NumberToColumn(col), row)
}

// ParseMergeRange 解析合并单元格的范围（例如：A1:B2 -> ("A1", "B2")）
func ParseMergeRange(merge string) (string, string) {
	parts := strings.Split(merge, ":")
	if len(parts) == 2 {
		return parts[0], parts[1]
	}
	return "", ""
}
