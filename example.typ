#import "src/lib.typ": worksheets-parser, worksheet-parser

#let sheets = worksheets-parser(
  xml-path: "/test-table.xml",
  to-array: true,
  // below args will be passed to worksheet-parser
  with-table-styles: false,
  with-table-alignment: false,
  columns: (1fr, 1fr),
  rows: 4em,
  align: center + horizon,
  stroke: yellow,
)

#sheets.first()

#worksheet-parser(
  xml-path: "/test-table.xml",
  worksheet: "Sheet2",
  with-table-styles: false,
  with-table-alignment: false,
  // if with-table-styles is false, then below args will be passed to table
  columns: (1fr, 1fr),
  // rows: 4em,
  align: center + horizon,
  stroke: yellow,
)
