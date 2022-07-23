/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"


*/

var isAnagram = function(test, original) {
    let echt =[...original].sort((a,b)=>a.localeCompare(b)).join('').toLowerCase();
    let fake =[...test].sort((c,d)=>c.localeCompare(d)).join('').toLowerCase();
    console.log(echt,fake);
    return echt == fake ? true : false
};