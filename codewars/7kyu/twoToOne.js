/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    let result = [];
    let concatArray = s1Array.concat(s2Array);
    concatArray.sort();
    for (let i = 0; i < concatArray.length; i++){
      if(concatArray[i]!==concatArray[i+1]){
        result.push(concatArray[i]);
      }
    }
    return result.join('');
}