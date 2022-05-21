/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).


*/

function sumOfDifferences(arr) {
    //array of numbers- positive as well as negative, whole numbers
    // return number
    // (([1, 2, 10]), 9) -> (10 - 2) + (2 - 1) = 8 + 1 = 9
    arr.sort((a, b) => {return (a < b ? 1 : -1)});
    let result = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr == []){
        result = 0;
      } else if (arr[i+1]== undefined){
        return result 
      } else {
        result = result + arr[i]-arr[i+1];
      }
    }
    return result
}