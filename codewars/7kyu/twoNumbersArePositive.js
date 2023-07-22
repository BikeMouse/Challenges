/*
Your job is to write a function, which takes three integers a, b, and c 
as arguments, and returns True if exactly two of of the three integers are 
positive numbers (greater than zero), and False - otherwise.
*/

const twoArePositive = (a, b, c) => [a,b,c].filter((e) => e > 0).length == 2