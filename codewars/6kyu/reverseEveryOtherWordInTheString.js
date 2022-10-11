/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


*/

function reverse(str){
    let a = str.split(' ');
    let output = [];
    for (let i = 0; i < a.length; i++){
      if (i % 2 !== 0){
        output.push(a[i].split('').reverse().join(''));
      } else {
        output.push(a[i]);
      };
    };
    return a[0] == '' ? '' : output.join(' ');
}