/*
Odile is back to kindergarten . . . as a teacher !

For now, she got a list, the list of kids she'll have to take care pretty soon.

This list has a form of a csv (comma-separated-values) list, with records separated by a newline ( "\n" ). Each record in this list representing a kid on the form "Name,DateOfBirth,Gender" :

Name being the name ( :) ) of a kid.
DateOfBirth in the form d/m/yyyy with :
day of the month on 1 or 2 digits,
month on 1 or 2 digits,
and year on 4 digits.
...gender as a single character : m or f (male/female).
Odile would like to print this list in a prettier form. She would first parse this list to get a more useful one, and then ask another function to obtain a sorted and pretty-formatted list.

#Task

You should create 2 functions : parseKidList and sortByNames.

parseKidList( csv ) : receives the "csv-string-list" of kids and may return whatever-you want The return value of this function will be stored in a variable and this variable will be pass to second function. parseKidList may for example return an array of kid-objects, or kid-strings or even return the unchanged csv argument. The return value of this function will not be "directly" tested !

sortByNames( kids ) : receives as argument the "thing" obtained with previous function and should return an array of "kid-strings", sorted in ascending order by names of kids. A "kid-string" should be of the form NAME (M) dd/mm/yyyy or NAME (F) dd/mm/yyyy, ie :

Name of kid in uppercase,
Gender (M or F) in uppercase and in parenthesis,
...and Date of birth in dd/mm/yyyy format ( dd or mm meaning 2 digits for day or month)

*/

function parseKidList(csv) {
    return csv;
}

function sortByNames(kids) {
    let arr = kids.split('\n');
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let kiddo = arr[i].split(',');
        output[i] = `${kiddo[0].toUpperCase()} (${kiddo[kiddo.length - 1].toUpperCase()})`;
        kiddo.shift();
        kiddo.pop();
        let dOB = kiddo[0];
        let dOBArr = dOB.split('/');
        let a = '';
        for (let j = 0; j < dOBArr.length; j++) {
            if (dOBArr[j].length == 1) {
                a += `0${dOBArr[j]}/`
            } else if (dOBArr[j].length == 4) {
                a += dOBArr[j];
            } else {
                a += `${dOBArr[j]}/`;
            };
        };
        output[i] += ` ${a}`;
    };
    output.sort((a, b) => a.localeCompare(b));
    return output;
}