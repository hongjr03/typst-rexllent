# Configuration Variables
wasm_target := "wasm32-unknown-unknown"
wasi_target := "wasm32-wasip1"
xlsx_parser_crate_dir := "crates/xlsx-parser-rs"
numfmt_crate_dir := "crates/numfmt-rs"
src_dir := "./src"
xlsx_parser_wasm_output_name := "rexllent.wasm"
numfmt_wasm_output_name := "numfmt.wasm"
xlsx_parser_intermediate_wasm := "xlsx_parser_rs.wasm"
numfmt_intermediate_wasm := "numfmt_rs.wasm"
wasm_opt_flags := "-O3 --enable-bulk-memory"

# Build and optimize xlsx-parser-rs
build-xlsx-parser:
    #!/usr/bin/env bash
    set -e
    echo "Building xlsx-parser-rs..."
    if [ -f "{{src_dir}}/{{xlsx_parser_wasm_output_name}}" ]; then
        echo "Removing existing {{src_dir}}/{{xlsx_parser_wasm_output_name}}..."
        rm "{{src_dir}}/{{xlsx_parser_wasm_output_name}}"
    fi
    echo "Adding Rust target: {{wasi_target}}"
    rustup target add "{{wasi_target}}"
    echo "Building {{xlsx_parser_crate_dir}} for target {{wasi_target}}..."
    pushd "{{xlsx_parser_crate_dir}}"
    cargo clean
    cargo build --release --target "{{wasi_target}}"
    popd
    echo "Running wasi-stub on {{xlsx_parser_crate_dir}}/target/{{wasi_target}}/release/{{xlsx_parser_intermediate_wasm}}..."
    wasi-stub -r 0 "{{xlsx_parser_crate_dir}}/target/{{wasi_target}}/release/{{xlsx_parser_intermediate_wasm}}" -o "{{src_dir}}/{{xlsx_parser_wasm_output_name}}"
    echo "Optimizing {{src_dir}}/{{xlsx_parser_wasm_output_name}}..."
    wasm-opt "{{src_dir}}/{{xlsx_parser_wasm_output_name}}" {{wasm_opt_flags}} -o "{{src_dir}}/{{xlsx_parser_wasm_output_name}}"
    echo "Successfully built {{src_dir}}/{{xlsx_parser_wasm_output_name}}"

# Build and optimize numfmt-rs using its justfile
build-numfmt:
    #!/usr/bin/env bash
    set -e
    echo "Building numfmt-rs..."
    if [ -f "{{src_dir}}/{{numfmt_wasm_output_name}}" ]; then
        echo "Removing existing {{src_dir}}/{{numfmt_wasm_output_name}}..."
        rm "{{src_dir}}/{{numfmt_wasm_output_name}}"
    fi
    echo "Building numfmt-rs using its justfile..."
    just -f "{{numfmt_crate_dir}}/justfile" build-wasm-typst
    echo "Optimizing to {{src_dir}}/{{numfmt_wasm_output_name}}..."
    wasm-opt "{{numfmt_crate_dir}}/target/{{wasm_target}}/release/{{numfmt_intermediate_wasm}}" {{wasm_opt_flags}} -o "{{src_dir}}/{{numfmt_wasm_output_name}}"
    echo "Successfully built {{src_dir}}/{{numfmt_wasm_output_name}}"

# Build all
build-all: build-xlsx-parser build-numfmt
    @echo "All builds complete."
