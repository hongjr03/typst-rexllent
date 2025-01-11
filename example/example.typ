#import "@preview/rexllent:0.2.0": xlsx-parser
#import "@preview/zebraw:0.1.0": zebraw

#show: zebraw
#show table: it => figure(it)

= 🦖 ReXLlenT

ReXLlenT is a typst package that helps you convert Excel *xlsx* tables to typst tables, powered by wasm. (Formerly eXMLlent.) The _*R*_ in ReXLlenT stands for _Rust_, the language that wasm plugin is written in. _*XL*_ stands for _Excel_, and _*T*_ stands for the wonderful _Typst_.

== Quick Start

Start by importing the package:

```typ
#import "@preview/rexllent:0.2.1": xlsx-parser
```

Then you can use `xlsx-parser` function to convert your xlsx Excel table to typst table.

== Example & Usage

=== `sheet-index`

By passing `sheet-index` parameter, you can specify the sheet index to parse. The default value is `0`.

```typ
#xlsx-parser(read("test.xlsx", encoding: none), sheet-index: 0)
```

#xlsx-parser(read("test.xlsx", encoding: none), sheet-index: 0)

=== Parameters to Customize Output Table

By toggling parameters below, you can customize the output table:

- `parse-table-style`: Parse table style(columns width, rows height), default is `true`.
- `parse-alignment`: Parse cell content alignment, default is `true`.
- `parse-stroke`: Parse cell stroke, default is `true`.
- `parse-fill`: Parse cell fill, default is `true`.
- `parse-font`: Parse font style, default is `true`.

Here is an example with all parameters set to `false`:

```typ
#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: false,
  parse-alignment: false,
  parse-stroke: false,
  parse-fill: false,
  parse-font: false,
)
```


#xlsx-parser(
  read("test.xlsx", encoding: none),
  parse-table-style: false,
  parse-alignment: false,
  parse-stroke: false,
  parse-fill: false,
  parse-font: false,
)

And examples with each parameter set to `false`:

+ `parse-table-style: false`

  ```typ
  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-table-style: false,
  )
  ```

  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-table-style: false,
  )

+ `parse-alignment: false`

  ```typ
  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-alignment: false,
  )
  ```

  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-alignment: false,
  )

+ `parse-stroke: false`

  ```typ
  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-stroke: false,
  )
  ```

  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-stroke: false,
  )

+ `parse-fill: false`

  ```typ
  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-fill: false,
  )
  ```

  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-fill: false,
  )

+ `parse-font: false`

  ```typ
  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-font: false,
  )
  ```

  #xlsx-parser(
    read("test.xlsx", encoding: none),
    parse-font: false,
  )

=== Extra Parameters

You can also customize the table style by passing arguments to the table. Here is an example:

```typ
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
```

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

== Limitations

- Only supports xlsx format.
- Not yet implemented in-cell image parsing.
- Cannot detect special characters in typst, which may cause parsing errors.

== Credits

- #link("https://github.com/lublak/typst-spreet-package")[lublak/typst-spreet-package]
- #link("https://github.com/MathNya/umya-spreadsheet")[MathNya/umya-spreadsheet]

== License

This package is licensed under the MIT License.

\

#line(length: 100%, stroke: gray)

Have fun with ReXLlenT! 🎉