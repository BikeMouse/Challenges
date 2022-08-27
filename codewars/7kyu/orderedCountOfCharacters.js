/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
    let count = new Map();
    let result = [];
    for (let i = 0; i < text.length; i++){
      if (!count.has(text[i])){
        count.set(text[i],1);
      } else {
        count.set(text[i], count.get(text[i])+1)
      };
    };
    for (const [key,value] of count.entries()){
      result.push([key,value])
    };
    return result
}