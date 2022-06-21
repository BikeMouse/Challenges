/*
Given a number N, determine if the sum of N consecutive numbers is odd or even.

If the sum is definitely an odd number, return Odd.
If the sum is definitely an even number, return Even.
If the sum can be either odd or even ( depending on which first number you choose ), return Either.
*/

function oddOrEven(n) {
    let half = n/2;
    if (n % 2 == 1){
      return EITHER;
    } else if (half % 2 == 0) {
      return EVEN;
    } else {
      return ODD;
    }
}