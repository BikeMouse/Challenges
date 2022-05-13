/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).


*/

function insertDash(num) {
    //inserting dashes between odd digits - 0 should not be declared odd - 1/3/5/7/9
    //num is always positive
    //return output as string
    //example 454793 -> 4547-9-3
    //turning num into array
    let numArray = num.toString().split('')
    //looping through the array
    //comparing/conditional each element
    for (let i = 0; i < numArray.length; i++){
      //numArray[i] needs to assessed with the nums before and after
      //if between two odd nums, a - needs to be added
      //if numArray[i] is numArray[0] then no previous num
      //if numArray[i] is last element then no following num
      if (numArray[i]%2===0){
        numArray[i]=numArray[i];
      } else if ((numArray[i+1]==='1')||(numArray[i+1]==='3')||(numArray[i+1]==='5')||(numArray[i+1]==='7')||(numArray[i+1]==='9')){
        numArray[i]=numArray[i]+'-';
      }
    }
    return numArray.join('')
}