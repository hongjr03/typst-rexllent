"use strict";
const e = 2,
    t = 4,
    n = 8,
    r = 16,
    a = 32,
    i = 64,
    o = 128,
    s = 256,
    m = 512,
    d = -1,
    l = 1,
    u = 6,
    c = "general",
    p = "hash",
    f = "zero",
    h = "qmark",
    g = "slash",
    b = "group",
    y = "scale",
    v = "comma",
    _ = "break",
    j = "text",
    M = "plus",
    k = "minus",
    F = "point",
    x = "space",
    w = "percent",
    A = "digit",
    S = "calendar",
    z = "error",
    C = "datetime",
    D = "duration",
    E = "condition",
    I = "dbnum",
    O = "natnum",
    T = "locale",
    N = "color",
    Y = "modifier",
    P = "ampm",
    R = "escaped",
    L = "string",
    U = "skip",
    H = "exp",
    B = "fill",
    G = "paren",
    J = "char",
    V = [
        "#000",
        "#FFF",
        "#F00",
        "#0F0",
        "#00F",
        "#FF0",
        "#F0F",
        "#0FF",
        "#000",
        "#FFF",
        "#F00",
        "#0F0",
        "#00F",
        "#FF0",
        "#F0F",
        "#0FF",
        "#800",
        "#080",
        "#008",
        "#880",
        "#808",
        "#088",
        "#CCC",
        "#888",
        "#99F",
        "#936",
        "#FFC",
        "#CFF",
        "#606",
        "#F88",
        "#06C",
        "#CCF",
        "#008",
        "#F0F",
        "#FF0",
        "#0FF",
        "#808",
        "#800",
        "#088",
        "#00F",
        "#0CF",
        "#CFF",
        "#CFC",
        "#FF9",
        "#9CF",
        "#F9C",
        "#C9F",
        "#FC9",
        "#36F",
        "#3CC",
        "#9C0",
        "#FC0",
    ],
    $ = [
        "¤",
        "$",
        "£",
        "¥",
        "֏",
        "؋",
        "৳",
        "฿",
        "៛",
        "₡",
        "₦",
        "₩",
        "₪",
        "₫",
        "€",
        "₭",
        "₮",
        "₱",
        "₲",
        "₴",
        "₸",
        "₹",
        "₺",
        "₼",
        "₽",
        "₾",
        "₿",
    ],
    W = new RegExp("[" + $.join("") + "]");
function Z(e, t, n) {
    return (
        (t = (function (e) {
            var t = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == typeof t ? t : t + "";
        })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            })
            : (e[t] = n),
        e
    );
}
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? K(Object(n), !0).forEach(function (t) {
                Z(e, t, n[t]);
            })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : K(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var q = Object.freeze({
    1078: "af",
    1052: "sq",
    1118: "am",
    5121: "ar_DZ",
    15361: "ar_BH",
    3073: "ar_EG",
    2049: "ar_IQ",
    11265: "ar_JO",
    13313: "ar_KW",
    12289: "ar_LB",
    4097: "ar_LY",
    6145: "ar_MA",
    8193: "ar_OM",
    16385: "ar_QA",
    1025: "ar_SA",
    10241: "ar_SY",
    7169: "ar_TN",
    14337: "ar_AE",
    9217: "ar_YE",
    1067: "hy",
    1101: "as",
    2092: "az_AZ",
    1068: "az_AZ",
    1069: "eu",
    1059: "be",
    2117: "bn",
    1093: "bn_IN",
    5146: "bs",
    1026: "bg",
    1109: "my",
    1027: "ca",
    2052: "zh_CN",
    3076: "zh_HK",
    5124: "zh_MO",
    4100: "zh_SG",
    1028: "zh_TW",
    1050: "hr",
    1029: "cs",
    1030: "da",
    1125: "dv",
    2067: "nl_BE",
    1043: "nl_NL",
    1126: "bin",
    3081: "en_AU",
    10249: "en_BZ",
    4105: "en_CA",
    9225: "en_CB",
    2057: "en_GB",
    16393: "en_IN",
    6153: "en_IE",
    8201: "en_JM",
    5129: "en_NZ",
    13321: "en_PH",
    7177: "en_ZA",
    11273: "en_TT",
    1033: "en_US",
    12297: "en_ZW",
    1061: "et",
    1071: "mk",
    1080: "fo",
    1065: "fa",
    1124: "fil",
    1035: "fi",
    2060: "fr_BE",
    11276: "fr_CM",
    3084: "fr_CA",
    9228: "fr_CG",
    12300: "fr_CI",
    1036: "fr_FR",
    5132: "fr_LU",
    13324: "fr_ML",
    6156: "fr_MC",
    14348: "fr_MA",
    10252: "fr_SN",
    4108: "fr_CH",
    7180: "fr",
    1122: "fy_NL",
    2108: "gd_IE",
    1084: "gd",
    1110: "gl",
    1079: "ka",
    3079: "de_AT",
    1031: "de_DE",
    5127: "de_LI",
    4103: "de_LU",
    2055: "de_CH",
    1032: "el",
    1140: "gn",
    1095: "gu",
    1279: "en",
    1037: "he",
    1081: "hi",
    1038: "hu",
    1039: "is",
    1136: "ig_NG",
    1057: "id",
    1040: "it_IT",
    2064: "it_CH",
    1041: "ja",
    1099: "kn",
    1120: "ks",
    1087: "kk",
    1107: "km",
    1111: "kok",
    1042: "ko",
    1088: "ky",
    1108: "lo",
    1142: "la",
    1062: "lv",
    1063: "lt",
    2110: "ms_BN",
    1086: "ms_MY",
    1100: "ml",
    1082: "mt",
    1112: "mni",
    1153: "mi",
    1102: "mr",
    1104: "mn",
    2128: "mn",
    1121: "ne",
    1044: "no_NO",
    2068: "no_NO",
    1096: "or",
    1045: "pl",
    1046: "pt_BR",
    2070: "pt_PT",
    1094: "pa",
    1047: "rm",
    2072: "ro_MO",
    1048: "ro_RO",
    1049: "ru",
    2073: "ru_MO",
    1083: "se",
    1103: "sa",
    3098: "sr_SP",
    2074: "sr_SP",
    1072: "st",
    1074: "tn",
    1113: "sd",
    1115: "si",
    1051: "sk",
    1060: "sl",
    1143: "so",
    1070: "sb",
    11274: "es_AR",
    16394: "es_BO",
    13322: "es_CL",
    9226: "es_CO",
    5130: "es_CR",
    7178: "es_DO",
    12298: "es_EC",
    17418: "es_SV",
    4106: "es_GT",
    18442: "es_HN",
    2058: "es_MX",
    19466: "es_NI",
    6154: "es_PA",
    15370: "es_PY",
    10250: "es_PE",
    20490: "es_PR",
    1034: "es_ES",
    14346: "es_UY",
    8202: "es_VE",
    1089: "sw",
    2077: "sv_FI",
    1053: "sv_SE",
    1114: "syc",
    1064: "tg",
    1097: "ta",
    1092: "tt",
    1098: "te",
    1054: "th",
    1105: "bo",
    1073: "ts",
    1055: "tr",
    1090: "tk",
    1058: "uk",
    1056: "ur",
    2115: "uz_UZ",
    1091: "uz_UZ",
    1075: "ve",
    1066: "vi",
    1106: "cy",
    1076: "xh",
    1085: "yi",
    1077: "zu",
});
const Q = /^([a-z\d]+)(?:[_-]([a-z\d]+))?(?:\.([a-z\d]+))?(?:@([a-z\d]+))?$/i,
    ee = {},
    te = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return e.replace(/~/g, t).split(";");
    },
    ne = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return (
            e.mmm ||
            (e.mmm =
                t < 1
                    ? e.mmmm.concat()
                    : e.mmmm.map((e) => {
                        const n = e.slice(0, t % 10);
                        return n + (t < 10 || e === n ? "" : ".");
                    })),
            e.ddd ||
            (e.ddd =
                n < 1
                    ? e.dddd.concat()
                    : e.dddd.map((e) => {
                        const t = e.slice(0, n % 10);
                        return t + (n < 10 || e === t ? "" : ".");
                    })),
            !e.mmm6 && e.mmmm6 && (e.mmm6 = e.mmmm6),
            e
        );
    },
    re = {
        group: " ",
        decimal: ".",
        positive: "+",
        negative: "-",
        percent: "%",
        exponent: "E",
        nan: "NaN",
        infinity: "∞",
        ampm: te("AM;PM"),
        mmmm6: te(
            "Muharram;Safar;Rabiʻ I;Rabiʻ II;Jumada I;Jumada II;Rajab;Shaʻban;Ramadan;Shawwal;Dhuʻl-Qiʻdah;Dhuʻl-Hijjah"
        ),
        mmm6: te(
            "Muh.;Saf.;Rab. I;Rab. II;Jum. I;Jum. II;Raj.;Sha.;Ram.;Shaw.;Dhuʻl-Q.;Dhuʻl-H."
        ),
        mmmm: te(
            "January;February;March;April;May;June;July;August;September;October;November;December"
        ),
        mmm: te("Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec"),
        dddd: te("Sunday;Monday;Tuesday;Wednesday;Thursday;Friday;Saturday"),
        ddd: te("Sun;Mon;Tue;Wed;Thu;Fri;Sat"),
        bool: te("TRUE;FALSE"),
        preferMDY: !1,
    };
function ae(e) {
    const t = Q.exec(e);
    if (!t) throw new SyntaxError("Malformed locale: ".concat(e));
    return {
        lang: t[1] + (t[2] ? "_" + t[2] : ""),
        language: t[1],
        territory: t[2] || "",
    };
}
function ie(e) {
    if ("number" == typeof e) return q[65535 & e] || null;
    const t = parseInt(e, 16);
    return isFinite(t) && q[65535 & t]
        ? q[65535 & t] || null
        : Q.test(e)
            ? e
            : null;
}
function oe(e) {
    const t = ie(e);
    let n = null;
    if (t) {
        const e = ae(t);
        n = ee[e.lang] || ee[e.language] || null;
    }
    return n;
}
function se(e) {
    return Object.assign({}, re, e);
}
function me(e, t) {
    const n = "object" == typeof t ? t : ae(t);
    return (
        (ee[n.lang] = se(e)),
        n.language === n.lang || ee[n.language] || (ee[n.language] = se(e)),
        ee[n.lang]
    );
}
const de = se({ group: ",", preferMDY: !0 });
(de.isDefault = !0),
    me(
        {
            group: ",",
            ampm: te("上午;下午"),
            mmmm: te(
                "一月;二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月"
            ),
            mmm: te("1月;2月;3月;4月;5月;6月;7月;8月;9月;10月;11月;12月"),
            dddd: te("~日;~一;~二;~三;~四;~五;~六", "星期"),
            ddd: te("周日;周一;周二;周三;周四;周五;周六"),
        },
        "zh_CN"
    );
