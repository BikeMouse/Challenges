/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


*/

function rot13(message){
    //string, sometimes numbers in it
    /*string, every letter is replaced with a letter 13
      positions further on in the alphabet, numbers stay as they are*/
    //'test' -> 'grfg'
    /*loop through string and replace every letter with the letter +13 in utf-16,
      when reaching end of letters, start from the beginning*/
    let conversion = [];
    for (let i = 0; i < message.length; i++){
      conversion.push(message.charCodeAt(i));
    };
    let result = [];
    conversion.forEach((e)=>{
      if (e < 65){
        e = e
      } else if ((e <= 90) && (e + 12 > 90)){
        e = 65 + (e + 12 - 90)
      } else if ((e <= 122) && (e + 12 >= 122)){
        e = 97 + (e + 12 - 122)
      } else {
        e = e + 13
      }
      result.push(String.fromCharCode(e))
    });
    return result.join('')
}