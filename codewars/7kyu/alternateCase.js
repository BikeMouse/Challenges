/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


*/

function alternateCase(s) {
    let alternate = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) alternate += s[i].toLowerCase();
        else alternate += s[i].toUpperCase();
    };
    return alternate;
}