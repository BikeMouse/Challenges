/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

*/

function squareOrSquareRoot(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
      // if array element has an integer square root - take it
      if (Number.isInteger(Math.sqrt(array[i]))){
        newArray.push(Math.sqrt(array[i]));
      // if array element has not an integer sqare root - pow 2
      } else {
        newArray.push(Math.pow(array[i],2));
      }
    }
    return newArray;
}