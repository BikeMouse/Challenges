/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

function getNumberFromString(s) {
    let solution = '';
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= '0') && (s[i] <= '9')) solution += s[i];
    };
    return Number(solution);
}