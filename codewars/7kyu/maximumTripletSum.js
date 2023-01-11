/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
*/

function maxTriSum(numbers) {
    let sorted = numbers.sort((a, b) => b - a);
    let clean = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i + 1]) {
            clean.push(sorted[i]);
        };
    };
    return clean.slice(0, 3).reduce((acc, c) => acc + c, 0)
}