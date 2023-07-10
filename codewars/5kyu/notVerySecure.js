/*
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

function alphanumeric(string) {
    if (string.length == 0) return false
    string = string.toLowerCase()
    let output = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'a' && string[i] <= 'z') {
            output.push(true)
        } else if (string[i] >= '0' && string[i] <= '9') {
            output.push(true)
        } else {
            output.push(false)
        }
    }
    return output.includes(false) ? false : true
}