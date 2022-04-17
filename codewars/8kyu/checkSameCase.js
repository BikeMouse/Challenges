/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a,b){
    // checking for non letters
    if ((a.charCodeAt(0) >= 91 && a.charCodeAt(0) <= 96) || (b.charCodeAt(0) >= 91 && b.charCodeAt(0) <= 96)){
      return -1;
    } else if ((a.charCodeAt(0) > 122) || (b.charCodeAt(0) > 122)){
      return -1;
    } else if ((a.charCodeAt(0) < 65) || (b.charCodeAt(0) < 65)){
      return -1;
    // checking for both parameter being Uppercase
    } else if ((a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) && (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90)){
      return 1;
    // checking for both parameters being Lowercase
    } else if ((a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) && (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122)){
      return 1;
    // checking for one parameter being Uppercase
    } else if ((a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) || (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90)){
      return 0;
    // checking for one parameter being Lowercase
    } else if ((a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) || (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122)){
      return 0;
    } else {
      return -1;
    }
}