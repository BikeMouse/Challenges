/*
you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

Example
alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
Technical Details
The string will include only letters.
The first letter of each sequence is uppercase followed by n-1 lowercase.
Each sequence is separated with a comma.
Return value needs to be a string.
*/

function alphaSeq(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const letters = str.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');
    let output = '';
    for (let i = 0; i < letters.length; i++) {
        let a = alphabet.indexOf(letters[i]);
        output += letters[i].toUpperCase() + letters[i].repeat(a) + ',';
    };
    output = output.slice(0, -1);
    return output;
}