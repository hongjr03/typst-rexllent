package main

import (
	"fmt"
	"os"
	"strconv"
	"unsafe"

	"github.com/rexllent/xlsx-parser-go/xlsxparser"
)

// ===
// functions for the protocol

//go:wasmimport typst_env wasm_minimal_protocol_write_args_to_buffer
func write_args_to_buffer(ptr int32)

func WriteArgsToBuffer(argBuf []byte) {
	ptr := int32(uintptr(unsafe.Pointer(unsafe.SliceData(argBuf))))
	write_args_to_buffer(ptr)
}

//go:wasmimport typst_env wasm_minimal_protocol_send_result_to_host
func send_result_to_host(ptr, size int32)

func SendResultToHost(resBuf []byte) {
	size := int32(len(resBuf))
	ptr := int32(uintptr(unsafe.Pointer(unsafe.SliceData(resBuf))))
	send_result_to_host(ptr, size)
}

// ===

// 命令行模式的处理函数
func cliMode() {
	if len(os.Args) < 8 {
		fmt.Println("用法：./xlsx-parser-go <excel 文件路径> <工作表索引> <解析对齐方式 (true/false)> <解析边框 (true/false)> <解析背景色 (true/false)> <解析字体样式 (true/false)> <格式化单元格 (true/false)>")
		os.Exit(1)
	}

	// 读取 Excel 文件
	filePath := os.Args[1]
	fileBytes, err := os.ReadFile(filePath)
	if err != nil {
		fmt.Printf("读取文件失败: %v\n", err)
		os.Exit(1)
	}

	// 解析参数
	sheetIndex, err := strconv.Atoi(os.Args[2])
	if err != nil {
		fmt.Printf("解析工作表索引失败: %v\n", err)
		os.Exit(1)
	}

	parseAlignment, err := strconv.ParseBool(os.Args[3])
	if err != nil {
		fmt.Printf("解析parseAlignment参数失败: %v\n", err)
		os.Exit(1)
	}

	parseBorder, err := strconv.ParseBool(os.Args[4])
	if err != nil {
		fmt.Printf("解析parseBorder参数失败: %v\n", err)
		os.Exit(1)
	}

	parseBgColor, err := strconv.ParseBool(os.Args[5])
	if err != nil {
		fmt.Printf("解析parseBgColor参数失败: %v\n", err)
		os.Exit(1)
	}

	parseFontStyle, err := strconv.ParseBool(os.Args[6])
	if err != nil {
		fmt.Printf("解析parseFontStyle参数失败: %v\n", err)
		os.Exit(1)
	}

	formatted, err := strconv.ParseBool(os.Args[7])
	if err != nil {
		fmt.Printf("解析formatted参数失败: %v\n", err)
		os.Exit(1)
	}

	// 调用核心函数
	result, err := xlsxparser.ToTypst(fileBytes, sheetIndex, parseAlignment, parseBorder, parseBgColor, parseFontStyle, formatted)
	if err != nil {
		fmt.Printf("处理Excel文件失败: %v\n", err)
		os.Exit(1)
	}

	fmt.Println(result)
}

// main is required for the `wasip1` target, even if it isn't used.
func main() {
	// 在非 WASM 环境中运行时，使用命令行模式
	if os.Getenv("WASM_ENVIRONMENT") != "1" {
		cliMode()
	}
}

//go:wasmexport to_typst
func toTypst(fileDataLen, sheetIdxLen, parseAlignLen, parseStrokeLen, parseFillLen, parseFontLen, formatCellLen int32) int32 {
	// 分配缓冲区用于所有参数
	totalLen := fileDataLen + sheetIdxLen + parseAlignLen + parseStrokeLen + parseFillLen + parseFontLen + formatCellLen
	argBuf := make([]byte, totalLen)
	WriteArgsToBuffer(argBuf)

	// 分离文件数据和各个参数
	fileData := argBuf[:fileDataLen]

	offset := fileDataLen
	sheetIdxData := argBuf[offset : offset+sheetIdxLen]
	offset += sheetIdxLen

	parseAlignData := argBuf[offset : offset+parseAlignLen]
	offset += parseAlignLen

	parseStrokeData := argBuf[offset : offset+parseStrokeLen]
	offset += parseStrokeLen

	parseFillData := argBuf[offset : offset+parseFillLen]
	offset += parseFillLen

	parseFontData := argBuf[offset : offset+parseFontLen]
	offset += parseFontLen

	formatCellData := argBuf[offset : offset+formatCellLen]

	// 解析参数
	sheetIndex, err := strconv.Atoi(string(sheetIdxData))
	if err != nil {
		errorMsg := fmt.Sprintf("解析工作表索引失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	parseAlignment, err := strconv.ParseBool(string(parseAlignData))
	if err != nil {
		errorMsg := fmt.Sprintf("解析parseAlignment参数失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	parseBorder, err := strconv.ParseBool(string(parseStrokeData))
	if err != nil {
		errorMsg := fmt.Sprintf("解析parseBorder参数失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	parseBgColor, err := strconv.ParseBool(string(parseFillData))
	if err != nil {
		errorMsg := fmt.Sprintf("解析parseBgColor参数失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	parseFontStyle, err := strconv.ParseBool(string(parseFontData))
	if err != nil {
		errorMsg := fmt.Sprintf("解析parseFontStyle参数失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	formatted, err := strconv.ParseBool(string(formatCellData))
	if err != nil {
		errorMsg := fmt.Sprintf("解析formatted参数失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	// 调用核心函数处理 Excel 数据
	result, err := xlsxparser.ToTypst(fileData, sheetIndex, parseAlignment, parseBorder, parseBgColor, parseFontStyle, formatted)
	if err != nil {
		errorMsg := fmt.Sprintf("处理Excel文件失败: %v", err)
		SendResultToHost([]byte(errorMsg))
		return 1
	}

	// 发送结果
	SendResultToHost([]byte(result))
	return 0
}

//go:wasmexport version
func version() int32 {
	const versionInfo = "Rexllent XLSX Parser Go 1.0.0"
	SendResultToHost([]byte(versionInfo))
	return 0
}
