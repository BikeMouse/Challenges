/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
    //array of numbers, positive, whole
    //number -> sum of the lowest two elements
    // [19,5,42,2,77] -> 7
    //sort array, lowest to highest, summing first two indexes
    let ordered = numbers.sort(function compare(a,b){
      if (a < b){
        return -1;
      }
    })
    return ordered[0]+ordered[1]
}