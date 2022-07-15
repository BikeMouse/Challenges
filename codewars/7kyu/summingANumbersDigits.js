/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

*/

function sumDigits(number) {
    let str = Math.abs(number).toString().split('');
    let digits = str.map((e)=>Number(e));
    console.log(str,digits)
    return digits.reduce((acc,c)=>acc+c,0);
  }