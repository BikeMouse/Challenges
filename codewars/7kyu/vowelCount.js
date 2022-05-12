/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let count = 0;
    
    let counts = str.split('');
    for (let i = 0; i < counts.length; i++){
      if (counts[i] === 'a'){
        count = count+1;
      } else if (counts[i] === 'e'){
        count = count+1;
      } else if (counts[i] === 'i'){
        count = count+1;
      } else if (counts[i] === 'o'){
        count = count+1;
      } else if (counts[i] === 'u'){
        count = count+1;
      }
    }
    
    return count;
}