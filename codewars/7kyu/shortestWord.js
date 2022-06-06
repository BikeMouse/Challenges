/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/

function findShort(s){
    // string, never empty, never different data types
    // return length of shortest word(s)
    // "Let's travel abroad shall we" -> 2
    // turn string into array, checking length of each element
    const string = s.split(' ');
    let result = 100;
    string.forEach((element) => {
      if (element.length < result){
        result = element.length;
      }
    });
    return result;
}