/*
Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'

*/

function encode(str) {
    str = str.toUpperCase()
    let codes = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            codes.push((str.charCodeAt(i) - 65 + 1).toString())
        } else {
            codes.push(str[i])
        }
    }
    return codes.join('')
}