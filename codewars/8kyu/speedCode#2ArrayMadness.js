/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

*/

function arrayMadness(a, b) {
    let aSquared = a.map((e) => e ** 2).reduce((acc, c) => acc + c, 0);
    let bCubed = b.map((e) => e ** 3).reduce((acc, c) => acc + c, 0);
    return aSquared > bCubed
}