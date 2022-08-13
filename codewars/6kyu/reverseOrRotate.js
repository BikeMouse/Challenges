/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

*/

function revrot(str, sz) {
    // string of numbers
    // IF sz is <= 0 or if str is empty return ""; sz is greater (>) than the length of str return ""
    // "66443875" 4 --> "44668753"
    // sclicing the string, checking the length of the rest of the string- repeat if needed
    // determine to either rotate or reverse, build the response string
    // for the chunk to be reversed, cube every digit, take the sum and divide by 2 (modulus == 0)
    // rotate one position to the left if the above sum is not divisible by 2
    if ((sz <= 0) || (str.length == 0) || (sz > str.length)){
      return "";
    } else {
      let array = Array.from({length:Math.ceil(str.length/sz)},(_,i)=>str.slice(i*sz,i*sz+sz));
      let result = '';
      let cubes = [];
      for (let i = 0; i < array.length; i++){
        if (array[i].length == sz){
          cubes.push(array[i].split('').reduce((acc,c)=> acc + Math.pow(c,3),0))
        };
      };
      for (let i = 0; i < cubes.length; i++){
        if (cubes[i] % 2 == 0){
          result += array[i].split('').reverse().join('');
        } else {
          result += array[i].slice(1);
          result += array[i][0];
        }
      }
      return result;
    }
}