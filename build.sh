#!/bin/bash
if [ -f ./src/rexllent.wasm ]; then
    rm ./src/rexllent.wasm
fi
cd xlsx-parser-go
tinygo build -target=wasm-unknown -o rexllent.wasm
cd ..
wasm-opt ./xlsx-parser-go/rexllent.wasm -O3 --enable-bulk-memory -o ./src/rexllent.wasm