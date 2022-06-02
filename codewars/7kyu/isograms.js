/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){
    //string, letter case to be ignored, sometimes empty
    //return boolean if string is isogram. empty string is an isogram
    //'aba' -> false; 'bike' -> true
    str = str.toLowerCase();
    let strArray = str.split('');
    if (str == ""){
      return true;
    } else {
      for (let i = 0; i < strArray.length; i++){
        for (let j = i+1; j < strArray.length; j++){
          if (strArray[i] == strArray[j]){
            return false;
          }
        }
      }
      return true;
    }
}