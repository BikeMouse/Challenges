/*
A twin prime is a prime number that differs from another prime number by 2. Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.
*/

function isTwinPrime(n){
    // interger, positive - if number -2 or +2 are primes, then n is a twin prime
    // true or false
    // 5 +2 = 7 (prime) 5-2 = 3 (prime) 5 twin prime
    // prime is a number that only divides through itself and 1
    let a = n-2;
    let b = n+2;
    function isPrime(num){
      if (num <= 1){
        return false;
      };
      for(let i = 2; i < num; i++){
        if (num % i == 0){
          return false;
        };
      };
      return true;
    };
    return isPrime(n) && (isPrime(a)||isPrime(b))
}