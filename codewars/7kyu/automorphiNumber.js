/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
*/

const automorphic = n => (n*n).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!';