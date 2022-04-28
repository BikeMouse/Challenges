/*
Given an integral number, determine if it's a square number:
*/

var isSquare = function(n){
  // need to check if n is a square number
  if (Number.isInteger(Math.sqrt(n))){
    return true;
  } else {
    return false
  }
}