const le = {
    group: ",",
    ampm: te("上午;下午"),
    mmmm: te("1月;2月;3月;4月;5月;6月;7月;8月;9月;10月;11月;12月"),
    mmm: te("1月;2月;3月;4月;5月;6月;7月;8月;9月;10月;11月;12月"),
    dddd: te("~日;~一;~二;~三;~四;~五;~六", "星期"),
    ddd: te("周日;周一;周二;周三;周四;周五;周六"),
};
me(
    X(
        X({}, le),
        {},
        { nan: "非數值", dddd: te("~日;~一;~二;~三;~四;~五;~六", "星期") }
    ),
    "zh_TW"
),
    me(
        X(X({}, le), {}, { dddd: te("~日;~一;~二;~三;~四;~五;~六", "星期") }),
        "zh_HK"
    ),
    me(
        X(
            X({}, le),
            {},
            {
                ampm: te("午前;午後"),
                dddd: te("日~;月~;火~;水~;木~;金~;土~", "曜日"),
                ddd: te("日;月;火;水;木;金;土"),
            }
        ),
        "ja"
    ),
    me(
        {
            group: ",",
            ampm: te("오전;오후"),
            mmmm: te("1월;2월;3월;4월;5월;6월;7월;8월;9월;10월;11월;12월"),
            mmm: te("1월;2월;3월;4월;5월;6월;7월;8월;9월;10월;11월;12월"),
            dddd: te("일요일;월요일;화요일;수요일;목요일;금요일;토요일"),
            ddd: te("일;월;화;수;목;금;토"),
        },
        "ko"
    ),
    me(
        {
            group: ",",
            ampm: te("ก่อนเที่ยง;หลังเที่ยง"),
            mmmm: te(
                "มกร~;กุมภาพันธ์;มีน~;เมษายน;พฤษภ~;มิถุนายน;กรกฎ~;สิงห~;กันยายน;ตุล~;พฤศจิกายน;ธันว~",
                "าคม"
            ),
            mmm: te("ม.ค.;ก.พ.;มี.ค.;เม.ย.;พ.ค.;มิ.ย.;ก.ค.;ส.ค.;ก.ย.;ต.ค.;พ.ย.;ธ.ค."),
            dddd: te(
                "วันอาทิตย์;วันจันทร์;วันอังคาร;วันพุธ;วันพฤหัสบดี;วันศุกร์;วันเสาร์"
            ),
            ddd: te("อา.;จ.;อ.;พ.;พฤ.;ศ.;ส."),
        },
        "th"
    ),
    me(
        ne(
            {
                decimal: ",",
                ampm: te("dop.;odp."),
                mmmm: te(
                    "ledna;února;března;dubna;května;června;července;srpna;září;října;listopadu;prosince"
                ),
                mmm: te("I;II;III;IV;V;VI;VII;VIII;IX;X;XI;XII"),
                dddd: te("neděle;pondělí;úterý;středa;čtvrtek;pátek;sobota"),
                bool: te("PRAVDA;NEPRAVDA"),
            },
            -1,
            2
        ),
        "cs"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                mmmm: te(
                    "januar;februar;marts;april;maj;juni;juli;august;september;oktober;november;december"
                ),
                dddd: te("søn~;man~;tirs~;ons~;tors~;fre~;lør~", "dag"),
                bool: te("SAND;FALSK"),
            },
            13,
            13
        ),
        "da"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                ampm: te("a.m.;p.m."),
                mmmm: te(
                    "januari;februari;maart;april;mei;juni;juli;augustus;september;oktober;november;december"
                ),
                mmm: te("jan.;feb.;mrt.;apr.;mei;jun.;jul.;aug.;sep.;okt.;nov.;dec."),
                dddd: te("zondag;maandag;dinsdag;woensdag;donderdag;vrijdag;zaterdag"),
                bool: te("WAAR;ONWAAR"),
            },
            -1,
            2
        ),
        "nl"
    ),
    me({ group: ",", preferMDY: !0 }, "en"),
    me({ group: ",", preferMDY: !0 }, "en_US"),
    me({ group: "," }, "en_AU"),
    me({ group: "," }, "en_CA"),
    me({ group: "," }, "en_GB"),
    me(
        { group: ",", mmm: te("Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sept;Oct;Nov;Dec") },
        "en_IE"
    ),
    me(
        ne(
            {
                decimal: ",",
                nan: "epäluku",
                ampm: te("ap.;ip."),
                mmmm: te(
                    "tammi~;helmi~;maalis~;huhti~;touko~;kesä~;heinä~;elo~;syys~;loka~;marras~;joulu~",
                    "kuuta"
                ),
                mmm: te(
                    "tammik.;helmik.;maalisk.;huhtik.;toukok.;kesäk.;heinäk.;elok.;syysk.;lokak.;marrask.;jouluk."
                ),
                dddd: te(
                    "sunnun~;maanan~;tiis~;keskiviikkona;tors~;perjan~;lauan~",
                    "taina"
                ),
                bool: te("TOSI;EPÄTOSI"),
            },
            -1,
            2
        ),
        "fi"
    );
const ue = ne(
    {
        group: " ",
        decimal: ",",
        mmmm: te(
            "janvier;février;mars;avril;mai;juin;juillet;août;septembre;octobre;novembre;décembre"
        ),
        mmm: te("janv.;févr.;mars;avr.;mai;juin;juil.;août;sept.;oct.;nov.;déc."),
        dddd: te("~manche;lun~;mar~;mercre~;jeu~;vendre~;same~", "di"),
        bool: te("VRAI;FAUX"),
    },
    -1,
    13
);
me(X({}, ue), "fr"),
    me(
        X(
            X({}, ue),
            {},
            {
                mmm: te(
                    "janv.;févr.;mars;avr.;mai;juin;juill.;août;sept.;oct.;nov.;déc."
                ),
            }
        ),
        "fr_CA"
    ),
    me(X({ group: "'", decimal: "." }, ue), "fr_CH");
const ce = ne(
    {
        mmmm: te(
            "Januar;Februar;März;April;Mai;Juni;Juli;August;September;Oktober;November;Dezember"
        ),
        mmm: te("Jan.;Feb.;März;Apr.;Mai;Juni;Juli;Aug.;Sept.;Okt.;Nov.;Dez."),
        dddd: te("Sonn~;Mon~;Diens~;Mittwoch;Donners~;Frei~;Sams~", "tag"),
        bool: te("WAHR;FALSCH"),
    },
    -1,
    12
);
me(X({ group: ".", decimal: "," }, ce), "de"),
    me(X({ group: "'", decimal: "." }, ce), "de_CH"),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                ampm: te("π.μ.;μ.μ."),
                mmmm: te(
                    "Ιανουαρ~;Φεβρουαρ~;Μαρτ~;Απριλ~;Μαΐου;Ιουν~;Ιουλ~;Αυγούστου;Σεπτεμβρ~;Οκτωβρ~;Νοεμβρ~;Δεκεμβρ~",
                    "ίου"
                ),
                mmm: te("Ιαν;Φεβ;Μαρ;Απρ;Μαΐ;Ιουν;Ιουλ;Αυγ;Σεπ;Οκτ;Νοε;Δεκ"),
                dddd: te("Κυριακή;Δευτέρα;Τρίτη;Τετάρτη;Πέμπτη;Παρασκευή;Σάββατο"),
            },
            -1,
            3
        ),
        "el"
    ),
    me(
        {
            decimal: ",",
            ampm: te("de.;du."),
            mmmm: te(
                "január;február;március;április;május;június;július;augusztus;szeptember;október;november;december"
            ),
            mmm: te(
                "jan.;febr.;márc.;ápr.;máj.;jún.;júl.;aug.;szept.;okt.;nov.;dec."
            ),
            dddd: te("vasárnap;hétfő;kedd;szerda;csütörtök;péntek;szombat"),
            ddd: te("V;H;K;Sze;Cs;P;Szo"),
            bool: te("IGAZ;HAMIS"),
        },
        "hu"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                ampm: te("f.h.;e.h."),
                mmmm: te(
                    "janúar;febrúar;mars;apríl;maí;júní;júlí;ágúst;september;október;nóvember;desember"
                ),
                dddd: te(
                    "sunnu~;mánu~;þriðju~;miðviku~;fimmtu~;föstu~;laugar~",
                    "dagur"
                ),
            },
            13,
            13
        ),
        "is"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                mmmm: te(
                    "Januari;Februari;Maret;April;Mei;Juni;Juli;Agustus;September;Oktober;November;Desember"
                ),
                dddd: te("Minggu;Senin;Selasa;Rabu;Kamis;Jumat;Sabtu"),
            },
            3,
            3
        ),
        "id"
    );
const pe = ne(
    {
        mmmm: te(
            "gennaio;febbraio;marzo;aprile;maggio;giugno;luglio;agosto;settembre;ottobre;novembre;dicembre"
        ),
        dddd: te("domenica;lunedì;martedì;mercoledì;giovedì;venerdì;sabato"),
        bool: te("VERO;FALSO"),
    },
    3,
    3
);
me(X({ group: ".", decimal: "," }, pe), "it"),
    me(X({ group: "'", decimal: "." }, pe), "it_CH");
const fe = {
    decimal: ",",
    ampm: te("a.m.;p.m."),
    mmmm: te(
        "januar;februar;mars;april;mai;juni;juli;august;september;oktober;november;desember"
    ),
    mmm: te("jan.;feb.;mar.;apr.;mai;jun.;jul.;aug.;sep.;okt.;nov.;des."),
    dddd: te("søn~;man~;tirs~;ons~;tors~;fre~;lør~", "dag"),
    bool: te("SANN;USANN"),
};
me(ne(X({}, fe), -1, 13), "nb"),
    me(ne(X({}, fe), -1, 13), "no"),
    me(
        ne(
            {
                decimal: ",",
                mmmm: te(
                    "stycznia;lutego;marca;kwietnia;maja;czerwca;lipca;sierpnia;września;października;listopada;grudnia"
                ),
                dddd: te("niedziela;poniedziałek;wtorek;środa;czwartek;piątek;sobota"),
                ddd: te("niedz.;pon.;wt.;śr.;czw.;pt.;sob."),
                bool: te("PRAWDA;FAŁSZ"),
            },
            3,
            -1
        ),
        "pl"
    );
const he = {
    group: ".",
    decimal: ",",
    mmmm: te(
        "janeiro;fevereiro;março;abril;maio;junho;julho;agosto;setembro;outubro;novembro;dezembro"
    ),
    dddd: te(
        "domingo;segunda-feira;terça-feira;quarta-feira;quinta-feira;sexta-feira;sábado"
    ),
    bool: te("VERDADEIRO;FALSO"),
};
me(ne(he, 13, 13), "pt"),
    me(ne(he, 13, 13), "pt_BR"),
    me(
        {
            decimal: ",",
            nan: "не число",
            mmmm: te(
                "января;февраля;марта;апреля;мая;июня;июля;августа;сентября;октября;ноября;декабря"
            ),
            mmm: te("янв.;февр.;мар.;апр.;мая;июн.;июл.;авг.;сент.;окт.;нояб.;дек."),
            dddd: te("воскресенье;понедельник;вторник;среда;четверг;пятница;суббота"),
            ddd: te("вс;пн;вт;ср;чт;пт;сб"),
            mmmm6: te(
                "рамадан;шавваль;зуль-каада;зуль-хиджжа;мухаррам;раби-уль-авваль;раби-уль-ахир;джумад-уль-авваль;джумад-уль-ахир;раджаб;шаабан;рамадан"
            ),
            mmm6: te(
                "рам.;шав.;зуль-к.;зуль-х.;мух.;раб. I;раб. II;джум. I;джум. II;радж.;шааб.;рам."
            ),
            bool: te("ИСТИНА;ЛОЖЬ"),
        },
        "ru"
    ),
    me(
        ne(
            {
                decimal: ",",
                mmmm: te(
                    "januára;februára;marca;apríla;mája;júna;júla;augusta;septembra;októbra;novembra;decembra"
                ),
                dddd: te("nedeľa;pondelok;utorok;streda;štvrtok;piatok;sobota"),
            },
            3,
            2
        ),
        "sk"
    );
const ge = {
    group: ".",
    decimal: ",",
    ampm: te("a. m.;p. m."),
    mmmm: te(
        "enero;febrero;marzo;abril;mayo;junio;julio;agosto;septiem~;octu~;noviem~;diciem~",
        "bre"
    ),
    mmm: te("ene;feb;mar;abr;may;jun;jul;ago;sept;oct;nov;dic"),
    dddd: te("domingo;lunes;martes;miércoles;jueves;viernes;sábado"),
    ddd: te("dom;lun;mar;mié;jue;vie;sáb"),
    bool: te("VERDADERO;FALSO"),
},
    be = te("ene;feb;mar;abr;may;jun;jul;ago;sep;oct;nov;dic"),
    ye = te("ene.;feb.;mar.;abr.;may.;jun.;jul.;ago.;sept.;oct.;nov.;dic.");
