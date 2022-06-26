/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
    // integer
    // return integer- every digit of the input squared
    // 9119 -> 811181
    // turn input into a string, then split into an array, square and join
    let nums = num.toString().split('');
    let result = [];
    nums.forEach((element) =>{
      result.push(Math.pow(element,2));
    });
    return Number(result.join(''));
}