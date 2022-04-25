/*
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive an array of integers as input and return, respectively, the largest and lowest number in that list.
*/

var min = function(list){
    let Minimum = Math.min(...list);
    return Minimum;
  }
  
  var max = function(list){
    let Maximum = Math.max(...list);
    return Maximum;
}