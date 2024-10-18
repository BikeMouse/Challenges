/*
The vowel substrings in the word codewarriors are o,e,a,io.
The longest of these has a length of 2. Given a lowercase string
that has alphabetic characters only (both vowels and consonants)
and no spaces, return the length of the longest vowel substring.
Vowels are any of aeiou.

Good luck!
*/

function solve(s) {
    s = s.toLowerCase();
    let result = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            count++;
        } else {
            if (count >= result) {
                result = count;
                count = 0;
            } else {
                count = 0;
            }
        };
    };
    return result;
};