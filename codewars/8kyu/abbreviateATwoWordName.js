/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    let result = [];
    result[0] = name.split('')[0].toUpperCase();
    result[1] = '.';
    for (let i = 0; i < name.split('').length; i++){
      if (name.split('')[i-1] == ' '){
        result.push(name.split('')[i].toUpperCase());
      }
    };
    return result.join('');
}