me(X({}, ge), "es"),
    me(X({}, ge), "es_AR"),
    me(X({}, ge), "es_BO"),
    me(X({}, ge), "es_CL"),
    me(X({}, ge), "es_CO"),
    me(X({}, ge), "es_EC"),
    me(X(X({}, ge), {}, { mmm: be, ampm: te("a.m.;p.m.") }), "es_MX"),
    me(X(X({}, ge), {}, { mmm: ye }), "es_PY"),
    me(X(X({}, ge), {}, { mmm: ye }), "es_UY"),
    me(
        X(
            X({}, ge),
            {},
            {
                mmm: ye,
                mmmm: te(
                    "enero;febrero;marzo;abril;mayo;junio;julio;agosto;setiembre;octubre;noviembre;diciembre"
                ),
            }
        ),
        "es_VE"
    ),
    me(
        {
            decimal: ",",
            ampm: te("fm;em"),
            mmmm: te(
                "januari;februari;mars;april;maj;juni;juli;augusti;september;oktober;november;december"
            ),
            mmm: te("jan.;feb.;mars;apr.;maj;juni;juli;aug.;sep.;okt.;nov.;dec."),
            dddd: te("sön~;mån~;tis~;ons~;tors~;fre~;lör~", "dag"),
            ddd: te("sön;mån;tis;ons;tors;fre;lör"),
        },
        "sv"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                ampm: te("ÖÖ;ÖS"),
                mmmm: te(
                    "Ocak;Şubat;Mart;Nisan;Mayıs;Haziran;Temmuz;Ağustos;Eylül;Ekim;Kasım;Aralık"
                ),
                mmm: te("Oca;Şub;Mar;Nis;May;Haz;Tem;Ağu;Eyl;Eki;Kas;Ara"),
                dddd: te("Pazar;Pazartesi;Salı;Çarşamba;Perşembe;Cuma;Cumartesi"),
                ddd: te("Paz;Pzt;Sal;Çar;Per;Cum;Cmt"),
                bool: te("DOĞRU;YANLIŞ"),
            },
            3,
            -1
        ),
        "tr"
    ),
    me(
        {
            group: ",",
            ampm: te("yb;yh"),
            mmmm: te(
                "Ionawr;Chwefror;Mawrth;Ebrill;Mai;Mehefin;Gorffennaf;Awst;Medi;Hydref;Tachwedd;Rhagfyr"
            ),
            mmm: te("Ion;Chwef;Maw;Ebr;Mai;Meh;Gorff;Awst;Medi;Hyd;Tach;Rhag"),
            dddd: te(
                "Dydd Sul;Dydd Llun;Dydd Mawrth;Dydd Mercher;Dydd Iau;Dydd Gwener;Dydd Sadwrn"
            ),
            ddd: te("Sul;Llun;Maw;Mer;Iau;Gwen;Sad"),
        },
        "cy"
    ),
    me(
        {
            group: ".",
            decimal: ",",
            mmmm: te(
                "yanvar;fevral;mart;aprel;may;iyun;iyul;avqust;sentyabr;oktyabr;noyabr;dekabr"
            ),
            mmm: te("yan;fev;mar;apr;may;iyn;iyl;avq;sen;okt;noy;dek"),
            dddd: te(
                "bazar;bazar ertəsi;çərşənbə axşamı;çərşənbə;cümə axşamı;cümə;şənbə"
            ),
            ddd: te("B.;B.e.;Ç.a.;Ç.;C.a.;C.;Ş."),
        },
        "az"
    ),
    me(
        ne(
            {
                decimal: ",",
                mmmm: te(
                    "студзеня;лютага;сакавіка;красавіка;мая;чэрвеня;ліпеня;жніўня;верасня;кастрычніка;лістапада;снежня"
                ),
                dddd: te("нядзеля;панядзелак;аўторак;серада;чацвер;пятніца;субота"),
                ddd: te("нд;пн;аў;ср;чц;пт;сб"),
            },
            3,
            -1
        ),
        "be"
    ),
    me(
        {
            decimal: ",",
            ampm: te("пр.об.;сл.об."),
            mmmm: te(
                "януари;февруари;март;април;май;юни;юли;август;септември;октомври;ноември;декември"
            ),
            mmm: te("яну;фев;март;апр;май;юни;юли;авг;сеп;окт;ное;дек"),
            dddd: te("неделя;понеделник;вторник;сряда;четвъртък;петък;събота"),
            ddd: te("нд;пн;вт;ср;чт;пт;сб"),
            bool: te("ИСТИНА;ЛОЖЬ"),
        },
        "bg"
    ),
    me(
        {
            group: ".",
            decimal: ",",
            mmmm: te(
                "de gener;de febrer;de març;d’abril;de maig;de juny;de juliol;d’agost;de setembre;d’octubre;de novembre;de desembre"
            ),
            mmm: te(
                "de gen.;de febr.;de març;d’abr.;de maig;de juny;de jul.;d’ag.;de set.;d’oct.;de nov.;de des."
            ),
            dddd: te("diumenge;dilluns;dimarts;dimecres;dijous;divendres;dissabte"),
            ddd: te("dg.;dl.;dt.;dc.;dj.;dv.;ds."),
            ampm: te("a. m.;p. m."),
        },
        "ca"
    ),
    me(
        ne(
            {
                group: ",",
                decimal: ".",
                mmmm: te(
                    "Enero;Pebrero;Marso;Abril;Mayo;Hunyo;Hulyo;Agosto;Setyembre;Oktubre;Nobyembre;Disyembre"
                ),
                dddd: te("Linggo;Lunes;Martes;Miyerkules;Huwebes;Biyernes;Sabado"),
            },
            3,
            3
        ),
        "fil"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "જાન્યુઆરી;ફેબ્રુઆરી;માર્ચ;એપ્રિલ;મે;જૂન;જુલાઈ;ઑગસ્ટ;સપ્ટેમ્બર;ઑક્ટોબર;નવેમ્બર;ડિસેમ્બર"
            ),
            mmm: te(
                "જાન્યુ;ફેબ્રુ;માર્ચ;એપ્રિલ;મે;જૂન;જુલાઈ;ઑગસ્ટ;સપ્ટે;ઑક્ટો;નવે;ડિસે"
            ),
            dddd: te("રવિ~;સોમ~;મંગળ~;બુધ~;ગુરુ~;શુક્ર~;શનિ~", "વાર"),
            ddd: te("રવિ;સોમ;મંગળ;બુધ;ગુરુ;શુક્ર;શનિ"),
        },
        "gu"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            ampm: te("לפנה״צ;אחה״צ"),
            dddd: te("~ראשון;~שני;~שלישי;~רביעי;~חמישי;~שישי;~שבת", "יום "),
            ddd: te("~א׳;~ב׳;~ג׳;~ד׳;~ה׳;~ו׳;שבת", "יום "),
            mmmm: te(
                "ינואר;פברואר;מרץ;אפריל;מאי;יוני;יולי;אוגוסט;ספטמבר;אוקטובר;נובמבר;דצמבר"
            ),
            mmm: te("ינו׳;פבר׳;מרץ;אפר׳;מאי;יוני;יולי;אוג׳;ספט׳;אוק׳;נוב׳;דצמ׳"),
            mmmm6: te(
                "רמדאן;שוואל;ד׳ו אל־קעדה;ד׳ו אל־חיג׳ה;מוחרם;רביע אל־אוול;רביע א־ת׳אני;ג׳ומאדא אל־אולא;ג׳ומאדא א־ת׳אניה;רג׳ב;שעבאן;רמדאן"
            ),
            mmm6: te(
                "רמדאן;שוואל;ד׳ו אל־קעדה;ד׳ו אל־חיג׳ה;מוחרם;רביע א׳;רביע ב׳;ג׳ומאדא א׳;ג׳ומאדא ב׳;רג׳ב;שעבאן;רמדאן"
            ),
        },
        "he"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                mmmm: te(
                    "siječnja;veljače;ožujka;travnja;svibnja;lipnja;srpnja;kolovoza;rujna;listopada;studenoga;prosinca"
                ),
                mmm: te("sij;velj;ožu;tra;svi;lip;srp;kol;ruj;lis;stu;pro"),
                dddd: te("nedjelja;ponedjeljak;utorak;srijeda;četvrtak;petak;subota"),
            },
            -1,
            3
        ),
        "hr"
    ),
    me(
        {
            decimal: ",",
            mmmm: te(
                "հունվարի;փետրվարի;մարտի;ապրիլի;մայիսի;հունիսի;հուլիսի;օգոստոսի;սեպտեմբերի;հոկտեմբերի;նոյեմբերի;դեկտեմբերի"
            ),
            mmm: te("հնվ;փտվ;մրտ;ապր;մյս;հնս;հլս;օգս;սեպ;հոկ;նոյ;դեկ"),
            dddd: te("կիրակի;երկուշաբթի;երեքշաբթի;չորեքշաբթի;հինգշաբթի;ուրբաթ;շաբաթ"),
            ddd: te("կիր;երկ;երք;չրք;հնգ;ուր;շբթ"),
        },
        "hy"
    ),
    me(
        ne(
            {
                decimal: ",",
                mmmm: te(
                    "იანვარი;თებერვალი;მარტი;აპრილი;მაისი;ივნისი;ივლისი;აგვისტო;სექტემბერი;ოქტომბერი;ნოემბერი;დეკემბერი"
                ),
                dddd: te(
                    "კვირა;ორშაბათი;სამშაბათი;ოთხშაბათი;ხუთშაბათი;პარასკევი;შაბათი"
                ),
            },
            3,
            3
        ),
        "ka"
    ),
    me(
        ne(
            {
                decimal: ",",
                mmmm: te(
                    "қаңтар;ақпан;наурыз;сәуір;мамыр;маусым;шілде;тамыз;қыркүйек;қазан;қараша;желтоқсан"
                ),
                dddd: te("жексенбі;дүйсенбі;сейсенбі;сәрсенбі;бейсенбі;жұма;сенбі"),
                ddd: te("жс;дс;сс;ср;бс;жм;сб"),
            },
            13,
            -1
        ),
        "kk"
    ),
    me(
        {
            group: ",",
            mmmm: te(
                "ಜನವರಿ;ಫೆಬ್ರವರಿ;ಮಾರ್ಚ್;ಏಪ್ರಿಲ್;ಮೇ;ಜೂನ್;ಜುಲೈ;ಆಗಸ್ಟ್;ಸೆಪ್ಟೆಂಬರ್;ಅಕ್ಟೋಬರ್;ನವೆಂಬರ್;ಡಿಸೆಂಬರ್"
            ),
            mmm: te(
                "ಜನವರಿ;ಫೆಬ್ರವರಿ;ಮಾರ್ಚ್;ಏಪ್ರಿ;ಮೇ;ಜೂನ್;ಜುಲೈ;ಆಗಸ್ಟ್;ಸೆಪ್ಟೆಂ;ಅಕ್ಟೋ;ನವೆಂ;ಡಿಸೆಂ"
            ),
            dddd: te("ಭಾನು~;ಸೋಮ~;ಮಂಗಳ~;ಬುಧ~;ಗುರು~;ಶುಕ್ರ~;ಶನಿ~", "ವಾರ"),
            ddd: te("ಭಾನು;ಸೋಮ;ಮಂಗಳ;ಬುಧ;ಗುರು;ಶುಕ್ರ;ಶನಿ"),
            ampm: te("ಪೂರ್ವಾಹ್ನ;ಅಪರಾಹ್ನ"),
        },
        "kn"
    ),
    me(
        {
            decimal: ",",
            mmmm: te(
                "sausio;vasario;kovo;balandžio;gegužės;birželio;liepos;rugpjūčio;rugsėjo;spalio;lapkričio;gruodžio"
            ),
            mmm: te(
                "saus.;vas.;kov.;bal.;geg.;birž.;liep.;rugp.;rugs.;spal.;lapkr.;gruod."
            ),
            dddd: te(
                "sekmadienis;pirmadienis;antradienis;trečiadienis;ketvirtadienis;penktadienis;šeštadienis"
            ),
            ddd: te("sk;pr;an;tr;kt;pn;št"),
            ampm: te("priešpiet;popiet"),
        },
        "lt"
    ),
    me(
        {
            decimal: ",",
            mmmm: te(
                "janvāris;februāris;marts;aprīlis;maijs;jūnijs;jūlijs;augusts;septembris;oktobris;novembris;decembris"
            ),
            mmm: te(
                "janv.;febr.;marts;apr.;maijs;jūn.;jūl.;aug.;sept.;okt.;nov.;dec."
            ),
            dddd: te(
                "svētdiena;pirmdiena;otrdiena;trešdiena;ceturtdiena;piektdiena;sestdiena"
            ),
            ddd: te("svētd.;pirmd.;otrd.;trešd.;ceturtd.;piektd.;sestd."),
            ampm: te("priekšpusdienā;pēcpusdienā"),
        },
        "lv"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "ജനുവരി;ഫെബ്രുവരി;മാർച്ച്;ഏപ്രിൽ;മേയ്;ജൂൺ;ജൂലൈ;ഓഗസ്റ്റ്;സെപ്റ്റംബർ;ഒക്‌ടോബർ;നവംബർ;ഡിസംബർ"
            ),
            mmm: te("ജനു;ഫെബ്രു;മാർ;ഏപ്രി;മേയ്;ജൂൺ;ജൂലൈ;ഓഗ;സെപ്റ്റം;ഒക്ടോ;നവം;ഡിസം"),
            dddd: te(
                "ഞായറാഴ്‌ച;തിങ്കളാഴ്‌ച;ചൊവ്വാഴ്ച;ബുധനാഴ്‌ച;വ്യാഴാഴ്‌ച;വെള്ളിയാഴ്‌ച;ശനിയാഴ്‌ച"
            ),
            ddd: te("ഞായർ;തിങ്കൾ;ചൊവ്വ;ബുധൻ;വ്യാഴം;വെള്ളി;ശനി"),
        },
        "ml"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "нэгдүгээ~;хоёрдугаа~;гуравдугаа~;дөрөвдүгээ~;тавдугаа~;зургаадугаа~;долоодугаа~;наймдугаа~;есдүгээ~;аравдугаа~;арван нэгдүгээ~;арван хоёрдугаа~",
                "р сар"
            ),
            mmm: te("1~;2~;3~;4~;5~;6~;7~;8~;9~;10~;11~;12~", "-р сар"),
            dddd: te("ням;даваа;мягмар;лхагва;пүрэв;баасан;бямба"),
            ddd: te("Ня;Да;Мя;Лх;Пү;Ба;Бя"),
            ampm: te("ү.ө.;ү.х."),
        },
        "mn"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "जानेवारी;फेब्रुवारी;मार्च;एप्रिल;मे;जून;जुलै;ऑगस्ट;सप्टेंबर;ऑक्टोबर;नोव्हेंबर;डिसेंबर"
            ),
            mmm: te(
                "जाने;फेब्रु;मार्च;एप्रि;मे;जून;जुलै;ऑग;सप्टें;ऑक्टो;नोव्हें;डिसें"
            ),
            dddd: te("रविवार;सोमवार;मंगळवार;बुधवार;गुरुवार;शुक्रवार;शनिवार"),
            ddd: te("रवि;सोम;मंगळ;बुध;गुरु;शुक्र;शनि"),
        },
        "mr"
    ),
    me(
        ne(
            {
                group: ",",
                decimal: ".",
                mmmm: te(
                    "ဇန်နဝါရီ;ဖေဖော်ဝါရီ;မတ်;ဧပြီ;မေ;ဇွန်;ဇူလိုင်;ဩဂုတ်;စက်တင်ဘာ;အောက်တိုဘာ;နိုဝင်ဘာ;ဒီဇင်ဘာ"
                ),
                mmm: te("ဇန်;ဖေ;မတ်;ဧ;မေ;ဇွန်;ဇူ;ဩ;စက်;အောက်;နို;ဒီ"),
                dddd: te("တနင်္ဂနွေ;တနင်္လာ;အင်္ဂါ;ဗုဒ္ဓဟူး;ကြာသပတေး;သောကြာ;စနေ"),
                ampm: te("နံနက်;ညနေ"),
            },
            -1,
            0
        ),
        "my"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "ਜਨਵਰੀ;ਫ਼ਰਵਰੀ;ਮਾਰਚ;ਅਪ੍ਰੈਲ;ਮਈ;ਜੂਨ;ਜੁਲਾਈ;ਅਗਸਤ;ਸਤੰਬਰ;ਅਕਤੂਬਰ;ਨਵੰਬਰ;ਦਸੰਬਰ"
            ),
            mmm: te("ਜਨ;ਫ਼ਰ;ਮਾਰਚ;ਅਪ੍ਰੈ;ਮਈ;ਜੂਨ;ਜੁਲਾ;ਅਗ;ਸਤੰ;ਅਕਤੂ;ਨਵੰ;ਦਸੰ"),
            dddd: te("ਐਤਵਾਰ;ਸੋਮਵਾਰ;ਮੰਗਲਵਾਰ;ਬੁੱਧਵਾਰ;ਵੀਰਵਾਰ;ਸ਼ੁੱਕਰਵਾਰ;ਸ਼ਨਿੱਚਰਵਾਰ"),
            ddd: te("ਐਤ;ਸੋਮ;ਮੰਗਲ;ਬੁੱਧ;ਵੀਰ;ਸ਼ੁੱਕਰ;ਸ਼ਨਿੱਚਰ"),
            ampm: te("ਪੂ.ਦੁ.;ਬਾ.ਦੁ."),
        },
        "pa"
    ),
    me(
        {
            group: ".",
            decimal: ",",
            mmmm: te(
                "ianuarie;februarie;martie;aprilie;mai;iunie;iulie;august;septem~;octom~;noiem~;decem~",
                "brie"
            ),
            mmm: te("ian.;feb.;mar.;apr.;mai;iun.;iul.;aug.;sept.;oct.;nov.;dec."),
            dddd: te("duminică;luni;marți;miercuri;joi;vineri;sâmbătă"),
            ddd: te("dum.;lun.;mar.;mie.;joi;vin.;sâm."),
            ampm: te("a.m.;p.m."),
        },
        "ro"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                mmmm: te(
                    "januar;februar;marec;april;maj;junij;julij;avgust;september;oktober;november;december"
                ),
                mmm: te("jan.;feb.;mar.;apr.;maj;jun.;jul.;avg.;sep.;okt.;nov.;dec."),
                dddd: te("nedelja;ponedeljek;torek;sreda;četrtek;petek;sobota"),
                ampm: te("dop.;pop."),
            },
            -1,
            13
        ),
        "sl"
    ),
    me(
        ne(
            {
                group: ".",
                decimal: ",",
                mmmm: te(
                    "јануар;фебруар;март;април;мај;јун;јул;август;септембар;октобар;новембар;децембар"
                ),
                dddd: te("недеља;понедељак;уторак;среда;четвртак;петак;субота"),
            },
            3,
            3
        ),
        "sr"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "ஜனவரி;பிப்ரவரி;மார்ச்;ஏப்ரல்;மே;ஜூன்;ஜூலை;ஆகஸ்ட்;செப்டம்பர்;அக்டோபர்;நவம்பர்;டிசம்பர்"
            ),
            mmm: te("ஜன.;பிப்.;மார்.;ஏப்.;மே;ஜூன்;ஜூலை;ஆக.;செப்.;அக்.;நவ.;டிச."),
            dddd: te("ஞாயிறு;திங்கள்;செவ்வாய்;புதன்;வியாழன்;வெள்ளி;சனி"),
            ddd: te("ஞாயி.;திங்.;செவ்.;புத.;வியா.;வெள்.;சனி"),
        },
        "ta"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "జనవరి;ఫిబ్రవరి;మార్చి;ఏప్రిల్;మే;జూన్;జులై;ఆగస్టు;సెప్టెంబర్;అక్టోబర్;నవంబర్;డిసెంబర్"
            ),
            mmm: te("జన;ఫిబ్ర;మార్చి;ఏప్రి;మే;జూన్;జులై;ఆగ;సెప్టెం;అక్టో;నవం;డిసెం"),
            dddd: te("ఆదివారం;సోమవారం;మంగళవారం;బుధవారం;గురువారం;శుక్రవారం;శనివారం"),
            ddd: te("ఆది;సోమ;మంగళ;బుధ;గురు;శుక్ర;శని"),
        },
        "te"
    ),
    me(
        {
            decimal: ",",
            mmmm: te(
                "січня;лютого;березня;квітня;травня;червня;липня;серпня;вересня;жовтня;листопада;грудня"
            ),
            mmm: te(
                "січ.;лют.;бер.;квіт.;трав.;черв.;лип.;серп.;вер.;жовт.;лист.;груд."
            ),
            dddd: te("неділю;понеділок;вівторок;середу;четвер;пʼятницю;суботу"),
            ddd: te("нд;пн;вт;ср;чт;пт;сб"),
            ampm: te("дп;пп"),
        },
        "uk"
    ),
    me(
        {
            group: ".",
            decimal: ",",
            mmmm: te("~1;~2;~3;~4;~5;~6;~7;~8;~9;~10;~11;~12", "tháng "),
            mmm: te("~1;~2;~3;~4;~5;~6;~7;~8;~9;~10;~11;~12", "thg "),
            dddd: te("Chủ Nhật;Thứ Hai;Thứ Ba;Thứ Tư;Thứ Năm;Thứ Sáu;Thứ Bảy"),
            ddd: te("CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7"),
            ampm: te("SA;CH"),
        },
        "vi"
    ),
    me(
        ne(
            {
                group: "٬",
                decimal: "٫",
                ampm: te("ص;م"),
                mmmm: te(
                    "يناير;فبراير;مارس;أبريل;مايو;يونيو;يوليو;أغسطس;سبتمبر;أكتوبر;نوفمبر;ديسمبر"
                ),
                dddd: te("الأحد;الاثنين;الثلاثاء;الأربعاء;الخميس;الجمعة;السبت"),
                mmmm6: te(
                    "رمضان;شوال;ذو القعدة;ذو الحجة;محرم;ربيع الأول;ربيع الآخرة;جمادى الأولى;جمادى الآخرة;رجب;شعبان;رمضان"
                ),
            },
            0,
            0
        ),
        "ar"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "জানুয়ারী;ফেব্রুয়ারী;মার্চ;এপ্রিল;মে;জুন;জুলাই;আগস্ট;সেপ্টেম্বর;অক্টোবর;নভেম্বর;ডিসেম্বর"
            ),
            mmm: te("জানু;ফেব;মার্চ;এপ্রি;মে;জুন;জুল;আগ;সেপ্টেঃ;অক্টোঃ;নভেঃ;ডিসেঃ"),
            dddd: te("রবিবার;সোমবার;মঙ্গলবার;বুধবার;বৃহস্পতিবার;শুক্রবার;শনিবার"),
            ddd: te("রবি;সোম;মঙ্গল;বুধ;বৃহস্পতি;শুক্র;শনি"),
        },
        "bn"
    ),
    me(
        {
            group: ",",
            decimal: ".",
            mmmm: te(
                "जनवरी;फ़रवरी;मार्च;अप्रैल;मई;जून;जुलाई;अगस्त;सितंबर;अक्तूबर;नवंबर;दिसंबर"
            ),
            mmm: te("जन॰;फ़र॰;मार्च;अप्रैल;मई;जून;जुल॰;अग॰;सित॰;अक्तू॰;नव॰;दिस॰"),
            dddd: te("रविवार;सोमवार;मंगलवार;बुधवार;गुरुवार;शुक्रवार;शनिवार"),
            ddd: te("रवि;सोम;मंगल;बुध;गुरु;शुक्र;शनि"),
            ampm: te("am;pm"),
        },
        "hi"
    );
