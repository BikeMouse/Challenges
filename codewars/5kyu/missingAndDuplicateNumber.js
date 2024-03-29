/*
You are given an array containing all integers from 1 to N, except one that is missing.

In order to fill the array, one of the elements of the sequence has been duplicated.

Your mission is to find which number is missing and which one is duplicated.

Example:

solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing and 4 appears twice.

Remarks:

You are not allowed to sort the array.
Your solution should not time out for large values of N.
Ideally, your solution should not use extra space except the one provided by the input array (which can be modified).

*/

function solution(array) {
    let missNum;
    let dupNum;
    let clean = [];
    for (let p = 1; p <= array.length; p++){
      clean.push(p)
    };
    let count = {};
    for (let i = 0; i < array.length; i++){
      if (!count[array[i]]){
         count[array[i]] = 1;
       } else {
         dupNum = array[i];
         break;
      }
    };
    let cleanSum = clean.reduce((acc,c)=> acc+c,0);
    let arraySum = array.reduce((acc,c)=> acc+c,0);
    missNum = cleanSum-arraySum+dupNum;
    return [missNum,dupNum];
}