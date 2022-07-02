/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
    let copy = [...numbers];
    let indexOfNum;
    if ((copy.length == 1)||(copy.length == 0)){
      return [];
    } else {
      indexOfNum = copy.indexOf(Math.min(...copy));
      copy.splice(indexOfNum,1);
      }
    return copy;
}