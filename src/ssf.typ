#import "@preview/jogs:0.2.4": compile-js, call-js-function

#let ssf-src = read("ssf.js")
#let ssf-bytecode = compile-js(ssf-src)

#let format(..args) = {
  call-js-function(ssf-bytecode, "format", ..args)
}
