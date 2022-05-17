/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
    // integer
    // string, starting with 1 and alternating with 0
    // 6 -> '101010'
    // size number equals number of characters in string
    // string.length = size
    // string[0] = '1'
    // string[1] = '0'
    // string[2] = '1'
    // string[3] = '0'
    let result = [];
    for (let i = 0; i < size; i++){
      result.push(i)
    }
    for (let i = 0; i < result.length; i++){
      if (result[i]%2===0){
          result[i]='1';
      } else{
          result[i]='0';
      }
    }
    return result.join('');
}