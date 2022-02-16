/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"

*/

function stringMerge(string1, string2, letter){
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < string1.length; i++){
      if (string1[i] == letter){
        str1 += string1.slice(0,i+1);
        break;
      };
    };
    for (let j = 0; j < string2.length; j++){
      if (string2[j] == letter){
        str2 += string2.slice(j+1);
        break;
      };
    };
    return `${str1}${str2}`
}