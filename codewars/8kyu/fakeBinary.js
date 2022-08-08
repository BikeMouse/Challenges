/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    let result = [];
    let a = [...x];
    a.forEach((e)=>{
      if (e < '5'){
        result.push('0');
      } else {
        result.push('1');
      }
    });
    return result.join('')
}