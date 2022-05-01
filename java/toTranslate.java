// fun toTranslate (text :String) : String {
//     val letters =  HashMap<String, String>()
//     letters["а"] = "a"
//     letters["б"] = "b"
//     letters["в"] = "v"
//     letters["г"] = "g"
//     letters["д"] = "d"
//     letters["е"] = "e"
//     letters["ё"] = "e"
//     letters["ж"] = "zh"
//     letters["з"] = "z"
//     letters["и"] = "i"
//     letters["й"] = "i"
//     letters["к"] = "k"
//     letters["л"] = "l"
//     letters["м"] = "m"
//     letters["н"] = "n"
//     letters["о"] = "o"
//     letters["п"] = "p"
//     letters["р"] = "r"
//     letters["с"] = "s"
//     letters["т"] = "t"
//     letters["у"] = "u"
//     letters["ф"] = "f"
//     letters["х"] = "h"
//     letters["ц"] = "c"
//     letters["ч"] = "ch"
//     letters["ш"] = "sh"
//     letters["щ"] = "sch"
//     letters["ь"] = ""
//     letters["ъ"] = ""
//     letters["ы"] = "y"
//     letters["э"] = "e"
//     letters["ю"] = "yu"
//     letters["я"] = "ya"
//     letters["ө"] = "o"
//     letters["ә"] = "a"
//     letters["і"] = "i"
//     letters["ң"] = "nh"
//     letters["ғ"] = "gh"
//     letters["ү"] = "u"
//     letters["ұ"] = "u"
//     letters["қ"] = "q"
//     letters["һ"] = "h"

//     val sb = StringBuilder(text.length)
//     for (i in 0 until text.length) {
//         val l = text.substring(i, i + 1)
//         if (letters.containsKey(l)) {
//             sb.append(letters[l])
//         } else {
//             sb.append(l)
//         }
//     }
//     return sb.toString()
// }