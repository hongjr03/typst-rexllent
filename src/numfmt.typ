#import "@preview/jogs:0.2.4": compile-js, call-js-function, list-global-property

#let numfmt-src = read("numfmt.js")
#let numfmt-bytecode = compile-js(numfmt-src)
// #list-global-property(numfmt-bytecode)

#let format(..args) = {
  call-js-function(numfmt-bytecode, "format", ..args)
}

#let format-color(..args) = {
  call-js-function(numfmt-bytecode, "formatColor", ..args)
}

#let get-locale(..args) = {
  call-js-function(numfmt-bytecode, "getLocale", ..args)
}

// // #locale("zh-CN")

// // #call-js-function(numfmt-bytecode, "getLocale", "zh-CN")

// // #format("d dd ddd dddd ddddd", 3290.1278435, (locale: "zh-CH", overflow: "######"))
// // #format("#,##0.00", 1234.56)
// #format-color("[blue]0;[green]-0;[magenta]0;[cyan]@", "foo")
