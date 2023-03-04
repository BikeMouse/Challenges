/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

*/

function nerdify(txt) {
    let output = '';
    for (let i = 0; i < txt.length; i++) {
        if ((txt[i] === 'A') || (txt[i] === 'a')) {
            output += '4';
        } else if ((txt[i] === 'E') || (txt[i] === 'e')) {
            output += '3';
        } else if (txt[i] === 'l') {
            output += '1';
        } else {
            output += txt[i];
        }
    };
    return output;
}