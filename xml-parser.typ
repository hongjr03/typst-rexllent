#import "src/lib.typ": worksheets-parser, worksheet-parser

#worksheets-parser(
  "/test-table.xml",
  // below args will be passed to worksheet-parser
  with-table-styles: false,
  with-table-alignment: false,
  columns: (1fr, 1fr),
  rows: 4em,
  align: center+horizon,
  stroke: yellow,
)

#pagebreak()

#worksheet-parser(
  xmlPath: "/test-table.xml",
  worksheet: "Sheet2",
  with-table-styles: false,
  with-table-alignment: false,
  // if with-table-styles is false, then below args will be passed to table
  columns: (1fr, 1fr),
  // rows: 4em,
  align: center+horizon,
  stroke: yellow,
)