/*
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

function charConcat(string){
    let first
    let second
    let output = []
    if (string.length % 2 !== 0){
      first = string.slice(0,Math.floor(string.length/2)).split('')
      second = string.slice(Math.floor(string.length/2)+1).split('').reverse()
    } else {
      first = string.slice(0,Math.floor(string.length/2)).split('')
      second = string.slice(Math.floor(string.length/2)).split('').reverse()
    }
    for (let i = 0; i < first.length; i++){
        output.push(`${first[i]}${second[i]}${i+1}`)
    }
    return output.join('')
  }