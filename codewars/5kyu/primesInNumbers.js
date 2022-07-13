/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n){
    // n is a number, the result of the multiplication of all the prime factors
    // string that displayes all the prime factors
    // (7775460)  ->  '(2**2)(3**3)(5)(7)(11**2)(17)'
    let primes = [];
    let result = '';
    for (let i = 2; i < n; i++){
      if (n % i == 0){
        primes.push(i)
        n = n/i
        i--
      };
    };
    let count = {};
    for (let i = 0; i < primes.length; i++){
      if (!count[primes[i]]){
        count[primes[i]] = 1;
      } else {
       count[primes[i]]++;
      }
    };
    for (let key in count){
        if (count[key] > 1){
          result += `(${key}**${count[key]})`;
        } else {
          result += `(${key})`;
        }
      };
    console.log(primes,n,count,result)
    if (!n){
      return result;
    } else {
      return result+`(${n})`
    }
}