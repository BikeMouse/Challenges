/*
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.


*/

function chain(input, fs) {
    // integer and array of functions(add and multi)
    // the result of passing the integer into the functions -> add first, then multi
    // (2,[add,multi]) -> 90
    let result = fs[0](input);
    
    for (let i = 1; i < fs.length; i++) {
      
    result = fs[i](result);
  
    }
  
    return result;
}