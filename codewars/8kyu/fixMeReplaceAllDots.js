/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

const replaceDots = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            result += '-';
        } else {
            result += str[i];
        };
    };
    return result;
}