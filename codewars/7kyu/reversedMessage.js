/*
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

function reverseMessage(str) {
    if (str.length == 0) return ''
    let s = str.split(' ').reverse()
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join('')
        if ((s[i][0] >= '0' && s[i][0] <= '9') || (s[i][0] == '!') || (s[i][0] == '#') || (s[i][0] == '>') || (s[i][0] == ',')) {
            s[i] = `${s[i][0]}${s[i].slice(1).toLowerCase()}`
        } else {
            s[i] = `${s[i][0].toUpperCase()}${s[i].slice(1).toLowerCase()}`
        }
    }
    return s.join(' ')
}