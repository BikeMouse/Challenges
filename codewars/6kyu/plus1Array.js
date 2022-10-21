/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

function upArray(arr) {
    if (arr.length == 0) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                return null;
            } else if (arr[i] > 9) {
                return null;
            };
        };
        const a = arr.toString();
        let b = '';
        for (let i = 0; i < a.length; i++) {
            if (a[i] != ',') {
                b += a[i];
            };
        };
        b = BigInt(b);
        let ba = b + 1n;
        let bb = ba.toString();
        const c = [...bb].map((e) => Number(e));
        return c;
    };
}