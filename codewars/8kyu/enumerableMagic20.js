/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(array, n) {
    // n = integer, sometimes empty array; array = list of integers, sometimes empty array
    // return mutliple arrays in array, numbers
    // ([3,5,8,13]3) -> [[3,5,8],[5,8,13]]
    // ([3,5,8,13]2) -> [[3,5],[5,8],[8,13]]
    // creating result array -> empty to start with
    // n being number of elements in one array, in order
    // creating new arrays to be put in result array
  let result = [];
  for( let i = 0; i <= array.length - n; i++){
    result.push(array.slice(i, i + n ));
  }
  return result;
}