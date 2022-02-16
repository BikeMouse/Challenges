/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


*/

function hasUniqueChars(str){
    let a = str.split('');
    console.log(a.sort());
    let b = [];
    a.forEach((e,i) => b.push(e.charCodeAt()));
    let check = [];
    for (let i = 0; i < b.length; i++){
      if (b[i] == b[i+1]){
        check.push(true);
      };
    };
    return check.includes(true) ? false : true;
}