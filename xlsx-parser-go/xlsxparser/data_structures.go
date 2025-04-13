// Package xlsxparser 提供了 Excel 文件解析和数据结构转换功能
package xlsxparser

// TableData 表示 Excel 表格的数据结构
type TableData struct {
	Dimensions  TableDimensions `json:"dimensions"`
	Rows        []RowData       `json:"rows"`
	MergedCells []MergedCell    `json:"merged_cells"`
}

// TableDimensions 表示表格的尺寸信息
type TableDimensions struct {
	Columns    []float64 `json:"columns"`
	Rows       []float64 `json:"rows"`
	MaxColumns *uint32   `json:"max_columns,omitempty"`
	MaxRows    *uint32   `json:"max_rows,omitempty"`
}

// RowData 表示表格的一行数据
type RowData struct {
	RowNumber uint32     `json:"row_number"`
	Cells     []CellData `json:"cells"`
}

// CellData 表示单元格数据
type CellData struct {
	Value  string     `json:"value"`
	Column uint32     `json:"column"`
	Style  *CellStyle `json:"style,omitempty"`
}

// CellStyle 表示单元格样式
type CellStyle struct {
	Alignment *Alignment `json:"alignment,omitempty"`
	Border    *Border    `json:"border,omitempty"`
	Color     *string    `json:"color,omitempty"`
	Font      *FontStyle `json:"font,omitempty"`
}

// Position 表示单元格位置
type Position struct {
	Row    uint32 `json:"row"`
	Column uint32 `json:"column"`
}

// MergedCell 表示合并单元格
type MergedCell struct {
	Range string   `json:"range"`
	Start Position `json:"start"`
	End   Position `json:"end"`
}

// Alignment 表示单元格对齐方式
type Alignment struct {
	Horizontal string `json:"horizontal"`
	Vertical   string `json:"vertical"`
}

// Border 表示单元格边框
type Border struct {
	Left   bool `json:"left"`
	Right  bool `json:"right"`
	Top    bool `json:"top"`
	Bottom bool `json:"bottom"`
}

// FontStyle 表示字体样式
type FontStyle struct {
	Bold      bool    `json:"bold"`
	Italic    bool    `json:"italic"`
	Size      float64 `json:"size"`
	Color     *string `json:"color,omitempty"`
	Underline bool    `json:"underline"`
	Strike    bool    `json:"strike"`
}