/*
Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad
If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
*/

function part(x) {
    const expressions = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (expressions.includes(x[i])) count++;
    };
    if (count == 0) return "Lynn, I've pierced my foot on a spike!!"
    if (count > 0) return `Mine's a Pint${'!'.repeat(count)}`;
}