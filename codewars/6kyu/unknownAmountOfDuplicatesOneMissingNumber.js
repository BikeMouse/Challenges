/*
we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).

They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

Let's see an example:

arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

500 <= a <= 50000
a + k <= b and 100 <= k <= 1000000
amount of duplicates variable, according to the length of the array
*/

function findDupsMiss(arr) {
    // array of numbers (sequence)
    // in this sequence 1 number is missing
    // in this sequence are duplicates
    // code needs to be fast
    // need to return (as array) the missing number and the duplicate numbers (just the num not the amount of occurances)
    // example : [1,2,2,2,2,3,4,5,5,5,7,8,8,8,9,10] --> [6, [2,5,8]]
    // sort the array from lowest to highest number
    arr.sort((a,b)=>a-b);
    let dupes = [];
    let clean = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === arr[i+1]){
        dupes.push(arr[i]);
      } else {
        clean.push(arr[i]);
      };
    };
    let missingNum;
    for (let j = 0; j < clean.length; j++){
      if (clean[j]-clean[j-1] !== 1){
        missingNum = clean[j-1]+1;
      };
    };
    return [missingNum, dupes]
}