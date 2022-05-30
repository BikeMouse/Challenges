/*
A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.

*/

function isNarcissistic(n) {
    // n is a number; whole, positive
    // return whether the number is a Narcisitic Number (true/false)
    // 153 -> 3 digits -> 1*1*1  +  5*5*5  + 3*3*3 - > 153, true
    let power = String(n).length;
    let stringNum = String(n);
    let numArray = stringNum.split('');
    let result = 0;
    for (let i = 0; i < numArray.length; i++){
      result += Math.pow(numArray[i], power);
    }
    if (result == n){
      return true;
    } else {
      return false
    }
}