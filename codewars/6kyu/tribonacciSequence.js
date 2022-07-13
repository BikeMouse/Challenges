/*
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
*/

function tribonacci(signature,n){
  // array of nums and a num
  // array # elements = n
  // [1,1,1],10  ->  [1,1,1,3,5,9,17,31,57,105]
  let result;
  if (n == 0){
    return [];
  } else if ((n > 0) && (n < 4)){
    return signature.slice(0,n)
  } else{
    result = (signature.slice(0,4))
    for(let i = 3; i < n; i++){
      signature[i] = signature[i-3]+signature[i-2]+signature[i-1]
      result.push(signature[i]);
    };
    return result;
  }
}