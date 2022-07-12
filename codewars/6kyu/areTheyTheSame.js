/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


*/

function comp(array1, array2){
    // 2 arrays of numbers, order within array can be ignored
    // return boolean if 2nd array contains numbers squared of array 1. If one array is empty, return false
    // a = [121, 144, 19, 161, 19, 144, 19, 11]  b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] -> true
    if ((!array1)||(!array2)){
      return false;
    } else {
      let arr = array1.sort((a,b)=> a-b);
      let arrSquare = arr.map((x)=> Math.pow(x,2));
      let brr = array2.sort((a,b)=> a-b);
      let result = arrSquare.every((e,i)=> e == brr[i]);
      return result
      };
}