const ve = {
    overflow: "######",
    dateErrorThrows: !1,
    dateErrorNumber: !0,
    dateSpanLarge: !0,
    leap1900: !0,
    nbsp: !1,
    throws: !0,
    invalid: "######",
    locale: "",
    ignoreTimezone: !1,
    grouping: [3, 3],
    indexColors: !0,
    skipChar: "",
    repeatChar: "",
};
function _e(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    if ("number" != typeof e) return e;
    if (e < 0) return -_e(-e, t);
    if (t) {
        const n = 10 ** t || 1;
        return _e(e * n, 0) / n;
    }
    return Math.round(e);
}
const je = 1e-13;
function Me(e) {
    const t = e < 0 ? -1 : 1,
        n =
            10 **
            ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2) ||
                2),
        r =
            10 **
            ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) ||
                2);
    let a,
        i,
        o = Math.abs(e),
        s = 0,
        m = 0,
        d = 0,
        l = 1;
    if ((e = o) % 1 == 0) i = [e * t, 1];
    else if (e < 1e-19) i = [t, 1e19];
    else if (e > 1e19) i = [1e19 * t, 1];
    else {
        do {
            if (
                ((o = 1 / (o - Math.floor(o))),
                    (a = l),
                    (l = l * Math.floor(o) + s),
                    (s = a),
                    (m = d),
                    (d = Math.floor(e * l + 0.5)),
                    d >= n || l >= r)
            )
                return [t * m, s];
        } while (Math.abs(e - d / l) >= je && o !== Math.floor(o));
        i = [t * d, l];
    }
    return i;
}
const ke = Math.floor;
function Fe(e) {
    if (
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) &&
        e >= 0
    ) {
        if (0 === e) return [1900, 1, 0];
        if (60 === e) return [1900, 2, 29];
        if (e < 60) return [1900, e < 32 ? 1 : 2, ((e - 1) % 31) + 1];
    }
    let t = e + 68569 + 2415019;
    const n = ke((4 * t) / 146097);
    t -= ke((146097 * n + 3) / 4);
    const r = ke((4e3 * (t + 1)) / 1461001);
    t = t - ke((1461 * r) / 4) + 31;
    const a = ke((80 * t) / 2447),
        i = t - ke((2447 * a) / 80);
    t = ke(a / 11);
    return [0 | (100 * (n - 49) + r + t), 0 | (a + 2 - 12 * t), 0 | i];
}
function xe(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    const r = ke(e);
    return t === u
        ? (function (e) {
            if (60 === e) throw new Error("#VALUE!");
            if (e <= 1) return [1317, 8, 29];
            if (e < 60) return [1317, e < 32 ? 9 : 10, 1 + ((e - 2) % 30)];
            const t = 10631 / 30,
                n = 0.1335;
            let r = e + 466935;
            const a = ke(r / 10631);
            r -= 10631 * a;
            const i = ke((r - n) / t);
            r -= ke(i * t + n);
            const o = ke((r + 28.5001) / 29.5);
            return 13 === o
                ? [30 * a + i, 12, 30]
                : [30 * a + i, o, r - ke(29.5001 * o - 29)];
        })(r)
        : t === d
            ? (function (e) {
                return Fe(e + 1462);
            })(r)
            : Fe(r, n);
}
const we = Math.floor,
    Ae = 86400;
function Se(e, t) {
    let n = null;
    if (Array.isArray(e)) {
        const [t, r, a, i, o, s] = e;
        n = Date.UTC(
            t,
            null == r ? 0 : r - 1,
            null != a ? a : 1,
            i || 0,
            o || 0,
            s || 0
        );
    } else if (e instanceof Date && ((n = 1 * e), !t || !t.ignoreTimezone)) {
        const t = new Date();
        t.setUTCFullYear(e.getFullYear(), e.getMonth(), e.getDate()),
            t.setUTCHours(
                e.getHours(),
                e.getMinutes(),
                e.getSeconds(),
                e.getMilliseconds()
            ),
            (n = 1 * t);
    }
    if (null != n && isFinite(n)) {
        const e = n / 864e5;
        return e - (e <= -25509 ? -25568 : -25569);
    }
    return null;
}
const ze = {
    j: "d",
    d: "d",
    D: "ddd",
    l: "dddd",
    n: "m",
    m: "m",
    M: "mmm",
    F: "mmmm",
    y: "yy",
    Y: "yyyy",
},
    Ce = {
        j: "dd",
        d: "dd",
        D: "ddd",
        l: "dddd",
        n: "mm",
        m: "mm",
        M: "mmm",
        F: "mmmm",
        y: "yy",
        Y: "yyyy",
    },
    De = {},
    Ee = {};
