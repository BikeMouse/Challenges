/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

"use strict";

function flattenAndSort(array) {
  if (array.length === 0){
    return []
  } else if (array.length == 2){
     if ((array[0].length === 0) && (array[1].length === 0)) {
        return [];
     } else if (array[0].length === 0){
       return array[1]
     } else if (array[1].length === 0){
       return array[0]
     } else {
        return array[0].concat(array[1]).sort((a,b)=>a-b);
    }
  }  else {
    let result = array[0];
    for (let i = 1; i < array.length; i++){
      result = result.concat(array[i])
    };
    return result.sort((a,b)=>a-b);
  }
}