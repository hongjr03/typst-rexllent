#let numfmt = plugin("numfmt.wasm")

#let format(..args, opt: (:)) = {
  str(numfmt.format(..args.pos().map(x => bytes({ str(x) })), bytes(json.encode(opt))))
}

#let format-color(..args) = {
  let color = str(numfmt.format-color(..args.pos().map(x => bytes(str(x)))))
  if color == "cyan" {
    rgb(0, 255, 255)
  } else if color == "magenta" {
    rgb(255, 0, 255)
  } else {
    eval(color)
  }
}

// #numfmt.get-locale()

// // #locale("zh-CN")

// // #call-js-function(numfmt-bytecode, "getLocale", "zh-CN")

// // #format("d dd ddd dddd ddddd", 3290.1278435, (locale: "zh-CH", overflow: "######"))
// #format("[$-F800]dddd\,\ mmmm\ dd\,\ yyy", 3290.1278435, opt: (locale: "zh-CN"))
// #format("[>=100]\"A\"0;[<=-100]\"B\"0;\"C\"0", 6.3)

// #format-color("[blue]0;[green]-0;[magenta]0;[cyan]@", 0)
