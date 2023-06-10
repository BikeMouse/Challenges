/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
*/

function abbreviate(string) {
    let arr = string.split(' ');
    let num;
    let ind;
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(',') && arr[i].length >= 4) {
            // word with (',')
            ind = arr[i].indexOf(',')
            let sen = arr[i].slice(0, ind);
            num = sen.length - 2;
            output += sen[0] + num + sen[sen.length - 1] + ', '
        } else if (arr[i].includes('-') && arr[i].length >= 4) {
            // word with '-'
            ind = arr[i].indexOf('-');
            let sen1 = arr[i].slice(0, ind);
            let sen2 = arr[i].slice(ind + 1);
            num = [sen1.length - 2, sen2.length - 2];
            output += sen1[0] + num[0] + sen1[sen1.length - 1] + '-' + sen2[0] + num[1] + sen2[sen2.length - 1] + ' ';
        } else if (!arr[i].includes('-') && arr[i].length >= 4) {
            // normal word
            num = arr[i].length - 2;
            output += arr[i][0] + num + arr[i][arr[i].length - 1] + ' ';
        } else {
            output += arr[i] + ' ';
        };
    };
    return output.slice(0, output.length - 1);
}