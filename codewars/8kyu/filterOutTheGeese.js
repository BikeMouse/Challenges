/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:
*/

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // list of birds (sometimes including geese, sometimes no geese, sometimes all geese)
    // list of birds without geese
    // comparing list of birds with list of geese.
    // if a goose comes up, remove goose
    let result = [];
    birds.forEach((element)=>{
        if (geese.includes(element)== false){
          result.push(element)
        }
      });
    return result;
};