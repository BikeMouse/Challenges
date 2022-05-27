/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


*/

function countPositivesSumNegatives(input) {
    // array of integers - positive and negative; 0 is neither + && -
    // array - array[0] = count of positive, array[1] = count of negative; if empty or null -> []
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
    // count positve elements in array (# elements, not value)
    // sum of negative elements in array (value)
    let result = [];
    if ((input == [])||(input == null)){
      return result;
    } else {
      let sumNegative = 0;
      let countOfPositiveElements = 0;
      for (let i = 0; i < input.length; i++){
        if (input[i] > 0){
          countOfPositiveElements++;
        } else if (input[i] < 0){
          sumNegative += input[i];
        }
      }
      if ((sumNegative == 0) && (countOfPositiveElements == 0)){
          return [];
      } else {
      result.unshift(sumNegative);
      result.unshift(countOfPositiveElements);
      }
      return result;
    }
}