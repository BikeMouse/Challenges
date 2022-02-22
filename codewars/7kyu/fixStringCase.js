/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

function solve(s){
    let sArray = [...s];
    let upperCase = 0;
    let lowerCase = 0;
    sArray.forEach((e)=>{
      if (e == e.toUpperCase()){
        upperCase++;
      } else {
        lowerCase++;
      }
    });
    return upperCase > lowerCase ? s.toUpperCase() : lowerCase > upperCase ? s.toLowerCase() : s.toLowerCase();
}