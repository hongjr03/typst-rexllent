use once_cell::unsync::Lazy;
use rquickjs::prelude::IntoArgs;
use rquickjs::{Context, Ctx, Function, Object, Runtime, Value};
use std::str;
use std::thread_local; // Import thread_local
use typst_wasm_protocol::wasm_export;

// Read the JavaScript code at compile time.
// Assumes numfmt.js is in the project root (same directory as Cargo.toml).
const NUMFMT_JS_CODE: &str = include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/numfmt.js"));

// Global JavaScript runtime, thread-local to handle !Sync types in static context.
thread_local! {
    static JS_RUNTIME: Lazy<Runtime> =
        Lazy::new(|| Runtime::new().expect("Failed to create rquickjs Runtime"));

    // JavaScript module script, formatted once, also thread-local.
    static JS_FULL_SCRIPT: Lazy<String> = Lazy::new(|| {
        format!(
            r#"
            (function() {{ // IIFE to manage scope and return exports
                var exports = {{}};
                {} // User's numfmt.js content is injected here
                return exports;
            }})();
        "#,
            NUMFMT_JS_CODE
        )
    });
}

// Helper function to execute JS and call a specific function from the numfmt module.
// Returns the result as a String or an error message.
fn call_js_numfmt_function<'js, A>(
    ctx: &Ctx<'js>,
    script_code: &str, // Added script_code parameter
    fn_name: &str,
    args: A,
) -> Result<String, String>
where
    A: IntoArgs<'js>, // Removed + Send
{
    // Evaluate the JavaScript string. This returns the `exports` object.
    let exports_val: Value = ctx
        .eval(script_code) // Use passed script_code
        .map_err(|e| format!("JS Script Eval Error: {}", e))?;

    let exports: Object = exports_val
        .into_object()
        .ok_or_else(|| "JS script did not return an object".to_string())?;

    // Get the specific function from the exports object.
    let func: Function = exports
        .get(fn_name)
        .map_err(|e| format!("Failed to get JS function '{}': {}", fn_name, e))?;

    // Call the JavaScript function.
    let result_val: Value = func
        .call(args)
        .map_err(|e| format!("JS function '{}' call error: {}", fn_name, e))?;

    // Handle different types of results, converting them to string.
    if result_val.is_object() || result_val.is_array() {
        let global = ctx.globals();
        let json_obj: Object = global
            .get("JSON")
            .map_err(|e| format!("Failed to get JSON object: {}", e))?;
        let stringify_fn: Function = json_obj
            .get("stringify")
            .map_err(|e| format!("Failed to get JSON.stringify function: {}", e))?;
        let json_string_val: Value = stringify_fn
            .call((result_val,))
            .map_err(|e| format!("JSON.stringify call error: {}", e))?;
        let rjs_string: rquickjs::String = json_string_val
            .as_string()
            .ok_or_else(|| "JSON.stringify did not return a string".to_string())?
            .clone();
        rjs_string
            .to_string()
            .map_err(|e| format!("Failed to convert JS string to Rust string: {}", e))
    } else if result_val.is_string() {
        result_val
            .as_string()
            .unwrap()
            .to_string()
            .map_err(|e| format!("Failed to convert JS string result: {}", e))
    } else if result_val.is_number() {
        Ok(result_val.as_number().unwrap().to_string())
    } else if result_val.is_null() || result_val.is_undefined() {
        Ok("".to_string())
    } else {
        Ok(format!("{:?}", result_val))
    }
}

/// Typst entry point for the `format` function.
#[wasm_export(export_rename = "format")]
pub fn typst_format(
    format_string_bytes: &[u8],
    value_bytes: &[u8],
    options_bytes: &[u8],
) -> Vec<u8> {
    JS_RUNTIME.with(|runtime| {
        let Ok(ctx_obj) = Context::full(runtime) else {
            return "Failed to create JS Context".to_string().into_bytes();
        };
        ctx_obj.with(|ctx_ref| {
            JS_FULL_SCRIPT.with(|script_lazy_ref| {
                let script_code = script_lazy_ref.as_str();
                let value_str = String::from_utf8_lossy(value_bytes);
                let format_str = String::from_utf8_lossy(format_string_bytes);
                let format_string_for_js = format_str.into_owned();

                let options_str = String::from_utf8_lossy(options_bytes);
                let options_arg: Value;

                if !options_str.is_empty() {
                    match ctx_ref.json_parse(options_str.as_ref()) {
                        Ok(parsed_options_val) => {
                            if parsed_options_val.is_object() {
                                options_arg = parsed_options_val;
                            } else {
                                return "Options argument is not a valid JSON object"
                                    .to_string()
                                    .into_bytes();
                            }
                        }
                        Err(e) => {
                            return format!("Failed to parse options JSON: {}", e).into_bytes()
                        }
                    }
                } else {
                    options_arg = Value::new_undefined(ctx_ref.clone());
                }

                let result = match value_str.parse::<f64>() {
                    Ok(num) => call_js_numfmt_function(
                        &ctx_ref,
                        script_code,
                        "format",
                        (format_string_for_js, num, options_arg.clone()),
                    ),
                    Err(_) => call_js_numfmt_function(
                        &ctx_ref,
                        script_code,
                        "format",
                        (
                            value_str.into_owned(),
                            format_string_for_js,
                            options_arg.clone(),
                        ),
                    ),
                };

                match result {
                    Ok(s) => s.into_bytes(),
                    Err(e) => e.into_bytes(),
                }
            })
        })
    })
}

