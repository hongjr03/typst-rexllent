#let p = plugin("rexllent.wasm")

#let xlsx-parser(xlsx, sheet-index: 0, parse_table_style: true, parse_alignment: true, parse_font_style: true) = {
  let data = p.to_typst(
    xlsx,
    bytes(str(sheet-index)),
    bytes(if parse_table_style { "true" } else { "false" }),
    bytes(if parse_alignment { "true" } else { "false" }),
    bytes(if parse_font_style { "true" } else { "false" }),
  )
  eval(cbor.decode(data))
}

