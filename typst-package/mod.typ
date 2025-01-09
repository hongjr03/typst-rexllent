#let p = plugin("rexllent.wasm")

#let xlsx-parser(xlsx, sheet-index: 0) = {
  let data = p.to_typst(xlsx, bytes(str(sheet-index)))
  eval(cbor.decode(data))
}

