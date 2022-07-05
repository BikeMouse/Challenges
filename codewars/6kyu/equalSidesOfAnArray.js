/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

*/
function findEvenIndex(arr){
    //array of integers, positive and negative
    //index in the array where the left side equals the right side (sum), if false, return -1
    //[1,2,3,4,3,2,1] -> 3
    //sum arr[0][n] - arr[n] - sum arr[n][arr.length-1]
    for (let i = 0; i < arr.length; i ++){
      let resultL = arr.slice(0,i).reduce((acc,c)=>acc+c,0);
      let resultR = arr.slice(i+1).reduce((acc,c)=>acc+c,0);
      if (resultL == resultR){
        return i;
      }
    }
    return -1;
}