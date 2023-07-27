/*
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"
*/

function battle(x, y) {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let teamX = 0
    let teamY = 0
    for (let i = 0; i < x.length; i++) {
        teamX += letters.indexOf(x[i]) + 1
    }
    for (let i = 0; i < y.length; i++) {
        teamY += letters.indexOf(y[i]) + 1
    }
    return teamX > teamY ? `${x}` : teamY > teamX ? `${y}` : 'Tie!'
}