/*
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
*/

function maxProduct(numbers, size) {
    let sorted = numbers.sort((a, b) => b - a);
    let sized = sorted.slice(0, size);
    return sized.reduce((acc, c) => acc * c, 1);
}