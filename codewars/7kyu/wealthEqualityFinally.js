/*
Wealth is represented as an array/list where every index is the wealth of a single citizen.
The function should mutate the input such that every index has the same amount of wealth.

See example:

Input:
[5, 10, 6]  >>> This represents:
           # citizen 1 has wealth 5
           # citizen 2 has wealth 10
           # citizen 3 has wealth 6
Should be after the test:
 [7, 7, 7] >>> wealth has now been equally redistributed
Info:

MUTATE the input array/list, don't return anything
Input is guaranteed to hold at least 1 citizen
Wealth of a citizen will be an integer with minimum equal to 0 (negative wealth is not possible)
Handling of floating point error will not be tested

*/

function redistributeWealth(wealth) {
    let equal = wealth.reduce((acc, c) => acc + c, 0) / wealth.length;
    for (let i = 0; i < wealth.length; i++) {
        wealth[i] = equal;
    };
    void wealth;
}