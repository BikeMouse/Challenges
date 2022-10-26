/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

*/

function kebabize(str) {
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let arr = [...str];
    let clean = '';
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        if (!nums.includes(arr[i])) {
            clean += arr[i]
        };
    };
    for (let i = 0; i < clean.length; i++) {
        if (clean[i] == clean[i].toUpperCase()) {
            output += '-';
            output += clean[i].toLowerCase();
        } else {
            output += clean[i];
        };
    };
    return output.startsWith('-') ? output.slice(1) : output;
}