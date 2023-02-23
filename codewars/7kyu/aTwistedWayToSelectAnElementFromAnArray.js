/*
You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.
*/

function select(arrSearch, arrTake) {
    arrSearch = arrSearch.sort((a, b) => b.localeCompare(a));
    let a = arrSearch[2][2];
    for (let i = 0; i < arrTake.length; i++) {
        if (arrTake[i].startsWith(a)) return arrTake[i];
    };
    return 'Nothing here';
}