/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


*/

function isPangram(string){
    // string
    // boolean - true if pangram false if not
    // pangram: all letters from a to z appear in string
    // make string lowecase
    // .includes
    let a = string.toLowerCase().split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let b = alphabet.split('');
    let c = [];
    a.forEach((e)=>{
      if (b.includes(e)){
        c.push(e);
      }
    });
    c.sort((a,b)=>a.localeCompare(b));
    for (let i = 0; i < c.length; i++){
      if (c[i] == c[i+1]){
        c.shift()
        i--
      }
    }
    return c.length >= b.length ? true : false
}