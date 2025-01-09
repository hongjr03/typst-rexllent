rustup target add wasm32-wasi
cargo build --release --target wasm32-wasi
wasi-stub -r 0 ./target/wasm32-wasi/release/xlsx_parser_rs.wasm -o typst-package/rexllent.wasm
wasm-opt typst-package/rexllent.wasm -O3 --enable-bulk-memory -o typst-package/rexllent.wasm