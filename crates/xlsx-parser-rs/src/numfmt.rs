// Borrowed from 

use once_cell::sync::Lazy;
use std::collections::HashMap;

pub static BUILT_IN_NUM_FMT: Lazy<HashMap<u32, &'static str>> = Lazy::new(|| {
    let mut m = HashMap::new();
    m.insert(0, "general");
    m.insert(1, "0");
    m.insert(2, "0.00");
    m.insert(3, "#,##0");
    m.insert(4, "#,##0.00");
    m.insert(9, "0%");
    m.insert(10, "0.00%");
    m.insert(11, "0.00E+00");
    m.insert(12, "# ?/?");
    m.insert(13, "# ??/??");
    m.insert(14, "mm-dd-yy");
    m.insert(15, "d-mmm-yy");
    m.insert(16, "d-mmm");
    m.insert(17, "mmm-yy");
    m.insert(18, "h:mm AM/PM");
    m.insert(19, "h:mm:ss AM/PM");
    m.insert(20, "hh:mm");
    m.insert(21, "hh:mm:ss");
    m.insert(22, "m/d/yy hh:mm");
    m.insert(37, "#,##0 ;(#,##0)");
    m.insert(38, "#,##0 ;[red](#,##0)");
    m.insert(39, "#,##0.00 ;(#,##0.00)");
    m.insert(40, "#,##0.00 ;[red](#,##0.00)");
    m.insert(41, "_(* #,##0_);_(* \\(#,##0\\);_(* \"-\"_);_(@_)");
    m.insert(
        42,
        "_(\"$\"* #,##0_);_(\"$\"* \\(#,##0\\);_(\"$\"* \"-\"_);_(@_)",
    );
    m.insert(43, "_(* #,##0.00_);_(* \\(#,##0.00\\);_(* \"-\"??_);_(@_)");
    m.insert(
        44,
        "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)",
    );
    m.insert(45, "mm:ss");
    m.insert(46, "[h]:mm:ss");
    m.insert(47, "mm:ss.0");
    m.insert(48, "##0.0E+0");
    m.insert(49, "@");
    m
});

