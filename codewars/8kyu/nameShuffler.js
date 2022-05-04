/*
Write a function that returns a string in which firstname is swapped with last name.
*/

function nameShuffler(str){
    let reverseName = str.split(' ').reverse().join(' ')
    return reverseName
}