/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

function spacify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += str[i] + ' ';
    };
    return output.slice(0, output.length - 1);
}