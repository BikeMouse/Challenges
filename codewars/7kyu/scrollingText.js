/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/

function scrollingText(text) {
    let output = [];
    for (let i = 0; i < text.toUpperCase().length; i++) {
        if (i === 0) {
            output.push(text.toUpperCase().slice(i, text.toUpperCase().length));
        } else {
            output.push(text.toUpperCase().slice(i, text.toUpperCase().length) + text.toUpperCase().slice(i - i, i));
        };
    };
    return output;
}