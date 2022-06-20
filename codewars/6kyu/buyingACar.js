/*
A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.
*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    // Integers and 1 float
    // Integers one for amount of months, one for money left in bank as array
    // (2000, 8000, 1000, 1.5) => [6, 766]
    // (price old car - price new car) + saving
    // end of month = new car * percentloss
    let o = startPriceOld;
    let n = startPriceNew;
    let s = savingperMonth;
    let diff = o-n;
    let calc = percentLossByMonth/100;
    let result = [];
    if (diff >= 0){
      return [0,diff];
    } else {
      for (let i = 1; diff < 0; i++){
        if (i%2 == 0){
          calc = calc + 0.005
        }
        o = o - (o*calc);
        n = n - (n*calc);
        diff = o - n + s*i;
        result.unshift(i)
      }
      result.push(Math.round(diff))
    }
    return [result[0],result[result.length-1]]
}