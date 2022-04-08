/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.


*/
function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    };
    arr3.sort(compare);
    // looking for duplicates and removing them
    function isNot(element,index) {
      if (element === arr3[index+1]){
        return false
      }
      return true
    }
    let filtered = arr3.filter(isNot)
    return filtered
  }
