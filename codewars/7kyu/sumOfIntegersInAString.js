/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
    let newS = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            newS += s[i]
        } else {
            newS += '+'
        }
    }
    return newS.split('+').map((e) => Number(e)).filter((e) => e !== '').reduce((acc, c) => acc + c, 0)
}