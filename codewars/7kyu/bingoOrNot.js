/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let draw = [];
    for (let i = 0; i < a.length; i++) {
        if ((alpha[a[i] - 1] == 'b') || (alpha[a[i] - 1] == 'i') || (alpha[a[i] - 1] == 'n') || (alpha[a[i] - 1] == 'g') || (alpha[a[i] - 1] == 'o')) {
            draw.push(alpha[a[i] - 1]);
        };
    };
    let clean = new Set(draw);
    return clean.size === 5 ? 'WIN' : 'LOSE';
}