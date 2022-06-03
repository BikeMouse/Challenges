/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

*/

var number=function(array){
    if (array == []){
      return [];
    } else {
      for (let i = 0; i < array.length; i++){
        array[i] = `${i+1}: ${array[i]}`
      }
    }
    return array;
}