/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
*/


function minValue(values){
    values.sort((a,b)=>a-b);
    let min = [];
    for (let i = 0; i < values.length; i++){
      if (values[i] !== values[i+1]){
        min.push(values[i].toString());
      }
    };
    return Number(min.join(''));
}