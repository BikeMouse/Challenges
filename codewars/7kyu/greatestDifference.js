/*
Task: Find the number couple with the greatest difference from a list of number-couples.

Input: A list of number-couples, where each couple is represented as a string containing two positive integers separated by a hyphen ("-").

Output: The number couple with the greatest difference, or False if there is no difference among any of the couples or in case of an empty list.

Additional Information:

All number couples will be given as strings.
All numbers in the couples are positive integers.
If multiple couples have the same greatest difference, return the first one encountered in the input list.
If there is no difference (both numbers in a couple are equal), return False.

*/

function diff(str) {
    let arr = []
    let a
    let b
    for (let i = 0; i < str.length; i++) {
        a = Number(str[i].split('-')[0])
        b = Number(str[i].split('-')[1])
        arr.push(Math.abs(a - b))
    }
    if (Math.max(...arr) == 0) return false
    return str[arr.findIndex((e) => e == Math.max(...arr))]
}