/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"
*/

const swap = string => string.split('').map((e) => ['a', 'e', 'i', 'o', 'u'].includes(e) ? e.toUpperCase() : e).join('');