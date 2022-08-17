/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.


*/

function smallEnough(a, limit){
    let check = [];
    a.forEach((e)=>{
      if (e > limit){
        check.push(false);
      } else {
        check.push(true);
      }
    });
    return check.includes(false) ? false : true;
}