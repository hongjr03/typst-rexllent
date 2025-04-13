package main

import (
	"unsafe"
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

// main is required for the `wasip1` target, even if it isn't used.
func main() {}

// // Helper functions to simplify working with WASM functions
// func readArgs(totalLength int) []byte {
// 	buf := make([]byte, totalLength)
// 	WriteArgsToBuffer(buf)
// 	return buf
// }

// func sendResult(data []byte) {
// 	SendResultToHost(data)
// }

// //go:export hello
// func hello() int32 {
// 	const message = "Hello from wasm!!!"
// 	sendResult([]byte(message))
// 	return 0
// }

// //go:export double_it
// func doubleIt(arg1Len int32) int32 {
// 	buf := readArgs(int(arg1Len))

// 	result := make([]byte, arg1Len*2)
// 	copy(result[:arg1Len], buf[:arg1Len])
// 	copy(result[arg1Len:], buf[:arg1Len])

// 	sendResult(result)
// 	return 0
// }

// //go:export concatenate
// func concatenate(arg1Len, arg2Len int32) int32 {
// 	buf := readArgs(int(arg1Len + arg2Len))

// 	result := make([]byte, arg1Len+arg2Len+1)
// 	copy(result[:arg1Len], buf[:arg1Len])
// 	result[arg1Len] = '*'
// 	copy(result[arg1Len+1:], buf[arg1Len:arg1Len+arg2Len])

// 	sendResult(result)
// 	return 0
// }

// //go:export shuffle
// func shuffle(arg1Len, arg2Len, arg3Len int) int32 {
// 	argBuf := readArgs(arg1Len+arg2Len+arg3Len)
// 	arg1 := argBuf[:arg1Len]
// 	arg2 := argBuf[arg1Len : arg1Len+arg2Len]
// 	arg3 := argBuf[arg1Len+arg2Len:]

// 	resBuf := make([]byte, 0, arg1Len+arg2Len+arg3Len+2)
// 	resBuf = append(resBuf, arg3...)
// 	resBuf = append(resBuf, '-')
// 	resBuf = append(resBuf, arg1...)
// 	resBuf = append(resBuf, '-')
// 	resBuf = append(resBuf, arg2...)

// 	sendResult(resBuf)
// 	return 0
// }

// //go:export returns_ok
// func returnsOk() int32 {
// 	const message = "This is an `Ok`"
// 	sendResult([]byte(message))
// 	return 0
// }

// //go:export returns_err
// func returnsErr() int32 {
// 	const message = "This is an `Err`"
// 	sendResult([]byte(message))
// 	return 1
// }

// //go:export will_panic
// func willPanic() int32 {
// 	panic("Panicking, this message will not be seen...")
// }
