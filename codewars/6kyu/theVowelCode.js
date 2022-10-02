/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
    let output = '';
    for (let i = 0; i < string.length; i++){
      switch(string[i]){
          case 'a':
          output+= '1'
          break;
          case 'e':
          output+= '2'
          break;
          case 'i':
          output+= '3'
          break;
          case 'o':
          output+= '4'
          break;
          case 'u':
          output+= '5'
          break;
          default:
          output+= string[i]
          break;
      };
    };
    return output;
  };
  
  function decode(string) {
    let output = '';
    for (let i = 0; i < string.length; i++){
      switch(string[i]){
          case '1':
          output+= 'a'
          break;
          case '2':
          output+= 'e'
          break;
          case '3':
          output+= 'i'
          break;
          case '4':
          output+= 'o'
          break;
          case '5':
          output+= 'u'
          break;
          default:
          output+= string[i]
          break;
      };
    };
    return output;
  };