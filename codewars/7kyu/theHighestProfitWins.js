/*
Task
Write a function that returns both the minimum and maximum number of the given list/array.


*/

function minMax(arr){
    // array of integers, always positive, sometimes only one element
    // return lowest and highest number
    // [1,2,3,4,5] -> [1,5]
    return [Math.min(...arr),Math.max(...arr)]
}