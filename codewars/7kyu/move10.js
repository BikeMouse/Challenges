/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.


*/

function moveTen(s){
    let a = s.toLowerCase().split('');
    let b = [];
    for (let i = 0; i < a.length; i++){
      let temp = a[i].charCodeAt()+10;
      if (temp > 122){
        temp = (temp-122)+96;
        b.push(temp);
      } else {
        b.push(temp);
      };
    };
    let result = [];
    for (let i = 0 ; i < b.length; i++){
      result.push(String.fromCharCode(b[i]));
    };
    return result.join('')
}