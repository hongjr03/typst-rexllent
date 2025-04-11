#!/bin/bash
if [ -f typst-package/rexllent.wasm ]; then
    rm typst-package/rexllent.wasm
fi
rustup target add wasm32-wasip1
cargo build --release --target wasm32-wasip1
wasi-stub -r 0 ./target/wasm32-wasip1/release/xlsx_parser_rs.wasm -o typst-package/rexllent.wasm
wasm-opt typst-package/rexllent.wasm -O3 --enable-bulk-memory -o typst-package/rexllent.wasm