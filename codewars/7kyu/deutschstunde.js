/*

*/

function derDieDas(wort) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
    let count = 0;
    for (let i = 0; i < wort.length; i++) {
        if (vowels.includes(wort[i].toLowerCase())) count++;
    };
    return count < 2 ? `das ${wort}` : count > 3 ? `der ${wort}` : `die ${wort}`
}