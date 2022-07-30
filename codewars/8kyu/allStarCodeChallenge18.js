/*
All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/

function strCount(str, letter){  
    // two strings, the first is to be checked of occurrences of the second. the first is sometimes empty
    // integer, representing the orrences of the second string in the first
    // 'hello', 'o' --> 1
    // looping the strings, checking for the letter and count. return count
    let count = 0;
    if (str !== ''){
      for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() == letter){
          count++;
        };
      };
      return count;
    } else {
      return 0;
    };
};