pub static LANG_NUM_FMT: Lazy<HashMap<&'static str, HashMap<u32, &'static str>>> =
    Lazy::new(|| {
        let mut m = HashMap::new();

        let mut zh_tw = HashMap::new();
        zh_tw.insert(27, "[$-404]e/m/d");
        zh_tw.insert(28, "[$-404]e\"年\"m\"月\"d\"日\"");
        zh_tw.insert(29, "[$-404]e\"年\"m\"月\"d\"日\"");
        zh_tw.insert(30, "m/d/yy");
        zh_tw.insert(31, "yyyy\"年\"m\"月\"d\"日\"");
        zh_tw.insert(32, "hh\"時\"mm\"分\"");
        zh_tw.insert(33, "hh\"時\"mm\"分\"ss\"秒\"");
        zh_tw.insert(34, "上午/下午 hh\"時\"mm\"分\"");
        zh_tw.insert(35, "上午/下午 hh\"時\"mm\"分\"ss\"秒\"");
        zh_tw.insert(36, "[$-404]e/m/d");
        zh_tw.insert(50, "[$-404]e/m/d");
        zh_tw.insert(51, "[$-404]e\"年\"m\"月\"d\"日\"");
        zh_tw.insert(52, "上午/下午 hh\"時\"mm\"分\"");
        zh_tw.insert(53, "上午/下午 hh\"時\"mm\"分\"ss\"秒\"");
        zh_tw.insert(54, "[$-404]e\"年\"m\"月\"d\"日\"");
        zh_tw.insert(55, "上午/下午 hh\"時\"mm\"分\"");
        zh_tw.insert(56, "上午/下午 hh\"時\"mm\"分\"ss\"秒\"");
        zh_tw.insert(57, "[$-404]e/m/d");
        zh_tw.insert(58, "[$-404]e\"年\"m\"月\"d\"日\"");
        m.insert("zh-tw", zh_tw);

        let mut zh_cn = HashMap::new();
        zh_cn.insert(27, "yyyy\"年\"m\"月\"");
        zh_cn.insert(28, "m\"月\"d\"日\"");
        zh_cn.insert(29, "m\"月\"d\"日\"");
        zh_cn.insert(30, "m/d/yy");
        zh_cn.insert(31, "yyyy\"年\"m\"月\"d\"日\"");
        zh_cn.insert(32, "h\"时\"mm\"分\"");
        zh_cn.insert(33, "h\"时\"mm\"分\"ss\"秒\"");
        zh_cn.insert(34, "上午/下午 h\"时\"mm\"分\"");
        zh_cn.insert(35, "上午/下午 h\"时\"mm\"分\"ss\"秒\"");
        zh_cn.insert(36, "yyyy\"年\"m\"月\"");
        zh_cn.insert(50, "yyyy\"年\"m\"月\"");
        zh_cn.insert(51, "m\"月\"d\"日\"");
        zh_cn.insert(52, "yyyy\"年\"m\"月\"");
        zh_cn.insert(53, "m\"月\"d\"日\"");
        zh_cn.insert(54, "m\"月\"d\"日\"");
        zh_cn.insert(55, "上午/下午 h\"时\"mm\"分\"");
        zh_cn.insert(56, "上午/下午 h\"时\"mm\"分\"ss\"秒\"");
        zh_cn.insert(57, "yyyy\"年\"m\"月\"");
        zh_cn.insert(58, "m\"月\"d\"日\"");
        m.insert("zh-cn", zh_cn);

        let mut ja_jp = HashMap::new();
        ja_jp.insert(27, "[$-411]ge.m.d");
        ja_jp.insert(28, "[$-411]ggge\"年\"m\"月\"d\"日\"");
        ja_jp.insert(29, "[$-411]ggge\"年\"m\"月\"d\"日\"");
        ja_jp.insert(30, "m/d/yy");
        ja_jp.insert(31, "yyyy\"年\"m\"月\"d\"日\"");
        ja_jp.insert(32, "h\"時\"mm\"分\"");
        ja_jp.insert(33, "h\"時\"mm\"分\"ss\"秒\"");
        ja_jp.insert(34, "yyyy\"年\"m\"月\"");
        ja_jp.insert(35, "m\"月\"d\"日\"");
        ja_jp.insert(36, "[$-411]ge.m.d");
        ja_jp.insert(50, "[$-411]ge.m.d");
        ja_jp.insert(51, "[$-411]ggge\"年\"m\"月\"d\"日\"");
        ja_jp.insert(52, "yyyy\"年\"m\"月\"");
        ja_jp.insert(53, "m\"月\"d\"日\"");
        ja_jp.insert(54, "[$-411]ggge\"年\"m\"月\"d\"日\"");
        ja_jp.insert(55, "yyyy\"年\"m\"月\"");
        ja_jp.insert(56, "m\"月\"d\"日\"");
        ja_jp.insert(57, "[$-411]ge.m.d");
        ja_jp.insert(58, "[$-411]ggge\"年\"m\"月\"d\"日\"");
        m.insert("ja-jp", ja_jp);

        let mut ko_kr = HashMap::new();
        ko_kr.insert(27, "yyyy\"年\" mm\"月\" dd\"日\"");
        ko_kr.insert(28, "mm-dd");
        ko_kr.insert(29, "mm-dd");
        ko_kr.insert(30, "mm-dd-yy");
        ko_kr.insert(31, "yyyy\"년\" mm\"월\" dd\"일\"");
        ko_kr.insert(32, "h\"시\" mm\"분\"");
        ko_kr.insert(33, "h\"시\" mm\"분\" ss\"초\"");
        ko_kr.insert(34, "yyyy-mm-dd");
        ko_kr.insert(35, "yyyy-mm-dd");
        ko_kr.insert(36, "yyyy\"年\" mm\"月\" dd\"日\"");
        ko_kr.insert(50, "yyyy\"年\" mm\"月\" dd\"日\"");
        ko_kr.insert(51, "mm-dd");
        ko_kr.insert(52, "yyyy-mm-dd");
        ko_kr.insert(53, "yyyy-mm-dd");
        ko_kr.insert(54, "mm-dd");
        ko_kr.insert(55, "yyyy-mm-dd");
        ko_kr.insert(56, "yyyy-mm-dd");
        ko_kr.insert(57, "yyyy\"年\" mm\"月\" dd\"日\"");
        ko_kr.insert(58, "mm-dd");
        m.insert("ko-kr", ko_kr);

        let mut th_th = HashMap::new();
        th_th.insert(59, "t0");
        th_th.insert(60, "t0.00");
        th_th.insert(61, "t#,##0");
        th_th.insert(62, "t#,##0.00");
        th_th.insert(67, "t0%");
        th_th.insert(68, "t0.00%");
        th_th.insert(69, "t# ?/?");
        th_th.insert(70, "t# ??/??");
        th_th.insert(71, "\u{0E27}/\u{0E14}/\u{0E1B}\u{0E1B}\u{0E1B}\u{0E1B}");
        th_th.insert(72, "\u{0E27}-\u{0E14}\u{0E14}\u{0E14}-\u{0E1B}\u{0E1B}");
        th_th.insert(73, "\u{0E27}-\u{0E14}\u{0E14}\u{0E14}");
        th_th.insert(74, "\u{0E14}\u{0E14}\u{0E14}-\u{0E1B}\u{0E1B}");
        th_th.insert(75, "\u{0E0A}:\u{0E19}\u{0E19}");
        th_th.insert(76, "\u{0E0A}:\u{0E19}\u{0E19}:\u{0E17}\u{0E17}");
        th_th.insert(
            77,
            "\u{0E27}/\u{0E14}/\u{0E1B}\u{0E1B}\u{0E1B}\u{0E1B} \u{0E0A}:\u{0E19}\u{0E19}",
        );
        th_th.insert(78, "\u{0E19}\u{0E19}:\u{0E17}\u{0E17}");
        th_th.insert(79, "[\u{0E0A}%5D]\u{0E19}\u{0E19}:\u{0E17}\u{0E17}");
        th_th.insert(80, "\u{0E19}\u{0E19}:\u{0E17}\u{0E17}.0");
        th_th.insert(81, "d/m/bb");
        m.insert("th-th", th_th);

        m
    });
