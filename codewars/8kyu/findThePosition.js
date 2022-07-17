/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result = ''
    alphabet.findIndex((e,i)=>{
      if (letter == e){
        result += i+1
      }
    });
    return `Position of alphabet: ${result}`
}