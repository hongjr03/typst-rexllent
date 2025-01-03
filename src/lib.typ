#let xml-parser(xmlPath, worksheet: "Sheet1") = {
  let find-child(elem, tag) = {
    elem.children.find(e => "tag" in e and e.tag == tag)
  }

  let worksheet = {
    let data = xml(xmlPath).at(1)
    let styles = find-child(data, "Styles")
    let worksheets = data.children.filter(e => if "tag" in e { e.tag == "Worksheet" } else { false })
    let worksheet = worksheets.find(e => {
      e.attrs.Name == worksheet
    })
    let styles-dict = find-child(data, "Styles")
      .children
      .filter(e => if type(e) == "string" { false } else { true })
      .map(e => {
        (
          e.attrs.ID,
          e
            .children
            .filter(e => if type(e) == "string" { false } else { true })
            .filter(e => e.tag == "Alignment")
            .at(0)
            .attrs,
        )
      })
      .to-dict()
    let styles = (:)
    for (k, v) in styles-dict {
      let style = ""
      if "Horizontal" in v {
        // [#v\ ]
        if style != "" {
          style += "+ "
        }
        style += lower(v.Horizontal) + " "
      }
      if "Vertical" in v {
        // [#v\ ]
        if style != "" {
          style += "+ "
        }
        if v.Vertical == "Center" {
          style += "horizon "
        } else {
          style += lower(v.Vertical) + " "
        }
      }
      styles.insert(k, style)
    }
    (
      table: find-child(worksheet, "Table").children.filter(e => if type(e) == "string" { false } else { true }),
      styles: styles,
    )
  }
  let excel-table = worksheet.table
  let typst-style-dict = worksheet.styles

  let columns = ()
  {
    let res = ()
    for e in excel-table {
      if e.tag == "Column" {
        res.push(e)
      } else { break }
    }
    excel-table = excel-table.slice(res.len())
    for col in res {
      columns.push(eval(col.attrs.Width + "pt"))
    }
  }

  let rows = ()
  let row-data = {
    let res = ()
    for e in excel-table {
      if e.tag == "Row" {
        res.push(e)
      } else { break }
    }
    let hasHeight = true
    for row in res {
      if "Height" not in row.attrs {
        hasHeight = false
        break
      }
      rows.push(eval(row.attrs.Height + "pt"))
    }
    if not hasHeight {
      rows = res.len()
    }
    res
  }

  let cells = ()
  {
    let res = ()
    for e in row-data {
      let table-cells = e.children.filter(e => if type(e) == "string" { false } else { true })
      for c in table-cells {
        let colspan = 1
        let rowspan = 1
        let content = c.children.at(0).children.at(0)
        if "MergeDown" in c.attrs {
          rowspan = eval(c.attrs.MergeDown) + 1
        }
        if "MergeAcross" in c.attrs {
          colspan = eval(c.attrs.MergeAcross) + 1
        }

        if "StyleID" not in c.attrs {
          cells.push(
            table.cell(
              colspan: colspan,
              rowspan: rowspan,
              // align: align,
              content,
            ),
          )
          continue
        }

        let styleId = c.attrs.StyleID
        let style = if styleId != none { typst-style-dict.at(styleId) } else {
          typst-style-dict.at("Default")
        }
        let align = eval(style)
        cells.push(
          table.cell(
            colspan: colspan,
            rowspan: rowspan,
            align: align,
            content,
          ),
        )
      }
    }
  }
  (
    columns: columns,
    rows: rows,
    cells: cells,
  )
}
