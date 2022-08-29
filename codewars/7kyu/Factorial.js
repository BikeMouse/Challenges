/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial


*/

function factorial(n){
    let result = n;
    for (let i = n-1; i >= 1; i--){
      result = result*i;
    };
    return n == 0 ? 1 : result
}