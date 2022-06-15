/*
Given a string, swap the case for each of the letters.
*/

function swap(str){
    let array = str.split('');
    let result = [];
    if (str == ""){
      return ""
    } else {
      for (let i = 0; i < array.length; i++){
            if (array[i]==array[i].toLowerCase()){
              result.push(array[i].toUpperCase());
            } else {
              result.push(array[i].toLowerCase());
            }
      }
    }
    return result.join('');
}