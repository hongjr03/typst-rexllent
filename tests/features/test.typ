#set page(width: auto, height: auto, margin: 1em)
#show heading: it => pagebreak(weak: true)

#import "/src/lib.typ": xlsx-parser, spreet-parser

= Tests

== default

#xlsx-parser(read("./data/default.xlsx", encoding: none))

== cell

=== alignment

#(xlsx-parser(read("./data/cell/alignment.xlsx", encoding: none), parse-stroke: false, stroke: black + 1pt))

=== border

#xlsx-parser(read("./data/cell/border.xlsx", encoding: none))

=== fill

#xlsx-parser(read("./data/cell/fill.xlsx", encoding: none))

=== incontinunity

#xlsx-parser(read("./data/cell/incontinunity.xlsx", encoding: none))

=== merged

#xlsx-parser(read("./data/cell/merged.xlsx", encoding: none))

// === formatted

// #xlsx-parser(read("./data/cell/formatted.xlsx", encoding: none), parse-formatted-cell: true)

== font

=== bold

#xlsx-parser(read("./data/font/bold.xlsx", encoding: none))

=== fill

#xlsx-parser(read("./data/font/fill.xlsx", encoding: none))

=== italic

#xlsx-parser(read("./data/font/italic.xlsx", encoding: none))

=== size

#xlsx-parser(read("./data/font/size.xlsx", encoding: none))

=== strike

#xlsx-parser(read("./data/font/strike.xlsx", encoding: none))

== index

=== 1

#xlsx-parser(read("./data/index/1.xlsx", encoding: none), sheet-index: 1)

== table

=== column_width

#xlsx-parser(read("./data/table/column_width.xlsx", encoding: none))

=== row_height

#xlsx-parser(read("./data/table/row_height.xlsx", encoding: none))

=== zero_height

#xlsx-parser(read("./data/table/zero_height.xlsx", encoding: none))

=== zero_width

#xlsx-parser(read("./data/table/zero_width.xlsx", encoding: none))

=== hidden_column

#xlsx-parser(read("./data/table/hidden_column.xlsx", encoding: none))

=== hidden_row

#xlsx-parser(read("./data/table/hidden_row.xlsx", encoding: none))

== math

#xlsx-parser(read("./data/math/1.xlsx", encoding: none), eval-as-markup: true)

// == not_supported

// === lowercase

// #xlsx-parser(read("./data/not_supported/lowercase.xlsx", encoding: none))

// === rotate

// #xlsx-parser(read("./data/not_supported/rotate.xlsx", encoding: none))

// === uppercase

// #xlsx-parser(read("./data/not_supported/uppercase.xlsx", encoding: none))

// == spreet

// #import "@preview/spreet:0.1.0"

// #spreet-parser(spreet.decode(read("./data/default.ods", encoding: none)))

