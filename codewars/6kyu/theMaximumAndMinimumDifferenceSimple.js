/*
Description:
Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
Note:
arr1 and arr2 contains only integers(positive, negative or 0);
arr1 and arr2 may have different lengths, they always has at least one element;
All inputs are valid.
*/

function maxAndMin(arr1, arr2) {
    let biggest = -Infinity
    let smallest = Infinity
    for (let i = 0; i < arr1.length; i++) {
        let a
        let b
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] >= arr2[j]) {
                a = arr1[i] - arr2[j]
                b = a
            } else {
                a = arr2[j] - arr1[i]
                b = a
            }
            if (a <= smallest) {
                smallest = a
            }
            if (b >= biggest) {
                biggest = b
            }
        }
    }
    let result = [biggest, smallest]
    return result
}