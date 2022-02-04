/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.


*/

function switcher(x){
    let special = "!? "
    return x.reduce((acc,c)=>acc+(c<27?String.fromCharCode(123-c):special[c-27]),'');
}