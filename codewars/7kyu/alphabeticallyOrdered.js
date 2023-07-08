/*
Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)
*/

function alphabetic(s) {
    let charCode = [];
    for (let i = 0; i < s.length; i++) {
        charCode.push(s.charCodeAt(i))
    }
    for (let i = 0; i < charCode.length - 1; i++) {
        if (charCode[i] > charCode[i + 1]) return false
    }
    return true
}