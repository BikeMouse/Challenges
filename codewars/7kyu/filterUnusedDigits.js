/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

function unusedDigits(...arr) {
    let digits = arr.join('');
    let order = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return order.filter((e => !digits.includes(e))).join('');
}