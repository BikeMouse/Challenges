/*
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

*/

function isDigit(s) {
    // Parameter = string
    // Return = boolean
    // Example = s == s102 ==> false
    // false examples => 3-4,' 3  5 ','3 5',zero
    // true examples => 3, ' 3 ', -3.5
    if(s == ' ' || s == ""){
      return false;
    } else if(typeof s === "number" || isNaN(s) === false){
      return true;
    } else{
      return false;
    };
}