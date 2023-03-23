/*
Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN
*/

function max(...arr) {
    let a = arr.flat(Infinity);
    if (a.length == 0) return 0;
    a.sort((b, c) => c - b);
    for (let i = 0; i < a.length; i++) {
        if (isNaN(a[i])) {
            return NaN;
        }
    };
    let output = a[0];
    return Number(output);
};

function min(...arr) {
    let a = arr.flat(Infinity);
    if (a.length == 0) return 0;
    a.sort((b, c) => c - b);
    for (let i = 0; i < a.length; i++) {
        if (isNaN(a[i])) {
            return NaN;
        };
    };
    let output = a[a.length - 1];
    return Number(output);
};