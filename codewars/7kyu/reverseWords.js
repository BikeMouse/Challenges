/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

*/

function reverseWords(str) {
    let strArray = str.split(' ');
    let result = [];
    for (let i = 0; i < strArray.length; i++){
      result.push(strArray[i].split('').reverse().join(''))
    };
    return result.join(' ')
}