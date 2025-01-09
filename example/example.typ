#set page(width: auto, height: auto, margin: 1em)

#import "../typst-package/lib.typ": xlsx-parser

#xlsx-parser(read("test.xlsx", encoding: none), parse_table_style: true, parse_alignment: true, parse_font_style: true)

#pagebreak()

#xlsx-parser(read("test.xlsx", encoding: none), parse_table_style: false, parse_alignment: true, parse_font_style: true)


#pagebreak()

#xlsx-parser(read("test.xlsx", encoding: none), parse_table_style: true, parse_alignment: false, parse_font_style: true)

#pagebreak()

#xlsx-parser(read("test.xlsx", encoding: none), parse_table_style: true, parse_alignment: true, parse_font_style: false)


