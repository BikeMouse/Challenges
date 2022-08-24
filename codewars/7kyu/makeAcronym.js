/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
*/

function toAcronym(inp){
    let a = inp.split(' ');
    let result = '';
    for(let i = 0; i < a.length; i++){
      result += a[i][0].toUpperCase();
    };
    return result;
}