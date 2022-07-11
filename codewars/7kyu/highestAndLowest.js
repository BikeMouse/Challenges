/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

function highAndLow(numbers){
    // Turning numbers string into an array of strings
    let a = numbers.split(' ');
    // Turning the array of strings into Numbers
    let b = [];
    a.forEach((e)=>{
      b.push(Number(e));
    });
    // Calculating the Highest and the Lowest value
    let high;
    let low;
    b.forEach((e)=>{
      if (e >= high){
        high = e;
      } else if (!high){
        high = e;
      }
    });
    b.forEach((e)=>{
      if (e <= low){
        low = e;
      } else if (!low){
        low = e;
      }
    });
    return `${high} ${low}`
}

/*
Refactored
*/

function highAndLow(numbers){
  // Turning numbers string into an array
  let a = numbers.split(' ');
  // Calculating the Highest and the Lowest value
  let low = Math.min(...a);
  let high = Math.max(...a);
  return `${high} ${low}`
}