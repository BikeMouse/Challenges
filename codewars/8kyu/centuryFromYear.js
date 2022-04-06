function century(year) {
  // Finish this :)
  //1 -100
  //101-200
  //year input and telling/converting to century   year/100 year/100+1
  let x = year/100
  if (year % 100 != 0 && year >= 101) {
    
    return (Math.ceil(x));
  } else if (year % 100 === 0 && year >= 101){
    return x;
  } else if (year <= 101){
    return (Math.floor(x)+1)
  }
}

/* Best Solution
function century(year) {
  return Math.ceil(year / 100)
}
*/