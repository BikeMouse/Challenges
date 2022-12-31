/*
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
*/

function doubleEveryOther(a) {
    let output = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            output.push(a[i] * 2);
        } else {
            output.push(a[i]);
        };
    };
    return output;
}