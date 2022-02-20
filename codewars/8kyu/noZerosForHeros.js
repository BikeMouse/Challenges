/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway


*/

function noBoringZeros(n) {
    if (n % 1000000 == 0){
      return n/1000000
    } else if (n % 100000 == 0){
      return n/100000
    } else if (n % 10000 == 0){
      return n/ 10000
    } else if (n % 1000 == 0){
      return n/1000
    } else if (n % 100 == 0){
      return n/100
    } else if (n % 10 == 0){
      return n/10
    } else if ( n == 0){
      return 0
    } else {
      return n
    }
}