#import "../typst-package/lib.typ": xlsx-parser

#set page(width: auto, height: auto, margin: 1em)

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: true,
  parse-alignment: true,
  parse-stroke: true,
  parse-fill: true,
  parse-font: true,
)

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: false,
)

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-alignment: false,
)

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-stroke: false,
)

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-fill: false,
)

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-font: false,
)