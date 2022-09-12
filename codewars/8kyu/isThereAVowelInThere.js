/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
    let result = [];
    for (let i = 0; i < a.length; i++){
      if (a[i] == 97){
        result.push('a');
      } else if (a[i] == 101){
        result.push('e');
      } else if (a[i] == 105){
        result.push('i');
      } else if (a[i] == 111){
        result.push('o');
      } else if (a[i] == 117){
        result.push('u');
      } else {
        result.push(a[i]);
      };
    };
    return result;
}