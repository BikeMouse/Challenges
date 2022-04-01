/*Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples*/

function sumMul(n,m){
    let sum = 0;
    if (m <= 0){
      return "INVALID"
    } else {
      for (let i = 1; (i*n) < m; i++){
        sum += i*n;
      } return sum
    }
  }