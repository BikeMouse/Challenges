/*
You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]
*/

function popShift(s) {
    let arr = [...s];
    let output = ['', ''];
    while (arr.length > 1) {
        output[0] += arr.pop();
        output[1] += arr.shift();
    };
    if (arr.length == 0) {
        output.push('');
    } else {
        output.push(arr[0]);
    };
    return output;
}