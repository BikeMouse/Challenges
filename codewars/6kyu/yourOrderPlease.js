/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

function order(words){
    let a = words.split(' ');
    let b = [];
    if (words.length == 0){
      return '';
    } else {
      a.forEach((element)=>{
        b[element.match(/\d/)[0]-1] = element;
      });
    };
    return b.join(' ');
  }