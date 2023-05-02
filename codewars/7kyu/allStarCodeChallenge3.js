/*
Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/

var removeVowels = function (str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i] !== 'a') && (str[i] !== 'e') && (str[i] !== 'i') && (str[i] !== 'o') && (str[i] !== 'u')) output += str[i];
    };
    return output;
}