/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/

function adjacentElementsProduct(array) {
    let result = -Infinity;
    for (let i = 0; i < array.length; i++){
      if (array[i]*array[i+1] >= result){
        result = array[i]*array[i+1];
      };
    };
    return result;
}