/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel
*/

function shortcut (string) {
    let str = [...string];
    let vowels = ['a','e','i','o','u']
    let result = [];
    str.forEach((e)=>{
      if (!vowels.includes(e)){
        result.push(e);
      }
    });
    return result.join('');
}