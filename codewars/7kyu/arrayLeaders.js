/*
Given an array/list [] of integers , Find all the LEADERS in the array.
*/

function arrayLeaders(numbers) {
    let result = [];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] > numbers.slice(i, numbers.length).reduce((acc, c) => acc + c, 0)) result.push(numbers[i - 1]);
    };
    if (numbers[numbers.length - 1] > 0) result.push(numbers[numbers.length - 1])
    return result;
}