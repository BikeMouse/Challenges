/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.


*/

function bingo(ticket, win) {
    let check = 0;
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < ticket.length; i++) {
        arr1.push(ticket[i][0]);
        arr2.push(ticket[i][1]);
    };
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i].charCodeAt(j) === arr2[i]) {
                check++;
                break;
            }
        };
    };
    return check > win ? 'Winner!' : check === win ? 'Winner!' : 'Loser!'
}