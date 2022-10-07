/*
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


*/

var filterString = function(value) {
    const nums = ['1','2','3','4','5','6','7','8','9','0'];
    return Number(value.split('').filter((e) => nums.includes(e)).join(''));
}