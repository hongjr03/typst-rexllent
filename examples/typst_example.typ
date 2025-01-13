#import "@preview/rexllent:0.2.0": xlsx-parser
#set page(width: auto, height: auto, margin: 1em)

#xlsx-parser(
  read("typst.xlsx", encoding: none),
  columns: (1em,) * 32,
  rows: 1em,
)

#pagebreak()

#xlsx-parser(
  read("typst_guy.xlsx", encoding: none),
  columns: (1em,) * 32,
  rows: 1em,
)

#pagebreak()

#xlsx-parser(
  read("monet.xlsx", encoding: none),
  columns: (1em,) * 120,
  rows: 1em,
)
