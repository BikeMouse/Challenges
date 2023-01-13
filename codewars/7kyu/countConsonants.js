/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


*/

function consonantCount(str) {
    let consonants = ['a', 'e', 'i', 'o', 'u'];
    let clean = '';
    for (let i = 0; i < str.length; i++) {
        if (((str[i] >= 'a') && (str[i] <= 'z')) || ((str[i] >= 'A') && (str[i] <= 'Z'))) clean += str[i].toLowerCase();
    };
    let count = 0;
    for (let i = 0; i < clean.length; i++) {
        if (!consonants.includes(clean[i])) count++;
    };
    return count;
}