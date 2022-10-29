/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
    let s1 = [...str1];
    let s2 = [...str2];
    let str1Count = {};
    let str2Count = {};
    for (let i = 0; i < s1.length; i++) {
        if (!str1Count[s1[i]]) {
            str1Count[s1[i]] = 1;
        } else {
            str1Count[s1[i]]++;
        };
    };
    for (let i = 0; i < s2.length; i++) {
        if (!str2Count[s2[i]]) {
            str2Count[s2[i]] = 1;
        } else {
            str2Count[s2[i]]++;
        };
    };
    for (let [key, value] of Object.entries(str2Count)) {
        if (!(key in str1Count && value <= str1Count[key])) {
            return false;
        };
    };
    return true;
};