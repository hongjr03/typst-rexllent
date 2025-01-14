#import "../typst-package/lib.typ": xlsx-parser
#set page(width: auto, height: auto, margin: 1em)

#xlsx-parser(
  read("typst.xlsx", encoding: none),
)

#pagebreak()

#xlsx-parser(
  read("typst_guy.xlsx", encoding: none),
)

#pagebreak()

#xlsx-parser(
  read("monet.xlsx", encoding: none),
)
