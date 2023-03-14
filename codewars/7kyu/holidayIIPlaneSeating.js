/*
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.


*/

function planeSeat(a) {
    if ((a.includes('I')) || (a.includes('J'))) return 'No Seat!!';
    let num = '';
    let letter = '';
    for (let i = 0; i < a.length; i++) {
        if ((a[i] >= '0') && (a[i] <= '9')) num += a[i];
        else letter += a[i];
    };
    if (Number(num) > 60) return 'No Seat!!';
    let align = '';
    if ((letter >= 'A') && (letter <= 'C')) {
        align += 'Left';
    } else if ((letter >= 'D') && (letter <= 'F')) {
        align += 'Middle';
    } else {
        align += 'Right';
    };
    let area = '';
    if ((Number(num) >= 1) && (Number(num) <= 20)) {
        area += 'Front';
    } else if ((Number(num) >= 21) && (Number(num) <= 40)) {
        area += 'Middle';
    } else {
        area += 'Back';
    };
    return `${area}-${align}`
}