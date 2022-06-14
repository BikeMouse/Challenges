/*
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

*/
function arrAdder(arr) {
    // arrays of letters
    // return string
    // ['J','R']['u','i']['s','d']['t','e'] -> 'Just Ride'
    let result = '';
    for (let i = 0; i < arr[0].length; i++){
      for(let j = 0; j < arr.length; j++){
          result += arr[j][i];
      }
      result += ' ';
    }
    return result.trim()
}