/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

function sortArray(array) {
    // Array of numbers, sometimes empty
    // Array, odd numbers sorted in ascending order, even numbers stay in place
    // [7,4,1] -> [1,4,7]
    let working = [];
    // Getting the odd numbers
    for (let i = 0; i < array.length; i++){
      if (array[i] %2 !== 0){
        working.push(array[i]);
      }
    }
    working.sort((a, b) => a - b);
    const result = array.map((element,index)=>{
      if (element %2 == 0){
        return element;
      } else {
        return working.shift();
      }
    })
    return result;
}