/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

function reverseLetter(str) {
    let a = [];
    let b = [];
    for (let i = 0; i < str.length; i++){
      a.push(str.charCodeAt(i))
    };
    a.reverse();
    a.forEach((e)=>{
      if ((e >= 65)&&(e <= 90)){
        b.push(String.fromCharCode(e));
      } else if ((e >= 97)&&(e <= 122)){
        b.push(String.fromCharCode(e));
      };
    });
    return b.join('')
}