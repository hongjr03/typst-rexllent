# typst-xml-table-parser

```typ
#let xml-table = xml-parser("test-table.xml", "Sheet1")
#table(
  columns: xml-table.columns,
  rows: xml-table.rows,
  ..xml-table.cells
)
```

Have fun!
