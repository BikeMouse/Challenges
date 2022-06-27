/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
*/

function gimme (triplet) {
    // integers and floats, positive and negative
    // return the index of that element, which value lies between
    // [2,3,1] -> 0 -- 2 is between 1 and 3
    let copy = [...triplet];
    copy.sort((a,b) => a - b );
    for (let i = 0; i < triplet.length; i++){
      if (triplet[i]==copy[1]){
        return i;
      };
    };
  }