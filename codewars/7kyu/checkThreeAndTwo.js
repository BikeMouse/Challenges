/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/


function checkThreeAndTwo(array) {
    let clean = {};
    for (let i = 0; i < array.length; i++) {
        if (!clean[array[i]]) {
            clean[array[i]] = 1;
        } else {
            clean[array[i]]++;
        }
    };
    let output = [];
    for (const value of Object.values(clean)) {
        output.push(value);
    };
    if (output.length == 2) {
        return output.includes(2);
    };
    return false;
}