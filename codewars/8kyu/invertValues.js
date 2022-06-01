/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


*/

function invert(array) {
    let result = [];
    array.forEach((e)=>{result.push(e*(-1))})
    return result;
}