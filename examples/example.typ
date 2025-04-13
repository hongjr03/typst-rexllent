#set page(width: auto, height: auto, margin: 1em)

#import "/src/lib.typ": xlsx-parser

#xlsx-parser(read("test.xlsx", encoding: none))

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

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: false,
  parse-alignment: false,
  parse-stroke: false,
  parse-fill: false,
  parse-font: false,
  // args below will be passed to the table
  fill: black,
  stroke: 4pt + white,
)

#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-header: true,
  parse-stroke: false,
  stroke: (_, y) => {
    if y == 0 {
      return (top: black, bottom: black)
    }
  },
  table.hline(),
)