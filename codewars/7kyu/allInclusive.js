/*
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
*/

function containAllRots(strng, arr) {
    if (strng == '') return true;
    let sArr = [strng];
    for (let i = 1; i < strng.length; i++) {
        let a = `${strng.slice(i)}${strng.slice(0, i)}`;
        sArr.push(a);
    };
    if (sArr.length % 2 == 0) {
        let flag = false;
        let a = sArr.slice(0, sArr.length / 2);
        let b = sArr.slice(sArr.length / 2);
        for (let i = 0; i < a.length; i++) {
            if (a[i] == b[i]) flag = true
        };
        if (flag == true) sArr = sArr.slice(0, sArr.length / 2);
    };
    let check = [];
    for (let i = 0; i < arr.length; i++) {
        if (sArr.includes(arr[i])) check.push(true);
    };
    return check.length == sArr.length;
}