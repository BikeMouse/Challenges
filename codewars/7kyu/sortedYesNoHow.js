/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.


*/

function isSortedAndHow(array) {
    let a = [];
    for (let i = 0; i < array.length; i++){
      if (array[i] < array[i+1]){
        a.push('ascending');
      } else if (array[i] > array[i+1]){
        a.push('descending');
      };
    };
    if ((a.includes('descending'))&&(a.includes('ascending'))){
      return 'no';
    } else if ((a.includes('descending'))&&(!a.includes('ascending'))){
      return 'yes, descending';
    } else {
      return 'yes, ascending'
    }
}