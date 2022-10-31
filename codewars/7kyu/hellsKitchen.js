/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

function gordon(a) {
    let b = a.toUpperCase().split('');
    let c = [];
    for (let i = 0; i < b.length; i++) {
        if (b[i] === 'A') {
            c.push('@');
        } else if ((b[i] === 'E') || (b[i] === 'I') || (b[i] === 'O') || (b[i] === 'U')) {
            c.push('*')
        } else {
            c.push(b[i]);
        };
    };
    let output = '';
    c.join('').split(' ').forEach((e) => output += `${e}!!!! `);
    return output.slice(0, output.length - 1);
}