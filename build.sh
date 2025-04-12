#!/bin/bash
if [ -f ./src/rexllent.wasm ]; then
    rm ./src/rexllent.wasm
fi
cd xlsx-parser-rs
rustup target add wasm32-unknown-unknown
cargo build --release --target wasm32-unknown-unknown
cd ..
wasm-opt ./xlsx-parser-rs/target/wasm32-unknown-unknown/release/xlsx_parser_rs.wasm -O3 --enable-bulk-memory -o ./src/rexllent.wasm