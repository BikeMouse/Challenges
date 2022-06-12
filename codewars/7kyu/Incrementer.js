/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
*/

function incrementer(nums) { 
    // array of numbers
    // array of numbers, incremented [0+1,1+2,2+3,3+4,4+5]
    // [1,2,3]  ->  [2,4,6]     [1+1, 2+2, 3+3]
    let result = []
    if (nums.length == 0){
      return [];
    } else {
      for (let i = 0; i < nums.length; i++){
        result.push(nums[i]+i+1);
        for (let j = 0; j < result.length; j++){
          if (result[j] >= 20){
            result[j] = result[j]-20;
          } else if(result[j] >= 10){
            result[j] = result[j]-10;
          }
        }
      }
    }
    return result;
}