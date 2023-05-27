/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

*/

function capMe(names) {
    let output = [];
    for (let i = 0; i < names.length; i++) {
        let a = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
        output.push(a);
    };
    return output;
}