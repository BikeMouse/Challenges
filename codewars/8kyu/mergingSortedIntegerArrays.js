/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

*/

function mergeArrays(a, b) {
    let c = a.concat(b).sort((y, z) => y - z)
    let output = [];
    c.forEach((e) => {
        if (!output.includes(e)) {
            output.push(e)
        }
    })
    return output
}
