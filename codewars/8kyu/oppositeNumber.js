/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    //integer or float, positive or negative
    //return opposite
    // 1 -> -1
    //conditional
    if (number > 0){
      return number*-1;
    } else if (number === 0){
      return 0;
    } else if (number < 0){
      return number*-1;
    }
}