/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
    let words = str.split(' ');
    let temp = [];
    for (let i = 0; i < words.length; i++) {
        let a = '';
        let b = '';
        let c = '';
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] >= '0' && words[i][j] <= '9') {
                a += words[i][j];
            } else {
                b += words[i][j]
            };
        };
        a = String.fromCharCode(a);
        if (b.length == 0) {
            c = a;
        } else if (b.length == 1) {
            c = a + b;
        } else if (b.length == 2) {
            b = b[1] + b[0];
            c = a + b
        } else {
            b = b[b.length - 1] + b.slice(1, -1) + b[0];
            c = a + b;
        };
        temp.push(c);
    };
    temp = temp.join(' ');
    return temp;
}; 