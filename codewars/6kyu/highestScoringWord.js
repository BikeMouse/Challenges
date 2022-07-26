/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


*/

function high(x){
    // string, lowercase and always valid
    // highest scoring word - string
    // a: 1 b: 2 c: 3 etc
    // 'aaa b' -> 'aaa'
    // turn string into array, so each word is its own element
    let a = [...x.split(' ')];
    let b = Array(a.length).fill(0);
    for (let i = 0; i < a.length; i++){
      for (let j = 0; j < a[i].length; j++){
        b[i] += a[i].charCodeAt(j)-96
      };
    };
    let maxResult = Math.max(...b)
    let indexResult = b.findIndex((e)=> e == maxResult);
    return a[indexResult]
}