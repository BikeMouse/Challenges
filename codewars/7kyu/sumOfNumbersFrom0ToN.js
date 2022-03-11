/*
We want to generate a function that computes the series starting from 0 and ending until the given number.


*/

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let result = ''
      let sum = 0;
      for (let i = 0; i <= count; i++){
        console.log(i);
        result += i.toString() + '+';
        sum += i;
      };
      return count < 0 ? `${count}<0` : count == 0 ? `0=0` : result.slice(0,-1) + ` = ${sum}`;
    };
  
    return SequenceSum;
  
})();