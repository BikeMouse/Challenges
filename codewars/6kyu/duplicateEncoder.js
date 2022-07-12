/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


*/

function duplicateEncode(word){
    // string- letters,symbols and possibly numbers
    // string - ( for character appearing once ) for characters appearing multiple times
    // 'Coffee' -> '(())'
    let count = {};
    let a = [...word.toLowerCase()];
    let b = [];
    for (let i = 0; i < a.length; i++){
      if (!count[a[i]]){
        count[a[i]] = 1;
      } else {
        count[a[i]]++;
      }
    };
    a.forEach((e)=>{
      if (count[e]== 1){
        b.push('(');
      } else {
        b.push(')');
      }
    });
    return b.join('');
}