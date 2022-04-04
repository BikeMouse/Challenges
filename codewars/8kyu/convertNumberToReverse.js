/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/
function digitize(n) {
    let digit = n.toString()
    let digits = digit.split('').reverse();
    return digits.map(x=> Number(x));
  }