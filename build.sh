#!/bin/bash
if [ -f ./src/rexllent.wasm ]; then
    rm ./src/rexllent.wasm
fi
rustup target add wasm32-unknown-unknown
cd xlsx-parser-rs
cargo build --release --target wasm32-unknown-unknown
cd ..
wasm-opt ./xlsx-parser-rs/target/wasm32-unknown-unknown/release/xlsx_parser_rs.wasm -O3 --enable-bulk-memory -o ./src/rexllent.wasm
