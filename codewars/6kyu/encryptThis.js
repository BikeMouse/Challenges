/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
    let a = text.split(' ');
    let result = [];
    for (let i = 0; i < a.length; i++){
      if (a[i].length == 1){
        result.push(`${a[i].charCodeAt([0])}`);
      } else if (a[i].length == 2){
        result.push(`${a[i].charCodeAt([0])}${a[i][1]}`);
      } else if (a[i].length > 2){
        result.push(`${a[i].charCodeAt([0])}${a[i][a[i].length-1]}${a[i].slice(2,-1)}${a[i][1]}`);
       };
     };
    return result.join(' ')
  }