function Ie(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    if (e) {
        const r = e[0],
            a = e.slice(1);
        "!" === r
            ? Ie(a, t, 4)
            : "?" === r
                ? Ie(a, t, 2)
                : ((t[r] = t[r] || {}), Ie(a, t[r], n));
    } else t.$ = n;
}
function Oe(e, t) {
    Ie(e, t),
        Ie(e + " x", t),
        Ie(e + " l", t),
        Ie(e + " l x", t),
        Ie("l " + e, t),
        Ie("l " + e + " x", t),
        Ie(e + " D", t),
        Ie(e + " D x", t),
        Ie("D " + e, t),
        Ie("D " + e + " x", t);
}
[
    "!d-m-y",
    "!d-m-Y",
    "!j-m-y",
    "!j-m-Y",
    "!d-n-y",
    "!d-n-Y",
    "!j-n-y",
    "!j-n-Y",
    "?m-d-y",
    "?m-d-Y",
    "?m-j-y",
    "?m-j-Y",
    "?n-d-y",
    "?n-d-Y",
    "?n-j-y",
    "?n-j-Y",
    "d-M-y",
    "d-M-Y",
    "j-M-y",
    "j-M-Y",
    "M-d-y",
    "M-d-Y",
    "M-j-y",
    "M-j-Y",
    "d-F-y",
    "d-F-Y",
    "F-d-y",
    "F-d-Y",
    "F-j-y",
    "F-j-Y",
    "j-F-y",
    "j-F-Y",
    "y-F-d",
    "y-F-j",
    "y-M-d",
    "y-M-j",
    "Y-F-d",
    "Y-F-j",
    "Y-M-d",
    "Y-m-d",
    "Y-M-j",
    "Y-m-j",
    "Y-n-d",
    "Y-n-j",
    "j-F",
    "j-M",
    "d-F",
    "d-M",
    "n-d",
    "n-j",
    "n-Y",
    "m-d",
    "m-j",
    "m-Y",
    "M-Y",
    "M-y",
    "F-y",
    "F-Y",
    "Y-M",
    "Y-n",
    "Y-m",
    "Y-F",
    "Y-M",
].forEach((e) => {
    "?" !== e[0] && Oe(e, De), "!" !== e[0] && Oe(e, Ee);
});
const Te = new Date().getUTCFullYear(),
    Ne = " ",
    Ye = " ",
    Pe = " ",
    Re = "'",
    Le = "٬",
    Ue = {
        ".": [",", Ye, Pe, Re, Le],
        ",": [".", Ye, Pe, Re, Le],
        "٫": [".", Ye, Pe, Re, Le],
    },
    He = (e) => e && 1 === e.length && e >= "0" && e <= "9";
function Be(e) {
    const t =
        oe(
            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                .locale || ""
        ) || de,
        n = t.decimal,
        r = [...(Ue[n] || [Re, Le])];
    r.includes(t.group) || t.group === Ne || t.group === n || r.push(t.group);
    let a = "",
        i = "",
        o = 1,
        s = "",
        m = !1,
        d = !1,
        l = !1,
        u = !1,
        c = !1,
        p = null,
        f = !1,
        h = 0;
    const g = [Ne, Ye, Pe, "+", "%", "(", "-"].concat($);
    for (; g.includes(e[h]);) {
        const t = e[h];
        if ("-" === t) {
            if (m || d) return null;
            (m = !0), (o = -1);
        } else if (W.test(t)) {
            if (c) return null;
            (c = !0), (p = t);
        } else if ("(" === t) {
            if (d || m) return null;
            (d = !0), (o = -1);
        } else if ("%" === t) {
            if (u) return null;
            u = !0;
        }
        h++;
    }
    let b,
        y = !1;
    if (e[h] === n || He(e[h]))
        for (; h < e.length;) {
            const t = e[h];
            if (!b && r.includes(t)) b = t;
            else if (b && b === t);
            else if (t === n) {
                if (y) break;
                (a += "."), (y = !0);
            } else {
                if (!He(t)) break;
                a += t;
            }
            h++;
        }
    if ("e" === e[h] || "E" === e[h]) {
        (i += e[h]), h++, ("+" !== e[h] && "-" !== e[h]) || ((i += e[h]), h++);
        const t = h;
        for (; He(e[h]);) (i += e[h]), h++;
        if (t === h) return null;
    }
    const v = [Ne, Ye, Pe, "%", "$", ")"].concat($);
    for (; v.includes(e[h]);) {
        const t = e[h];
        if (W.test(t)) {
            if (c) return null;
            (c = !0), (p = t), (f = !0);
        } else if (")" === t) {
            if (l || !d) return null;
            l = !0;
        } else if ("%" === t) {
            if (u) return null;
            u = !0;
        }
        h++;
    }
    if (h !== e.length) return null;
    let _ = parseFloat(a + i);
    if (!isFinite(_)) return null;
    if (i) {
        if (u || c) return null;
        s = "0.00E+00";
    } else if (u) {
        if (c) return null;
        (s = a.includes(".") ? "0.00%" : "0%"), (_ *= 0.01);
    } else if (c) {
        const e = a.includes(".") ? "#,##0.00" : "#,##0";
        s = f ? e + p : p + e;
    } else b && (s = a.includes(".") ? "#,##0.00" : "#,##0");
    const j = { v: _ * o };
    return s && (j.z = s), j;
}
function Ge(e, t, n) {
    if (n < 1) return !1;
    if (t < 1 || t > 12) return !1;
    if (2 === t) {
        if (
            n > ((e % 4 == 0 && e % 100 != 0) || e % 400 == 0 || 1900 === e ? 29 : 28)
        )
            return !1;
    } else if (
        ((4 === t || 6 === t || 9 === t || 11 === t) && n > 30) ||
        ((1 === t ||
            3 === t ||
            5 === t ||
            7 === t ||
            8 === t ||
            10 === t ||
            12 === t) &&
            n > 31)
    )
        return !1;
    return !0;
}
const Je = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    for (const r of t)
        if (e.startsWith(r[0])) {
            let t = r[0].length;
            return (
                !n || ("D" !== r[2] && "M" !== r[2]) || "." !== e[t] || t++,
                [e.slice(0, t), r]
            );
        }
    return ["", null];
},
    Ve = (e, t, n, r) => {
        const a = n.path || "",
            i = Object.keys(t);
        for (let o = 0; o < i.length; o++) {
            let s;
            const m = i[o];
            if (t[m]) {
                if ("$" === m || "€" === m) e || (s = n);
                else if ("-" === m) {
                    const i = /^(\s*([./-]|,\s)\s*|\s+)/.exec(e);
                    if (i) {
                        const o = "-" === i[1] || "/" === i[1] || "." === i[1] ? i[1] : " ";
                        if (!n.sep || n.sep === o) {
                            const d = i[0].replace(/\s+/g, " ");
                            s = Ve(
                                e.slice(i[0].length),
                                t[m],
                                X(X({}, n), {}, { sep: o, path: a + d }),
                                r
                            );
                        }
                    }
                } else if (" " === m) {
                    const i = /^[,.]?\s+/.exec(e);
                    if (i) {
                        const o = i[0].replace(/\s+/g, " ");
                        s = Ve(
                            e.slice(i[0].length),
                            t[m],
                            X(X({}, n), {}, { path: a + o }),
                            r
                        );
                    }
                } else if ("j" === m || "d" === m) {
                    const i = /^(0?[1-9]|1\d|2\d|3[01])\b/.exec(e);
                    i &&
                        (s = Ve(
                            e.slice(i[0].length),
                            t[m],
                            X(X({}, n), {}, { day: i[0], path: a + m }),
                            r
                        ));
                } else if ("n" === m || "m" === m) {
                    const i = /^(0?[1-9]|1[012])\b/.exec(e);
                    i &&
                        (s = Ve(
                            e.slice(i[0].length),
                            t[m],
                            X(X({}, n), {}, { month: +i[0], _mon: i[0], path: a + m }),
                            r
                        ));
                } else if ("F" === m || "M" === m) {
                    const [i, o] = Je(e, r.mon, r.mp);
                    o &&
                        o[2] === m &&
                        (s = Ve(
                            e.slice(i.length),
                            t[m],
                            X(X({}, n), {}, { month: o[1], _mon: i, path: a + m }),
                            r
                        ));
                } else if ("l" === m || "D" === m) {
                    const [i, o] = Je(e, r.day, r.dp);
                    o &&
                        o[2] === m &&
                        (s = Ve(
                            e.slice(i.length),
                            t[m],
                            X(X({}, n), {}, { path: a + m }),
                            r
                        ));
                } else if ("y" === m) {
                    const i = /^\d\d\b/.exec(e);
                    if (i) {
                        const o = +i[0] >= 30 ? +i[0] + 1900 : +i[0] + 2e3;
                        s = Ve(
                            e.slice(i[0].length),
                            t[m],
                            X(X({}, n), {}, { year: o, path: a + m }),
                            r
                        );
                    }
                } else if ("Y" === m) {
                    const i = /^\d\d\d\d\b/.exec(e);
                    i &&
                        (s = Ve(
                            e.slice(i[0].length),
                            t[m],
                            X(X({}, n), {}, { year: +i[0], path: a + m }),
                            r
                        ));
                } else {
                    if ("x" !== m) throw new Error('Unknown date token "'.concat(m, '"'));
                    {
                        const i = Xe(e, { locale: r.locale });
                        i &&
                            (s = Ve(
                                "",
                                t[m],
                                X(X({}, n), {}, { time: i.v, tf: i.z, path: a + m }),
                                r
                            ));
                    }
                }
                if (s && Ge(n.year || 1916, n.month || 1, n.day ? +n.day : 1)) return s;
            }
        }
    },
    $e = (e) =>
        e
            .replace(/\s+/g, " ")
            .trim()
            .replace(/’/, "'")
            .replace(/\.$/, "")
            .toLowerCase(),
    We = (e, t) => {
        const n = e.map((e, n) => [$e(e), n + 1, t]);
        return n.sort((e, t) => t[0].length - e[0].length), n;
    };
