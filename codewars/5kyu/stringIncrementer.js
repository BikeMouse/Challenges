/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString (strng) {
    // string, sometimes empty
    // string, if no number at end, add one else increment by 1
    // pug -> pug1    mars21 -> mars22
    let nums = ['0','1','2','3','4','5','6','7','8','9'];
    let array = strng.split('');
    let letters = [];
    let numbers = [];
    if (strng == ""){
      return "1";
    } else {
      array.forEach((element)=>{
        if (nums.includes(element)==true){
          numbers.push(element);
        } else {
          letters.push(element);
        }
      });
    };
    if (numbers.length == 0){
      numbers.push('1');
    } else if (numbers.length == 1){
      numbers[0] = (Number(numbers[0])+1).toString();
      if (numbers[0] == '10'){
        numbers[0] = '0';
        numbers.unshift('1');
      }
    } else if (numbers.length == 2){
      numbers[numbers.length-1] = (Number(numbers[numbers.length-1])+1).toString();
      if (numbers[numbers.length-1] == '10'){
        numbers[numbers.length-1] = '0';
        numbers[0] = (Number(numbers[0])+1).toString();
        if (numbers[0] == '10'){
        numbers[0] = '0';
        numbers.unshift('1');
      }
      }
    } else if(numbers.length == 3){
      numbers[numbers.length-1] = (Number(numbers[numbers.length-1])+1).toString();
      if (numbers[numbers.length-1] == '10'){
        numbers[numbers.length-1] = '0';
        numbers[numbers.length-2] = (Number(numbers[numbers.length-2])+1).toString();
        if(numbers[numbers.length-2] == '10'){
        numbers[numbers.length-2] = '0';
        numbers[0] = (Number(numbers[0])+1).toString();
        if (numbers[0] == '10'){
        numbers[0] = '0';
        numbers.unshift('1');
      }
      }
      }
    } else if(numbers.length == 4){
      numbers[numbers.length-1] = (Number(numbers[numbers.length-1])+1).toString();
      if (numbers[numbers.length-1] == '10'){
        numbers[numbers.length-1] = '0';
        numbers[numbers.length-2] = (Number(numbers[numbers.length-2])+1).toString();
        if(numbers[numbers.length-2] == '10'){
        numbers[numbers.length-2] = '0';
        numbers[numbers.length-3] = (Number(numbers[numbers.length-3])+1).toString();
        if (numbers[numbers.length-3] == '10'){
        numbers[numbers.length-3] = '0';
        numbers[0] = (Number(numbers[0])+1).toString();
        if (numbers[0] == '10'){
        numbers[0] = '0';
        numbers.unshift('1');
       }
       }
       }
       }
    } else if(numbers.length == 5){
      numbers[numbers.length-1] = (Number(numbers[numbers.length-1])+1).toString();
      if (numbers[numbers.length-1] == '10'){
        numbers[numbers.length-1] = '0';
        numbers[numbers.length-2] = (Number(numbers[numbers.length-2])+1).toString();
        if(numbers[numbers.length-2] == '10'){
        numbers[numbers.length-2] = '0';
        numbers[numbers.length-3] = (Number(numbers[numbers.length-3])+1).toString();
        if (numbers[numbers.length-3] == '10'){
        numbers[numbers.length-3] = '0';
        numbers[numbers.length-4] = (Number(numbers[numbers.length-4])+1).toString();
        if (numbers[numbers.length-4] == '10'){
        numbers[numbers.length-4] = '0';
        numbers[0] = (Number(numbers[0])+1).toString();
        if (numbers[0] == '10'){
        numbers[0] = '0';
        numbers.unshift('1');
       }
       }
       }
       }
       }
    }
    return letters.join('')+numbers.join('');
}