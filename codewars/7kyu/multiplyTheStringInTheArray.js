/*
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

function arrMultiply(arr) {
    let output = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        output = output * Number(arr[i]);
    };
    return output.toString();
}