function Ze(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n = oe(t.locale || "") || de,
        r = {
            mon: We(n.mmmm, "F").concat(We(n.mmm, "M")),
            mp: "." === n.mmm[0].at(-1),
            day: We(n.dddd, "l").concat(We(n.ddd, "D")),
            dp: "." === n.ddd[0].at(-1),
            locale: t.locale,
        },
        a = Ve($e(e), n.preferMDY ? Ee : De, { path: "" }, r);
    if (a) {
        var i;
        if ("." === a.sep && 3 === a.path.length) return null;
        const e = +(null !== (i = a.year) && void 0 !== i ? i : Te);
        a.day || (a.day = 1);
        let t = -1 / 0;
        if (e < 1900) return null;
        e <= 1900 && a.month <= 2 ? (t = 25568) : e < 1e4 && (t = 25569);
        const n = Date.UTC(e, a.month - 1, a.day) / 864e5 + t + (a.time || 0);
        if (n >= 0 && n <= 2958465) {
            const e =
                "0" === a._mon[0] ||
                "0" === a.day[0] ||
                (2 === a._mon.length && 2 === a.day.length);
            return {
                v: n,
                z: a.path.replace(/[jdlDnmMFyYx]/g, (t) =>
                    "x" === t ? a.tf || "" : (e ? Ce[t] : ze[t]) || t
                ),
            };
        }
    }
    return null;
}
const Ke = (e) => e.replace(/\s+/g, "").trim().replace(/\./g, "").toLowerCase();
function Xe(e) {
    const t =
        oe(
            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                .locale || ""
        ) || de,
        n =
            /^\s*([10]?\d|2[0-4])(?::([0-5]\d|\d))?(?::([0-5]\d|\d))?(\.\d{1,10})?(?=\s*[^\s\d]|$)/.exec(
                e
            );
    let r = "";
    if (n) {
        const a = Ke(e.slice(n[0].length));
        if (a === Ke(t.ampm[0]) || "a" === a || "am" === a) r = "a";
        else if (a === Ke(t.ampm[1]) || "p" === a || "pm" === a) r = "p";
        else if (a) return null;
    }
    if (n) {
        const [, e, t, a, i] = n;
        if (i && !a) return null;
        if (!r && !t && !a) return null;
        let o = 1 * +(e || 0);
        if (r) {
            if (o >= 13) return null;
            "p" === r && (o += 12);
        }
        return {
            v:
                (60 * o * 60 + 60 * (1 * +(t || 0)) + 1 * +(a || 0) + 1 * +(i || 0)) /
                86400,
            z:
                (2 === e.length ? "hh" : "h") +
                ":mm" +
                (a ? ":ss" : "") +
                (r ? " AM/PM" : ""),
        };
    }
    return null;
}
function qe(e) {
    const t =
        oe(
            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                .locale || ""
        ) || de,
        n = e.trim().toLowerCase(),
        r = t.bool[0].toLowerCase();
    if ("true" === n || n === r) return { v: !0 };
    const a = t.bool[1].toLowerCase();
    return "false" === n || n === a ? { v: !1 } : null;
}
function Qe(e, t, n) {
    return (
        (t[n + "_max"] = e.length), (t[n + "_min"] = e.replace(/#/g, "").length), t
    );
}
function et(e, t) {
    "string" == typeof e ? t.push({ type: "string", value: e }) : t.push(e);
}
function tt(e, t) {
    const n = e && e.type;
    return n === p || n === f || n === h || (n === A && "den" === t);
}
function nt(d) {
    const p = [],
        h = {
            scale: 1,
            percent: !1,
            text: !1,
            date: 0,
            date_eval: !1,
            date_system: l,
            sec_decimals: 0,
            general: !1,
            clock: 24,
            int_pattern: [],
            frac_pattern: [],
            man_pattern: [],
            den_pattern: [],
            num_pattern: [],
            tokens: p,
        };
    let Y = "int",
        V = null;
    const $ = [];
    let W,
        Z = !1,
        K = -1,
        X = !1,
        q = "",
        Q = !1;
    for (; ++K < d.length && !X;) {
        var ee;
        const ae = d[K],
            oe = ae.type || z;
        if (((q += ae.raw), oe === c)) (h.general = !0), et(ae, p);
        else if (tt(ae, Y)) {
            var te;
            const e = h[Y + "_pattern"];
            tt(W, Y) || (null === (te = W) || void 0 === te ? void 0 : te.type) === b
                ? (e.push((e.pop() || "") + ae.value), (V.num += ae.value))
                : (e.push(ae.value), (V = { type: Y, num: ae.value }), et(V, p));
        } else if (oe === G) "(" === ae.value && (h.parens = !0), et(ae.value, p);
        else if (oe === A) et(ae.value, p);
        else if (oe === g)
            if (((Q = !0), h[Y + "_pattern"].length)) {
                if (!V) throw new SyntaxError("Format pattern is missing a numerator");
                (h.fractions = !0),
                    h.num_pattern.push(h[Y + "_pattern"].pop()),
                    (V.type = "num"),
                    (Y = "den"),
                    et({ type: "div" }, p);
            } else et(ae.value, p);
        else if (oe === v) et(",", p);
        else if (oe === y) h.scale = 0.001 ** ae.raw.length;
        else if (oe === b) {
            if (("int" === Y && (h.grouping = !0), "den" === Y))
                throw new SyntaxError("Cannot group denominator digits");
        } else if (oe === x) et(ae, p);
        else {
            if (oe === _) {
                X = !0;
                break;
            }
            if (oe === j) (h.text = !0), et(ae, p);
            else if (oe === M || oe === k) et(ae, p);
            else if (oe === D) {
                const e = ae.value.toLowerCase(),
                    t = e[0],
                    n = { type: "", size: 0, date: 1, pad: e.length };
                "h" === t
                    ? ((n.size = r), (n.type = "hour-elap"))
                    : "m" === t
                        ? ((n.size = a), (n.type = "min-elap"))
                        : ((n.size = i), (n.type = "sec-elap")),
                    (h.date = h.date | n.size),
                    $.push(n),
                    et(n, p);
            } else if (
                h.date &&
                oe === F &&
                (null === (ee = d[K + 1]) || void 0 === ee ? void 0 : ee.type) === f
            ) {
                var ne, re;
                let e = 1;
                K++;
                let t = "0";
                (null === (ne = d[K + 1]) || void 0 === ne ? void 0 : ne.type) === f &&
                    ((t += "0"), (e = 2), K++),
                    (null === (re = d[K + 1]) || void 0 === re ? void 0 : re.type) ===
                    f && ((t += "0"), (e = 3), K++),
                    (q += t);
                const n = [i, o, s, m][e];
                (h.date = h.date | n),
                    (h.date_eval = !0),
                    (h.sec_decimals = Math.max(h.sec_decimals, e)),
                    et({ type: "subsec", size: n, decimals: e, date: 1 }, p);
            } else if (oe === S)
                Z ||
                    ("B2" === ae.value || "b2" === ae.value
                        ? (h.date_system = u)
                        : (h.date_system = l));
            else if (oe === C) {
                const o = { type: "", size: 0, date: 1 },
                    s = ae.value.toLowerCase(),
                    m = s[0];
                if ("y" === s || "yy" === s) (o.size = e), (o.type = "year-short");
                else if ("y" === m || "e" === m) (o.size = e), (o.type = "year");
                else if ("b" === s || "bb" === s)
                    (o.size = e), (o.type = "b-year-short");
                else if ("b" === m) (o.size = e), (o.type = "b-year");
                else if ("d" === s || "dd" === s)
                    (o.size = n), (o.type = "day"), (o.pad = /dd/.test(s));
                else if ("ddd" === s || "aaa" === s)
                    (o.size = n), (o.type = "weekday-short");
                else if ("d" === m || "a" === m) (o.size = n), (o.type = "weekday");
                else if ("h" === m)
                    (o.size = r), (o.type = "hour"), (o.pad = /hh/i.test(s));
                else if ("m" === m) {
                    3 === s.length
                        ? ((o.size = t), (o.type = "monthname-short"))
                        : 5 === s.length
                            ? ((o.size = t), (o.type = "monthname-single"))
                            : s.length >= 4 && ((o.size = t), (o.type = "monthname"));
                    const e = $[$.length - 1];
                    !o.type &&
                        e &&
                        !e.used &&
                        e.size & (r | i) &&
                        ((e.used = !0),
                            (o.size = a),
                            (o.type = "min"),
                            (o.pad = /mm/.test(s))),
                        o.type ||
                        ((o.size = t),
                            (o.type = "month"),
                            (o.pad = /mm/.test(s)),
                            (o.indeterminate = !0));
                } else if ("s" === m) {
                    (o.size = i), (o.type = "sec"), (o.pad = /ss/.test(s));
                    const e = $[$.length - 1];
                    e && e.size & a
                        ? (o.used = !0)
                        : e &&
                        e.indeterminate &&
                        (delete e.indeterminate,
                            (e.size = a),
                            (e.type = "min"),
                            (o.used = !0));
                }
                (h.date = h.date | o.size), (h.date_eval = !0), $.push(o), et(o, p);
            } else if (oe === P)
                (h.clock = 12),
                    (h.date = h.date | r),
                    (h.date_eval = !0),
                    (ae.short = "A/P" === ae.value),
                    et(ae, p);
            else if (oe === L || oe === R || oe === J) et(ae.value, p);
            else if (oe === E) h.condition = [ae.value[0], parseFloat(ae.value[1])];
            else if (oe === T) {
                const e = ae.value.split("-"),
                    t = e.length < 2 ? "" : e.slice(1).join("-"),
                    n = e[0];
                n && et(n, p);
                const r = ie(t);
                r && (h.locale = r);
                const a = parseInt(t, 16);
                if (isFinite(a) && 16711680 & a) {
                    6 === ((a >> 16) & 255) && (h.date_system = u);
                }
                Z = !0;
            } else if (oe === N) {
                let e,
                    t = ae.value.toLowerCase();
                (e = /^color\s*(\d+)$/i.exec(t)) && (t = parseInt(e[1], 10)),
                    (h.color = t);
            } else if (oe === w) (h.scale = 100), (h.percent = !0), et("%", p);
            else if (oe === F)
                et(ae, p), h.date || ((h.dec_fractions = !0), (Y = "frac"));
            else if (oe === H)
                (h.exponential = !0),
                    (h.exp_plus = ae.value.includes("+")),
                    (Y = "man"),
                    et({ type: "exp", plus: h.exp_plus }, p);
            else if (oe === U) et(ae, p);
            else if (oe === B) et(ae, p);
            else if (oe !== I && oe !== O)
                throw oe === z
                    ? new SyntaxError("Illegal character: ".concat(q))
                    : new SyntaxError("Unknown token ".concat(oe, " in ").concat(q));
        }
        W = ae;
    }
    if (
        ((h.tokensUsed = K),
            (h.pattern = q),
            /^((?:\[[^\]]+\])+)(;|$)/.test(h.pattern) &&
            !/^\[(?:h+|m+|s+)\]/.test(h.pattern) &&
            et({ type: "text" }, p),
            (h.fractions && h.dec_fractions) ||
            (h.grouping && !h.int_pattern.length) ||
            (h.fractions && h.exponential) ||
            (h.fractions && h.den_pattern.length * h.num_pattern.length == 0) ||
            (Q && !h.fractions && !h.date) ||
            (h.exponential &&
                (h.int_pattern.length || h.frac_pattern.length) *
                h.man_pattern.length ==
                0))
    )
        throw new SyntaxError("Invalid pattern: ".concat(q));
    const ae = h.int_pattern.join(""),
        oe = h.man_pattern.join(""),
        se = h.frac_pattern.join("");
    Qe(ae, h, "int");
    let me = 0;
    for (let e = 0; e < ae.length; e++) {
        const t = ae[ae.length - 1 - e];
        /^[0-9?]/.test(t) && (me = e + 1);
    }
    (h.int_min = me), Qe(se, h, "frac"), Qe(oe, h, "man");
    let de = h.num_pattern.join(""),
        le = h.den_pattern[0] || "";
    if (
        (le.includes("?") || de.includes("?")
            ? ((le = le.replace(/\d/g, "?")),
                (le = le.replace(/#$/g, "?")),
                Qe(de, h, "num"),
                Qe(le, h, "den"),
                (de = de.replace(/#$/g, "?")))
            : (Qe(de, h, "num"), Qe(le, h, "den")),
            (h.int_p = ae),
            (h.man_p = oe),
            (h.num_p = de),
            (h.den_p = le),
            h.den_pattern.length &&
            (h.denominator = parseInt(h.den_pattern.join("").replace(/\D/g, ""), 10)),
            (h.integer = !!ae.length),
            !h.integer && !h.exponential && se.length)
    ) {
        const e = h.tokens.findIndex((e) => "point" === e.type);
        h.tokens.splice(e, 0, { type: "int", value: "#" }),
            (h.integer = !0),
            (h.int_pattern = ["#"]),
            (h.int_p = "#");
    }
    if (h.fractions)
        for (let e = 0; e < p.length - 1; e++) {
            const t = p[e];
            if ("string" !== t.type && "space" !== t.type) continue;
            const n = p[e + 1].type;
            "num" === n
                ? (t.rule = "num+int")
                : "div" === n
                    ? (t.rule = "num")
                    : "den" === n && (t.rule = "den");
        }
    return h.grouping && h.int_pattern.length > 1 && (h.grouping = !1), h;
}
const rt = { total: 1, sign: 0, period: 0, int: 1, frac: 0 };
const at = (e, t) => e.replace(/\./, t.decimal),
    it = (e, t, n) => {
        const r = Math.abs(t);
        let a;
        return (
            (a = 1 === e ? e : _e(e, 5)),
            [
                at(a + "", n),
                n.exponent,
                t < 0 ? n.negative : n.positive,
                r < 10 ? "0" : "",
                r,
            ]
        );
    };
function ot(e, t, n, r) {
    const a = 0 | n;
    if ("string" == typeof n) e.push(n);
    else if (n === a) e.push(Math.abs(a));
    else {
        const t = Math.abs(n);
        let a = t ? Math.floor(Math.log10(t)) : 0,
            i = t * 10 ** -a;
        10 === i && ((i = 1), a++);
        const o = (function (e) {
            let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const n = Math.abs(e);
            if (!n) return rt;
            const r = t && e < 0 ? 1 : 0,
                a = Math.floor(n),
                i = Math.floor(Math.log10(n) + 1);
            let o = 0,
                s = 0;
            if (a !== n) {
                o = 1;
                const e = String(_e(n * 10 ** -i, 15));
                let t = e.length,
                    r = !0,
                    a = 0;
                for (; a <= e.length;) {
                    if ("." === e[a]) {
                        t--;
                        break;
                    }
                    "0" === e[a] && r ? t-- : (r = !1), a++;
                }
                (s = t - i), s < 0 && ((s = 0), (o = 0));
            }
            return {
                total: r + Math.max(i, 1) + o + s,
                digits: Math.max(i, 0) + s,
                sign: r,
                period: o,
                int: Math.max(i, 1),
                frac: s,
            };
        })(t);
        if (a >= -4 && a <= -1) {
            const n = t.toPrecision(10 + a).replace(/\.?0+$/, "");
            e.push(at(n, r));
        } else if (10 === a) {
            const n = t.toFixed(10).slice(0, 12).replace(/\.$/, "");
            e.push(at(n, r));
        } else if (Math.abs(a) <= 9)
            if (o.total <= 11) {
                const n = _e(t, 9).toFixed(o.frac);
                e.push(at(n, r));
            } else
                9 === a
                    ? e.push(Math.floor(t))
                    : a >= 0 && a < 9
                        ? e.push(at(String(_e(t, 9 - a)), r))
                        : e.push(...it(i, a, r));
        else
            o.total >= 12
                ? e.push(...it(i, a, r))
                : e.push(at(_e(t, 9).toFixed(o.frac), r));
    }
    return e;
}
function st(e) {
    return "0" === e
        ? "0"
        : "?" === e
            ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                ? " "
                : " "
            : "";
}
const mt = 86400,
    dt = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const n = Math.floor(Math.log10(e));
        return t > 1 ? Math.floor(n / t) * t : n;
    },
    lt = (e, t, n) => (n ? e < -694324 || t >= 35830291 : e < 0 || t >= 2958466);
function ut(e, t, n, r) {
    var a, i;
    let d = "",
        l = "",
        c = "",
        p = "",
        f = "",
        h = "",
        g = 0,
        b = 0 | e,
        y = 0,
        v = 0,
        _ = 1,
        j = 0,
        M = 0,
        k = 0,
        F = 0,
        x = 0,
        w = 0;
    const A = r || de;
    if (
        (!t.text &&
            isFinite(t.scale) &&
            1 !== t.scale &&
            (e = (function (e) {
                if (0 === e) return e;
                const t = Math.ceil(Math.log10(e < 0 ? -e : e)),
                    n = 10 ** (16 - Math.floor(t));
                return isFinite(n) ? Math.round(e * n) / n : 0;
            })(e * t.scale)),
            t.exponential)
    ) {
        let n = Math.abs(e);
        if (n) {
            const e = 10 ** -dt(n, t.int_max),
                r = _e(n * e, t.frac_max) / e;
            g = dt(r, t.int_max);
        }
        e && !t.integer && g++,
            (n *= 10 ** -g),
            (e = e < 0 ? -n : n),
            (d += Math.abs(g));
    }
    if (t.integer) {
        const n = Math.abs(_e(e, t.fractions ? 1 : t.frac_max));
        h += n < 1 ? "" : Math.floor(n);
    }
    const S = null !== (a = n.grouping[0]) && void 0 !== a ? a : 3,
        z = null !== (i = n.grouping[1]) && void 0 !== i ? i : S;
    t.dec_fractions && (f = String(_e(e, t.frac_max)).split(".")[1] || "");
    const C = !t.error && (t.num_p.includes("0") || t.den_p.includes("0"));
    let D = C;
    if (t.fractions) {
        D = C || !!(e % 1);
        const n = Math.abs(t.integer ? e % 1 : e);
        if (n)
            if (((D = !0), t.denominator && isFinite(t.denominator)))
                (p += t.denominator),
                    (c += _e(n * t.denominator)),
                    "0" === c && ((c = ""), (p = ""), (D = C));
            else {
                const e = Me(n, 1 / 0, t.den_max);
                (c += e[0]),
                    (p += e[1]),
                    t.integer && "0" === c && ((c = ""), (p = ""), (D = C));
            }
        else e || t.integer || ((D = !0), (c = "0"), (p = "1"));
        !t.integer || D || Math.trunc(e) || (h = "0");
    }
    if (t.date) {
        b = Math.trunc(e);
        const r = mt * (e - b);
        if (
            ((y = Math.floor(r)),
                (w = r - y),
                Math.abs(w) < 1e-6
                    ? (w = 0)
                    : w > 0.9999 && ((w = 0), (y += 1), y === mt && ((y = 0), (b += 1))),
                w)
        ) {
            const e = t.date & m || t.date & s || t.date & o;
            ((e === m && w > 0.9995) ||
                (e === s && w > 0.995) ||
                (e === o && w > 0.95) ||
                (!e && w >= 0.5)) &&
                (y++, (w = 0));
        }
        if (b || t.date_system) {
            const r = xe(e, t.date_system, n.leap1900);
            (v = r[0]), (_ = r[1]), (j = r[2]);
        }
        if (y) {
            const e = y < 0 ? mt + y : y;
            (x = Math.floor(e) % 60),
                (F = Math.floor(e / 60) % 60),
                (k = Math.floor(e / 60 / 60) % 60);
        }
        if (
            ((M = (6 + b) % 7), t.date_eval && lt(e, b + y / mt, n.dateSpanLarge))
        ) {
            if (n.dateErrorThrows) throw new Error("Date out of bounds");
            if (n.dateErrorNumber) {
                return ot(e < 0 ? [A.negative] : [], 0, e, A).join("");
            }
            return n.overflow;
        }
    }
    const E = st("?", n.nbsp);
    g < 0 ? (l = "-") : t.exp_plus && (l = "+");
    const I = [],
        O = (e, t, r, a) => {
            const i =
                !a && e.length > t.length ? r.length + e.length - t.length : r.length;
            e.length < t.length && (a += e.length - t.length);
            for (let t = 0; t < i; t++) I.push(e[t + a] || st(r[t], n.nbsp));
            return i;
        };
    let T = !1;
    const N = { int: 0, frac: 0, man: 0, num: 0, den: 0 };
    for (let a = 0, i = t.tokens.length; a < i; a++) {
        const i = t.tokens[a],
            o = i.type,
            s = i.num ? i.num.length : 0;
        if ("string" === o)
            i.rule
                ? "num" === i.rule
                    ? D
                        ? I.push(i.value.replace(/ /g, E))
                        : (t.num_min > 0 || t.den_min > 0) &&
                        I.push(i.value.replace(/./g, E))
                    : "num+int" === i.rule
                        ? D && h
                            ? I.push(i.value.replace(/ /g, E))
                            : t.den_min > 0 &&
                            (h || t.num_min) &&
                            I.push(i.value.replace(/./g, E))
                        : "den" === i.rule &&
                        (D
                            ? I.push(i.value.replace(/ /g, E))
                            : (t.den_min > 0 || t.den_min > 0) &&
                            I.push(i.value.replace(/./g, E)))
                : I.push(i.value.replace(/ /g, E));
        else if ("space" === o)
            "num+int" === i.rule
                ? (D || t.num_min || t.den_min) && (h || t.num_min) && I.push(E)
                : I.push(E);
        else if ("error" === o) I.push(n.invalid);
        else if ("point" === o) I.push(t.date ? i.value : A.decimal);
        else if ("general" === o) ot(I, 0, e, A);
        else if ("exp" === o) I.push(A.exponent);
        else if ("minus" === o)
            (i.volatile && t.date) ||
                (i.volatile && (e >= 0 || "number" != typeof e)) ||
                (i.volatile && !t.fractions && (t.integer || t.dec_fractions)
                    ? ((e < 0 && h && "0" !== h) || f) && I.push(A.negative)
                    : I.push(A.negative));
        else if ("plus" === o) I.push(A.positive);
        else if ("text" === o) I.push(e);
        else if ("fill" === o) n.fillChar && I.push(n.fillChar, i.value);
        else if ("skip" === o)
            n.skipChar ? I.push(n.skipChar, i.value) : I.push(n.nbsp ? " " : " ");
        else if ("div" === o)
            D
                ? I.push("/")
                : t.num_min > 0 || t.den_min > 0
                    ? I.push(E)
                    : I.push(st("#", n.nbsp));
        else if ("int" === o)
            if (1 === t.int_pattern.length) {
                const e = t.int_p;
                let r = "";
                for (let a = Math.max(t.int_min, h.length); a > 0; a--) {
                    const i = h.charAt(h.length - a),
                        o = i ? "" : e.charAt(e.length - a) || e[0];
                    let s = "";
                    if (t.grouping) {
                        const e = a - 1 - S;
                        e >= 0 &&
                            !(e % z) &&
                            (s = i || "0" === o ? A.group : st("?", n.nbsp));
                    }
                    r += (i || st(o, n.nbsp)) + s;
                }
                I.push(r);
            } else N.int += O(h, t.int_p, i.num, N.int);
        else if ("frac" === o) {
            const e = N.frac;
            for (let t = 0; t < s; t++) I.push(f[t + e] || st(i.num[t], n.nbsp));
            N.frac += s;
        } else if ("man" === o)
            N[o] || N.man || I.push(l), (N.man += O(d, t.man_p, i.num, N.man));
        else if ("num" === o) N.num += O(c, t.num_p, i.num, N.num);
        else if ("den" === o) {
            const e = N.den;
            for (let t = 0; t < s; t++) {
                let r = p[t + e];
                if (!r) {
                    const e = i.num[t];
                    "123456789".includes(e) || (T && "0" === e)
                        ? ((T = !0), (r = n.nbsp ? " " : " "))
                        : (r = T || t !== s - 1 || "0" !== e || p ? st(e, n.nbsp) : "1");
                }
                I.push(r);
            }
            N.den += s;
        } else if ("year" === o)
            v < 0 && I.push(A.negative), I.push(String(Math.abs(v)).padStart(4, "0"));
        else if ("year-short" === o) {
            const e = v % 100;
            I.push(e < 10 ? "0" : "", e);
        } else if ("month" === o) I.push(i.pad && _ < 10 ? "0" : "", _);
        else if ("monthname-single" === o)
            t.date_system === u
                ? I.push(A.mmmm6[_ - 1].charAt(0))
                : I.push(A.mmmm[_ - 1].charAt(0));
        else if ("monthname-short" === o)
            t.date_system === u ? I.push(A.mmm6[_ - 1]) : I.push(A.mmm[_ - 1]);
        else if ("monthname" === o)
            t.date_system === u ? I.push(A.mmmm6[_ - 1]) : I.push(A.mmmm[_ - 1]);
        else if ("weekday-short" === i.type) I.push(A.ddd[M]);
        else if ("weekday" === o) I.push(A.dddd[M]);
        else if ("day" === o) I.push(i.pad && j < 10 ? "0" : "", j);
        else if ("hour" === o) {
            const e = k % t.clock || (t.clock < 24 ? t.clock : 0);
            I.push(i.pad && e < 10 ? "0" : "", e);
        } else if ("min" === o) I.push(i.pad && F < 10 ? "0" : "", F);
        else if ("sec" === o) I.push(i.pad && x < 10 ? "0" : "", x);
        else if ("subsec" === o) {
            I.push(A.decimal);
            const e = w.toFixed(t.sec_decimals);
            I.push(e.slice(2, 2 + i.decimals));
        } else if ("ampm" === o) {
            const e = k < 12 ? 0 : 1;
            i.short && !r ? I.push("AP"[e]) : I.push(A.ampm[e]);
        } else if ("hour-elap" === o) {
            e < 0 && I.push(A.negative);
            const t = 24 * b + Math.floor(Math.abs(y) / 3600);
            I.push(String(Math.abs(t)).padStart(i.pad, "0"));
        } else if ("min-elap" === o) {
            e < 0 && I.push(A.negative);
            const t = 1440 * b + Math.floor(Math.abs(y) / 60);
            I.push(String(Math.abs(t)).padStart(i.pad, "0"));
        } else if ("sec-elap" === o) {
            e < 0 && I.push(A.negative);
            const t = b * mt + Math.abs(y);
            I.push(String(Math.abs(t)).padStart(i.pad, "0"));
        } else if ("b-year" === o) I.push(v + 543);
        else if ("b-year-short" === o) {
            const e = (v + 543) % 100;
            I.push(e < 10 ? "0" : "", e);
        }
    }
    return I.join("");
}
const ct = nt([{ type: j, value: "@", raw: "@" }]);
function pt(e, t) {
    for (let n = 0; n < 3; n++) {
        const r = t[n];
        if (r) {
            let t;
            if (r.condition) {
                const n = r.condition[0],
                    a = r.condition[1];
                "=" === n
                    ? (t = e === a)
                    : ">" === n
                        ? (t = e > a)
                        : "<" === n
                            ? (t = e < a)
                            : ">=" === n
                                ? (t = e >= a)
                                : "<=" === n
                                    ? (t = e <= a)
                                    : "<>" === n && (t = e !== a);
            } else t = !0;
            if (t) return r;
        }
    }
}
function ft(e) {
    return !!(
        (e[0] && e[0].percent) ||
        (e[1] && e[1].percent) ||
        (e[2] && e[2].percent) ||
        (e[3] && e[3].percent)
    );
}
function ht(e) {
    return !!(
        (e[0] && e[0].date) ||
        (e[1] && e[1].date) ||
        (e[2] && e[2].date) ||
        (e[3] && e[3].date)
    );
}
function gt(e) {
    const [t, n, r, a] = e;
    return !(
        (t && !t.generated) ||
        (n && !n.generated) ||
        (r && !r.generated) ||
        !a ||
        !a.text ||
        a.generated
    );
}
const bt = {
    text: 15,
    datetime: 10.8,
    date: 10.8,
    time: 10.8,
    percent: 10.6,
    currency: 10.4,
    grouped: 10.2,
    scientific: 6,
    number: 4,
    fraction: 2,
    general: 0,
    error: 0,
},
    yt = [
        ["DMY", 1],
        ["DM", 2],
        ["MY", 3],
        ["MDY", 4],
        ["MD", 5],
        ["hmsa", 6],
        ["hma", 7],
        ["hms", 8],
        ["hm", 9],
    ];
const vt = [
    [c, /^General/i, 0],
    [p, /^#/, 0],
    [f, /^0/, 0],
    [h, /^\?/, 0],
    [g, /^\//, 0],
    [_, /^;/, 0],
    [j, /^@/, 0],
    [M, /^\+/, 0],
    [k, /^-/, 0],
    [F, /^\./, 0],
    [x, /^ /, 0],
    [w, /^%/, 0],
    [A, /^[1-9]/, 0],
    [S, /^(?:B[12])/i, 0],
    [z, /^B$/, 0],
    [C, /^(?:[hH]+|[mM]+|[sS]+|[yY]+|[bB]+|[dD]+|[gG]+|[aA]{3,}|e+)/, 0],
    [D, /^(?:\[(h+|m+|s+)\])/i, 1],
    [E, /^\[(<[=>]?|>=?|=)\s*(-?[.\d]+)\]/, [1, 2]],
    [I, /^\[(DBNum[0-4]?\d)\]/i, 1],
    [O, /^\[(NatNum[0-4]?\d)\]/i, 1],
    [T, /^\[\$([^\]]+)\]/, 1],
    [
        N,
        /^\[(black|blue|cyan|green|magenta|red|white|yellow|color\s*\d+)\]/i,
        1,
    ],
    [Y, /^\[([^\]]+)\]/, 1],
    [P, /^(?:AM\/PM|am\/pm|A\/P)/, 0],
    [R, /^\\(.)/, 1],
    [L, /^"([^"]*?)"/, 1],
    [U, /^_(\\.|.)/, 1],
    [H, /^[Ee]([+-])/, 1],
    [B, /^\*(\\.|.)/, 1],
    [G, /^[()]/, 0],
    [z, /^[EÈÉÊËèéêëĒēĔĕĖėĘęĚěȄȅȆȇȨȩNnÑñŃńŅņŇňǸǹ["*/\\_]/, 0],
    [J, /^./, 0],
],
    _t = (e) => {
        const t = (e || "\0").charCodeAt(0);
        return 63 === t || 35 === t || (t >= 48 && t <= 57);
    };
function jt(e) {
    let t = 0;
    const n = [],
        r = [];
    for (; t < e.length;) {
        const a = e.slice(t);
        let i = 0;
        const o = /^(,+)(.)?/.exec(a);
        if (o) {
            const a = o[1];
            i = a.length;
            const s = e[t - 1] || "";
            let m = !1,
                d = !1;
            _t(s) ? ((m = !0), (d = !0)) : "." === s && (d = !0);
            const l = o[2] || "";
            if ((!m || (l && ";" !== l) || (m = !1), d && _t(l) && (d = !1), m && !d))
                n.push({ type: b, value: ",", raw: a });
            else if (!m && d) n.push({ type: y, value: ",", raw: a });
            else if (m && d) {
                const e = { type: y, value: ",", raw: a };
                n.push(e), r.push(e);
            } else n.push({ type: v, value: ",", raw: a });
        } else {
            let e;
            for (const [t, r, o] of vt) {
                const s = r.exec(a);
                if (s) {
                    (e = {
                        type: t,
                        value: Array.isArray(o) ? o.map((e) => s[e]) : s[o || 0],
                        raw: s[0],
                    }),
                        n.push(e),
                        (i = s[0].length);
                    break;
                }
            }
            r.length && ";" === e.raw && (r.length = 0),
                r.length &&
                _t(e.raw) &&
                (r.forEach((e) => (e.type = b)), (r.length = 0));
        }
        if (!i) {
            const e = a[0];
            (i = 1), n.push({ type: J, value: e, raw: e });
        }
        t += i;
    }
    return n;
}
const Mt = (e) => {
    const t = e.condition;
    (t && t[1] < 0 && ("<" === t[0] || "<=" === t[0] || "=" === t[0])) ||
        e.tokens.unshift({ type: "minus", volatile: !0 });
},
    kt = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const n = {};
        for (const t in e) Array.isArray(e[t]) ? (n[t] = [...e[t]]) : (n[t] = e[t]);
        return t && n.tokens.unshift(t), (n.generated = !0), n;
    };
const Ft = Object.create({});
function xt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    e || (e = "General");
    let n = Ft[e];
    if (!n)
        try {
            (n = (function (e) {
                const t = [];
                let n,
                    r = !1,
                    a = null,
                    i = 0,
                    o = !1,
                    s = 0,
                    m = 0,
                    d = jt(e);
                do {
                    var l;
                    if (
                        ((o = nt(d)),
                            (o.date || o.general) &&
                            (o.int_pattern.length ||
                                o.frac_pattern.length ||
                                1 !== o.scale ||
                                o.text))
                    )
                        throw new Error("Illegal format");
                    if ((o.condition && (m++, (r = !0)), o.text)) {
                        if (a) throw new Error("Unexpected partition");
                        a = o;
                    }
                    o.locale && (n = ie(o.locale)),
                        t.push(o),
                        (i =
                            "break" ===
                                (null === (l = d[o.tokensUsed]) || void 0 === l ? void 0 : l.type)
                                ? 1
                                : 0),
                        (d = d.slice(o.tokensUsed + i)),
                        s++;
                } while (i && s < 4 && m < 3);
                if (i) throw new Error("Unexpected partition");
                if (m > 2) throw new Error("Unexpected condition");
                const u = t[3];
                if (u && (u.int_pattern.length || u.frac_pattern.length || u.date))
                    throw new Error("Unexpected partition");
                if (r) {
                    const e = t.length;
                    if (
                        (1 === e && ((t[1] = nt(jt("General"))), (t[1].generated = !0)),
                            e < 3)
                    ) {
                        const e = t[0],
                            n = t[1];
                        if ((Mt(e), n.condition)) Mt(n);
                        else {
                            const t = e.condition;
                            ("=" === t[0] ||
                                (t[1] >= 0 && (">" === t[0] || ">=" === t[0]))) &&
                                n.tokens.unshift({ type: "minus", volatile: !0 });
                        }
                    } else t.forEach(Mt);
                } else {
                    if (t.length < 4 && a)
                        for (let e = 0, n = t.length; e < n; e++)
                            t[e] === a && t.splice(e, 1);
                    if (
                        (t.length < 1 &&
                            a &&
                            ((t[0] = nt(jt("General"))), (t[0].generated = !0)),
                            t.length < 2)
                    ) {
                        const e = { type: "minus", volatile: !0 };
                        t.push(kt(t[0], e));
                    }
                    if ((t.length < 3 && t.push(kt(t[0])), t.length < 4))
                        if (a) t.push(a);
                        else {
                            const e = nt(jt("@"));
                            (e.generated = !0), t.push(e);
                        }
                    (t[0].condition = [">", 0]),
                        (t[1].condition = ["<", 0]),
                        (t[2].condition = null);
                }
                return { pattern: e, partitions: t, locale: n };
            })(e)),
                (Ft[e] = n);
        } catch (r) {
            if (t) throw r;
            const a = { tokens: [{ type: "error" }], error: r.message };
            n = {
                pattern: e,
                partitions: [a, a, a, a],
                error: r.message,
                locale: null,
            };
        }
    return n;
}
const wt = Object.freeze({
    AMPM: P,
    BREAK: _,
    CALENDAR: S,
    CHAR: J,
    COLOR: N,
    COMMA: v,
    CONDITION: E,
    DATETIME: C,
    DBNUM: I,
    DIGIT: A,
    DURATION: D,
    ERROR: z,
    ESCAPED: R,
    EXP: H,
    FILL: B,
    GENERAL: c,
    GROUP: b,
    HASH: p,
    LOCALE: T,
    MINUS: k,
    MODIFIER: Y,
    NATNUM: O,
    PAREN: G,
    PERCENT: w,
    PLUS: M,
    POINT: F,
    QMARK: h,
    SCALE: y,
    SKIP: U,
    SLASH: g,
    SPACE: x,
    STRING: L,
    TEXT: j,
    ZERO: f,
});



function format(e, t, n) {
    const a = Object.assign({}, ve, n),
        i = xt(e, a.throws);
    return (
        function (e, t, n) {
            const r = t.partitions,
                a = oe(t.locale || n.locale),
                i = r[3] ? r[3] : ct;
            "boolean" == typeof e && (e = (a || de).bool[e ? 0 : 1]);
            if (null == e) return "";
            if ("number" != typeof e) return ut(e, i, n, a);
            if (!isFinite(e)) {
                const t = a || de;
                return isNaN(e) ? t.nan : (e < 0 ? t.negative : "") + t.infinity;
            }
            const o = pt(e, r);
            return o ? ut(e, o, n, a) : n.overflow;
        }
    )(null !== (n = Se(t, a)) && void 0 !== n ? n : t, i, a);
}

function getLocale(e) {
    return oe(e);
}

function addLocale(e, t) {
    return me(e, t);
}

function dateFromSerial(e, t) {
    let n = 0 | e;
    const r = Ae * (e - n);
    let a = we(r);
    r - a > 0.9999 && ((a += 1), a === Ae && ((a = 0), (n += 1)));
    const i = a < 0 ? Ae + a : a,
        [o, s, m] = xe(e, 0, t && t.leap1900);
    return [o, s, m, we(i / 60 / 60) % 60, we(i / 60) % 60, we(i) % 60];
}

function dateToSerial(e, t) {
    return Se(e, t);
}

function dec2frac(e, t, n) {
    return Me(e, t, n);
}

function formatColor(e, t, n) {
    var r;
    const a = Object.assign({}, ve, n),
        i = xt(e, a.throws);
    return (function (e, t, n) {
        const r = t.partitions;
        let a = r[3],
            i = null;
        return (
            "number" == typeof e && isFinite(e) && (a = pt(e, r)),
            a && a.color && (i = a.color),
            i && "number" == typeof i && n.indexColors && (i = V[i - 1] || "#000"),
            i
        );
    })(null !== (r = Se(t, a)) && void 0 !== r ? r : t, i, a);
}

function getFormatDateInfo(o) {
    const s = xt(o, !1);
    return (
        s.dateInfo ||
        (s.dateInfo = (function (o) {
            const [s] = o;
            return {
                year: !!(s.date & e),
                month: !!(s.date & t),
                day: !!(s.date & n),
                hours: !!(s.date & r),
                minutes: !!(s.date & a),
                seconds: !!(s.date & i),
                clockType: 12 === s.clock ? 12 : 24,
            };
        })(s.partitions)),
        s.dateInfo
    );
}

function getFormatInfo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n = xt(e, !1);
    return (
        n.info ||
        (n.info = (function (e) {
            var t;
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
            const [r, a] = e,
                i = r.frac_max,
                o = {
                    type: "general",
                    isDate: ht(e),
                    isText: gt(e),
                    isPercent: ft(e),
                    maxDecimals: r.general ? 9 : i,
                    scale: null !== (t = r.scale) && void 0 !== t ? t : 1,
                    color: 0,
                    parentheses: 0,
                    grouped: r.grouping ? 1 : 0,
                },
                s =
                    !o.isDate &&
                    !o.isText &&
                    !r.error &&
                    r.tokens.some(
                        (e) =>
                            "string" === e.type && (n ? e.value === n : W.test(e.value))
                    );
            let m = "G",
                d = i >= 0 ? Math.min(15, i) : "",
                l = "",
                u = "";
            if (
                (a && a.color && ((u = "-"), (o.color = 1)),
                    r.parens && ((l = "()"), (o.parentheses = 1)),
                    s)
            )
                (m = "C"), (o.type = "currency");
            else if (r.error) (o.type = "error"), (o.maxDecimals = 0);
            else if (o.isDate) {
                let e = 0,
                    t = 0,
                    n = "";
                r.tokens.forEach((r) => {
                    const a = r.type;
                    /^(b-)?year/.test(a)
                        ? ((n += "Y"), t++)
                        : a.startsWith("month")
                            ? ((n += "M"), t++)
                            : /^(week)?day/.test(a)
                                ? ((n += "D"), t++)
                                : ("hour" !== a &&
                                    "min" !== a &&
                                    "sec" !== a &&
                                    "ampm" !== a) ||
                                ((n += a[0]), e++);
                }),
                    (o.type = "date"),
                    t && e ? (o.type = "datetime") : !t && e && (o.type = "time");
                const a = yt.find((e) => n.startsWith(e[0]));
                (m = a ? "D" : "G"), (d = a ? a[1] : "");
            } else
                o.isText
                    ? ((m = "G"), (o.type = "text"), (d = ""), (o.maxDecimals = 0))
                    : r.general
                        ? ((m = "G"), (o.type = "general"), (d = ""))
                        : r.fractions
                            ? ((m = "G"), (o.type = "fraction"), (d = ""))
                            : r.exponential
                                ? ((m = "S"), (o.type = "scientific"))
                                : o.isPercent
                                    ? ((m = "P"), (o.type = "percent"))
                                    : r.grouping
                                        ? ((m = ","), (o.type = "grouped"))
                                        : (r.int_max || i) && ((m = "F"), (o.type = "number"));
            return (
                (o.code = m + d + u + l), (o.level = bt[o.type]), Object.freeze(o)
            );
        })(n.partitions, null == t ? void 0 : t.currency)),
        n.info
    );
}

function isDateFormat(e) {
    return ht(xt(e, !1).partitions);
}

function isPercentFormat(e) {
    return ft(xt(e, !1).partitions);
}

function isTextFormat(e) {
    return gt(xt(e, !1).partitions);
}

function isValidFormat(e) {
    try {
        return xt(e, !0), !0;
    } catch (e) {
        return !1;
    }
}

function parseBool(e, t) {
    return qe(e, t);
}

function parseDate(e, t) {
    return Ze(e, t);
}

function parseLocale(e) {
    return ae(e);
}

function parseNumber(e, t) {
    return Be(e, t);
}

function parseTime(e, t) {
    return Xe(e, t);
}

function parseValue(e, t) {
    var n, r, a;
    return null !==
        (n =
            null !== (r = null !== (a = Be(e, t)) && void 0 !== a ? a : Ze(e, t)) &&
                void 0 !== r
                ? r
                : Xe(e, t)) && void 0 !== n
        ? n
        : qe(e, t);
}

function round(e, t) {
    return _e(e, t);
}

function tokenize(e) {
    return jt(e);
}

const tokenTypes = wt;
