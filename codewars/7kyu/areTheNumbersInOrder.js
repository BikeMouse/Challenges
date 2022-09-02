/*
Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
You may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
*/

function inAscOrder(arr) {
    let a = [];
    for (let i = 1; i < arr.length; i++){
      if (arr[i] > arr[i-1]){
        a.push(true);
      } else {
        a.push(false);
      };
    };
    return a.includes(false) ? false : true
}