/*
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
  let vowels = 'aeiouAEIOU'.split('');
  let a = s.split('');
  let b = [];
  a.forEach((e)=>{
    if (!vowels.includes(e)){
      b.push(e);
    } else {
      b.push('!')
    }
  });
  return b.join('')
}