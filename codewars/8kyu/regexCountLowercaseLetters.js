/*
Your task is simply to count the total number of lowercase letters in a string.
*/

function lowercaseCount(str) {
    let count = str.split('').filter((e) => e >= 'a' && e <= 'z').length;
    return count
}