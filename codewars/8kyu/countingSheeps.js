/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

*/

function countSheeps(arrayOfSheep) {
    let sumOfSheep = 0
    for (let i = 0; i <= arrayOfSheep.length; i++){
      if (arrayOfSheep[i] === true){
        sumOfSheep += arrayOfSheep[i];
      }
    } return sumOfSheep
  }