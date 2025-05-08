#!/bin/bash

set -e

# --- Configuration Variables ---
# Rust targets
WASM_TARGET="wasm32-unknown-unknown"
WASI_TARGET="wasm32-wasip1"

# Project directories
XLSX_PARSER_CRATE_DIR="crates/xlsx-parser-rs"
NUMFMT_CRATE_DIR="crates/numfmt-rs"
EXTERNAL_NUMFMT_DIR="external/numfmt/dist"
SRC_DIR="./src"

# Output WASM file names
XLSX_PARSER_WASM_OUTPUT_NAME="rexllent.wasm"
NUMFMT_WASM_OUTPUT_NAME="numfmt.wasm"

# Intermediate WASM file names (before wasm-opt or wasi-stub)
XLSX_PARSER_INTERMEDIATE_WASM="xlsx_parser_rs.wasm"
NUMFMT_INTERMEDIATE_WASM="numfmt_rs.wasm"

# Optimization flags for wasm-opt
WASM_OPT_FLAGS="-O3 --enable-bulk-memory"

# --- Helper Functions ---
# (Optional, but can make the script cleaner if there's more repetition)
# function build_and_optimize_wasm {
#   local crate_dir=$1
#   local rust_target=$2
#   local intermediate_wasm_name=$3
#   local final_wasm_path=$4
#   local opt_flags=$5
#
#   echo "Building $crate_dir for target $rust_target..."
#   pushd "$crate_dir"
#   cargo clean
#   cargo build --release --target "$rust_target"
#   popd
#
#   local intermediate_wasm_path="$crate_dir/target/$rust_target/release/$intermediate_wasm_name"
#
#   echo "Optimizing $intermediate_wasm_path to $final_wasm_path..."
#   wasm-opt "$intermediate_wasm_path" $opt_flags -o "$final_wasm_path"
# }

# --- Main Script ---

# Build and optimize xlsx-parser-rs
XLSX_PARSER_WASM_OUTPUT_PATH="$SRC_DIR/$XLSX_PARSER_WASM_OUTPUT_NAME"
XLSX_PARSER_INTERMEDIATE_PATH="$XLSX_PARSER_CRATE_DIR/target/$WASM_TARGET/release/$XLSX_PARSER_INTERMEDIATE_WASM"

if [ -f "$XLSX_PARSER_WASM_OUTPUT_PATH" ]; then
    echo "Removing existing $XLSX_PARSER_WASM_OUTPUT_PATH..."
    rm "$XLSX_PARSER_WASM_OUTPUT_PATH"
fi

echo "Adding Rust target: $WASM_TARGET"
rustup target add "$WASM_TARGET"

echo "Building $XLSX_PARSER_CRATE_DIR for target $WASM_TARGET..."
pushd "$XLSX_PARSER_CRATE_DIR"
cargo clean
cargo build --release --target "$WASM_TARGET"
popd

echo "Optimizing $XLSX_PARSER_INTERMEDIATE_PATH to $XLSX_PARSER_WASM_OUTPUT_PATH..."
wasm-opt "$XLSX_PARSER_INTERMEDIATE_PATH" $WASM_OPT_FLAGS -o "$XLSX_PARSER_WASM_OUTPUT_PATH"

echo "Successfully built $XLSX_PARSER_WASM_OUTPUT_PATH"
echo "" # Newline for better readability

# Build and optimize numfmt-rs
NUMFMT_WASM_OUTPUT_PATH="$SRC_DIR/$NUMFMT_WASM_OUTPUT_NAME"
NUMFMT_INTERMEDIATE_PATH_FOR_WASI_STUB="$NUMFMT_CRATE_DIR/target/$WASI_TARGET/release/$NUMFMT_INTERMEDIATE_WASM"
NUMFMT_JS_SOURCE_PATH="$EXTERNAL_NUMFMT_DIR/numfmt.js" # Path to the source numfmt.js
NUMFMT_JS_DEST_PATH="$NUMFMT_CRATE_DIR/numfmt.js"   # Path where numfmt.js will be copied

if [ -f "$NUMFMT_WASM_OUTPUT_PATH" ]; then
    echo "Removing existing $NUMFMT_WASM_OUTPUT_PATH..."
    rm "$NUMFMT_WASM_OUTPUT_PATH"
fi

echo "Adding Rust target: $WASI_TARGET"
rustup target add "$WASI_TARGET"

echo "Building $NUMFMT_CRATE_DIR for target $WASI_TARGET..."
cp "$NUMFMT_JS_SOURCE_PATH" "$NUMFMT_JS_DEST_PATH"
pushd "$NUMFMT_CRATE_DIR"
echo "Copying $NUMFMT_JS_SOURCE_PATH to $NUMFMT_JS_DEST_PATH..."
cargo clean
cargo build --target "$WASI_TARGET" --release
echo "Removing $NUMFMT_JS_DEST_PATH..."
popd
rm "$NUMFMT_JS_DEST_PATH"

echo "Running wasi-stub on $NUMFMT_INTERMEDIATE_PATH_FOR_WASI_STUB to $NUMFMT_WASM_OUTPUT_PATH..."
wasi-stub -r 0 "$NUMFMT_INTERMEDIATE_PATH_FOR_WASI_STUB" -o "$NUMFMT_WASM_OUTPUT_PATH"

echo "Optimizing $NUMFMT_WASM_OUTPUT_PATH..."
wasm-opt "$NUMFMT_WASM_OUTPUT_PATH" $WASM_OPT_FLAGS -o "$NUMFMT_WASM_OUTPUT_PATH" # Note: Optimizing in-place

echo "Successfully built $NUMFMT_WASM_OUTPUT_PATH"
echo ""
echo "All builds complete."