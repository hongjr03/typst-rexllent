#import "/src/lib.typ": xlsx-parser


#xlsx-parser(
  read("Test.xlsx", encoding: none),
  parse-alignment: false,
  parse-table-style: true,
  sheet-index: 0,
  parse-header: true,
  parse-stroke: false,
  parse-font: false,
  parse-fill: true, // parse infill true
  eval-as-markup: true,
  parse-formatted-cell: false,
  prepend-elems: (table.hline()),
  stroke: (_, y) => {
    if y == 0 {
      return (bottom: black)
    }
  },
  align: (left, left, left, left),
  columns: (auto, 1fr),
  table.hline(),
)


#xlsx-parser(
  read("Test.xlsx", encoding: none),
  parse-alignment: false,
  parse-table-style: true,
  sheet-index: 0,
  parse-header: true,
  parse-stroke: false,
  parse-font: false,
  parse-fill: false, // parse infill false
  eval-as-markup: true,
  parse-formatted-cell: false,
  prepend-elems: (table.hline()),
  stroke: (_, y) => {
    if y == 0 {
      return (bottom: black)
    }
  },
  align: (left, left, left, left),
  columns: (auto, 1fr),
  table.hline(),
)


#bibliography("Bib.bib", style: "apa")
