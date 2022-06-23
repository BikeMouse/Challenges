/*
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.


*/

function logicalCalc(array, op){
    let result = array[0];
    for (let i = 1; i < array.length; i++){
      switch(op){
          case 'AND':
          result = result && array[i];
          break;
          case 'OR':
          result = result || array[i];
          break;
          case 'XOR':
          result = result ^ array[i];
          break;
      }
    };
    return result ? true : false;
}