/// Typst entry point for the `formatColor` function.
#[wasm_export(export_rename = "format-color")]
pub fn typst_format_color(format_string_bytes: &[u8], value_bytes: &[u8]) -> Vec<u8> {
    JS_RUNTIME.with(|runtime| {
        let Ok(ctx_obj) = Context::full(runtime) else {
            return "Failed to create JS Context".to_string().into_bytes();
        };
        ctx_obj.with(|ctx_ref| {
            JS_FULL_SCRIPT.with(|script_lazy_ref| {
                let script_code = script_lazy_ref.as_str();
                let value_str = String::from_utf8_lossy(value_bytes);
                let format_str = String::from_utf8_lossy(format_string_bytes);
                let format_string_for_js = format_str.into_owned();

                let result = match value_str.parse::<f64>() {
                    Ok(num) => call_js_numfmt_function(
                        &ctx_ref,
                        script_code,
                        "formatColor",
                        (format_string_for_js, num),
                    ),
                    Err(_) => call_js_numfmt_function(
                        &ctx_ref,
                        script_code,
                        "formatColor",
                        (value_str.into_owned(), format_string_for_js),
                    ),
                };

                match result {
                    Ok(s) => s.into_bytes(),
                    Err(e) => e.into_bytes(),
                }
            })
        })
    })
}

/// Typst entry point for the `getFormatDateInfo` function.
#[wasm_export(export_rename = "get-format-date-info")]
pub fn typst_get_format_date_info(format_string_bytes: &[u8]) -> Vec<u8> {
    JS_RUNTIME.with(|runtime| {
        let Ok(ctx_obj) = Context::full(runtime) else {
            return "Failed to create JS Context".to_string().into_bytes();
        };
        ctx_obj.with(|ctx_ref| {
            JS_FULL_SCRIPT.with(|script_lazy_ref| {
                let script_code = script_lazy_ref.as_str();
                let format_str = String::from_utf8_lossy(format_string_bytes).into_owned();

                let result = call_js_numfmt_function(
                    &ctx_ref,
                    script_code,
                    "getFormatDateInfo",
                    (format_str,),
                );

                match result {
                    Ok(s) => s.into_bytes(),
                    Err(e) => e.into_bytes(),
                }
            })
        })
    })
}

/// Typst entry point for the `getFormatInfo` function.
#[wasm_export(export_rename = "get-format-info")]
pub fn typst_get_format_info(format_string_bytes: &[u8], currency_symbol_bytes: &[u8]) -> Vec<u8> {
    JS_RUNTIME.with(|runtime| {
        let Ok(ctx_obj) = Context::full(runtime) else {
            return "Failed to create JS Context".to_string().into_bytes();
        };
        ctx_obj.with(|ctx_ref| {
            JS_FULL_SCRIPT.with(|script_lazy_ref| {
                let script_code = script_lazy_ref.as_str();
                let format_str = String::from_utf8_lossy(format_string_bytes).into_owned();
                let currency_str = String::from_utf8_lossy(currency_symbol_bytes);

                let options_arg_val: Value;
                if !currency_str.is_empty() {
                    match Object::new(ctx_ref.clone()) {
                        Ok(obj) => {
                            if let Err(e) = obj.set("currency", currency_str.into_owned()) {
                                return format!("Failed to set currency on options object: {}", e)
                                    .into_bytes();
                            }
                            options_arg_val = obj.into_value();
                        }
                        Err(e) => {
                            return format!("Failed to create JS object for options: {}", e)
                                .into_bytes();
                        }
                    }
                } else {
                    options_arg_val = Value::new_undefined(ctx_ref.clone());
                }

                let result = call_js_numfmt_function(
                    &ctx_ref,
                    script_code,
                    "getFormatInfo",
                    (format_str, options_arg_val),
                );

                match result {
                    Ok(s) => s.into_bytes(),
                    Err(e) => e.into_bytes(),
                }
            })
        })
    })
}

/// Typst entry point for the `getLocale` function.
#[wasm_export(export_rename = "get-locale")]
pub fn typst_get_locale() -> Vec<u8> {
    JS_RUNTIME.with(|runtime| {
        let Ok(ctx_obj) = Context::full(runtime) else {
            return "Failed to create JS Context".to_string().into_bytes();
        };
        ctx_obj.with(|ctx_ref| {
            JS_FULL_SCRIPT.with(|script_lazy_ref| {
                let script_code = script_lazy_ref.as_str();

                let result = call_js_numfmt_function(
                    &ctx_ref,
                    script_code,
                    "getLocale",
                    (), // No arguments
                );

                match result {
                    Ok(s) => s.into_bytes(),
                    Err(e) => e.into_bytes(),
                }
            })
        })
    })
}
