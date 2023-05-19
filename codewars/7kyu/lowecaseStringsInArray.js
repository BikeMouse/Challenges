/*
Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

Example
arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']
*/

function arrayLowerCase(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'string') {
            output.push(arr[i].toLowerCase());
        } else {
            output.push(arr[i]);
        };
    };
    return output;
}