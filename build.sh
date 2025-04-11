#!/bin/bash
if [ -f typst-package/rexllent.wasm ]; then
    rm typst-package/rexllent.wasm
fi
rustup target add wasm32-unknown-unknown
cargo build --release --target wasm32-unknown-unknown
wasm-opt ./target/wasm32-unknown-unknown/release/xlsx_parser_rs.wasm -O3 --enable-bulk-memory -o typst-package/rexllent.wasm