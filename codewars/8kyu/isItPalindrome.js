/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    let y = x.toLowerCase();
    let reverseString = y.split('').reverse().join('');
    return y === reverseString
}