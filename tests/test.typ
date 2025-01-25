#import "/typst-package/lib.typ": xlsx-parser, spreet-parser

= Tests

== default

#xlsx-parser(read("/tests/data/default.xlsx", encoding: none))

== cell

=== alignment

#(xlsx-parser(read("/tests/data/cell/alignment.xlsx", encoding: none), parse-stroke: false, stroke: black + 1pt))

=== border

#xlsx-parser(read("/tests/data/cell/border.xlsx", encoding: none))

=== fill

#xlsx-parser(read("/tests/data/cell/fill.xlsx", encoding: none))

=== incontinunity

#xlsx-parser(read("/tests/data/cell/incontinunity.xlsx", encoding: none))

=== merged

#xlsx-parser(read("/tests/data/cell/merged.xlsx", encoding: none))

== font

=== bold

#xlsx-parser(read("/tests/data/font/bold.xlsx", encoding: none))

=== fill

#xlsx-parser(read("/tests/data/font/fill.xlsx", encoding: none))

=== italic

#xlsx-parser(read("/tests/data/font/italic.xlsx", encoding: none))

=== size

#xlsx-parser(read("/tests/data/font/size.xlsx", encoding: none))

=== strike

#xlsx-parser(read("/tests/data/font/strike.xlsx", encoding: none))

== index

=== 1

#xlsx-parser(read("/tests/data/index/1.xlsx", encoding: none), sheet-index: 1)

== table

=== column_width

#xlsx-parser(read("/tests/data/table/column_width.xlsx", encoding: none))

=== row_height

#xlsx-parser(read("/tests/data/table/row_height.xlsx", encoding: none))

=== zero_height

#xlsx-parser(read("/tests/data/table/zero_height.xlsx", encoding: none))

=== zero_width

#xlsx-parser(read("/tests/data/table/zero_width.xlsx", encoding: none))

=== hidden_column

#xlsx-parser(read("/tests/data/table/hidden_column.xlsx", encoding: none))

=== hidden_row

#xlsx-parser(read("/tests/data/table/hidden_row.xlsx", encoding: none))

== not_supported

=== lowercase

#xlsx-parser(read("/tests/data/not_supported/lowercase.xlsx", encoding: none))

=== rotate

#xlsx-parser(read("/tests/data/not_supported/rotate.xlsx", encoding: none))

=== uppercase

#xlsx-parser(read("/tests/data/not_supported/uppercase.xlsx", encoding: none))

#import "@preview/spreet:0.1.0"

#spreet-parser(spreet.decode(read("/tests/data/default.ods", encoding: none)))
