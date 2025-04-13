#!/bin/bash
if [ -f ./src/rexllent.wasm ]; then
    rm ./src/rexllent.wasm
fi
cd xlsx-parser-go
# tinygo build -target=wasm-unknown -o rexllent.wasm
# cd ..
GOOS=wasip1 GOARCH=wasm go build -o rexllent.wasm
cd ..
wasi-stub ./xlsx-parser-go/rexllent.wasm -o ./xlsx-parser-go/rexllent.wasm
wasm-opt ./xlsx-parser-go/rexllent.wasm -O3 --enable-bulk-memory -o ./src/rexllent.wasm
