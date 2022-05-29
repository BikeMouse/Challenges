/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

function solution(string) {
    // string or sometimes empty
    // return the separated camel case
    // string = camelCase -> camel Case
    // turn string into array, loop through and check each index and element, place whitespace
    if (string == ""){
      return "";
    } else {
    let stringArray = string.split('');
    let result = [];
    for (let i = 0; i < stringArray.length; i++){
      if (stringArray[i] == stringArray[i].toLowerCase()){
        result.push(stringArray[i]);
      } else if (stringArray[i] == stringArray[i].toUpperCase()){
        stringArray[i] = " "+stringArray[i];
        result.push(stringArray[i]);
      }
    }
    return result.join('');
    }
}