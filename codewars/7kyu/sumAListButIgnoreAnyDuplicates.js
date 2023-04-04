/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
    if (numList.length == 0) return 0;
    let nonDupes = {};
    for (let i = 0; i < numList.length; i++) {
        if (!nonDupes[numList[i]]) {
            nonDupes[numList[i]] = 1;
        } else {
            nonDupes[numList[i]]++
        }
    };
    let result = 0;
    for (const [key, value] of Object.entries(nonDupes)) {
        if (value == 1) result += Number(key);
    };
    return result;
}