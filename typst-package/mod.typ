#let p = plugin("rexllent.wasm")

#let xlsx-parser(xlsx, sheet-index: 0, parse-table-style: true, parse-alignment: true, parse-font-style: true) = {
  let data = p.to_typst(
    xlsx,
    bytes(str(sheet-index)),
    bytes(if parse-table-style { "true" } else { "false" }),
    bytes(if parse-alignment { "true" } else { "false" }),
    bytes(if parse-font-style { "true" } else { "false" }),
  )
  eval(cbor.decode(data))
}

