/*
The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

While not forbidden try to write both function without using a for loop
*/

Array.range = function (start, count) {
    let output = []
    while (output.length < count) {
        output.push(start)
        start++
    }
    return output;
}

Array.prototype.sum = function () {
    return this.reduce((acc, c) => acc + c, 0);
}