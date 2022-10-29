/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
    let count = [];
    a.forEach((e) => {
        if (!count.includes(e)) {
            count.push(e);
        }
    });
    return count
}