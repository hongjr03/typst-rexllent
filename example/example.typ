#set page(width: auto, height: auto, margin: 1em)

#import "../typst-package/lib.typ": xlsx-parser

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: true,
  parse-alignment: false,
  parse-font-style: true,
  align: center + horizon,
)


#pagebreak()

#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: false,
  parse-alignment: true,
  parse-font-style: true,
)



#pagebreak()

#xlsx-parser(read("test.xlsx", encoding: none), parse-table-style: true, parse-alignment: false, parse-font-style: true)

#pagebreak()

#xlsx-parser(read("test.xlsx", encoding: none), parse-table-style: true, parse-alignment: true, parse-font-style: false)


