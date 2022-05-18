/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


*/

function array(arr){
    //remove first and last character
    //string given - separated by commas
    //return new string containing same sequence separated by spaces
    //example: 1,2,3,4,5 -> 2,3,4
    //split string for array
    //remove first and last character
    //join array for new string and remove commas
    //if string is empty return null
    let newArr = arr.split(',');
    
    return (newArr.length < 3 ? null : newArr.slice(1, newArr.length - 1).join(' '));
}
