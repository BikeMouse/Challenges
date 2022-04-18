/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/

function removeEveryOther(arr){
    if (arr.length === 1){
      return arr;
    } else if (arr.length > 1){
      for (let i = 1; i < arr.length; i++){
        // arr[0] stays, arr[1] goes, arr[2] stays, arr[3] goes
        arr.splice(i,1);
    } 
      return arr
  }
}