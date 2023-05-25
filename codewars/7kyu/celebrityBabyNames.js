/*
Celebrity Baby Names
Celebrities love to call their children quirky names. The latest trend for baby names is the 'last letter trend'. The rules of the trend are as follows: the first letter of a child's name should be the same as the last letter of their older sibling. For example:

Suri (1st child), Ireland (2nd child), Diva (3rd child), Aleph (4th child)

And so on...

Create a function validName which accepts an array of names. It should return "Congratulations, your baby names are compatible!" if all of the names follow the rule. It should return "Back to the drawing board, your baby names are not compatible." if all of the names do not follow the rule.

If a couple only has one child return "Congratulations, you can choose any name you like!"

If the array is empty return "You must test at least one name."

Notes:
Names may be hyphenated or two words e.g. Blue Ivy or Jean-Paul
Names will not include any other characters apart from letters, hyphens or spaces.
*/

function validName(array) {
    if (array.length == 0) return 'You must test at least one name.';
    if (array.length == 1) return 'Congratulations, you can choose any name you like!';
    let check = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1][array[i - 1].length - 1].toLowerCase() == array[i][0].toLowerCase()) {
            check.push(true);
        } else {
            check.push(false);
        };
    };
    return check.includes(false) ? 'Back to the drawing board, your baby names are not compatible.' : 'Congratulations, your baby names are compatible!';
} 