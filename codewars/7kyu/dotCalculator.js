/*
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

function dotCalculator (equation) {
    let a = [...equation].filter((e)=> e !== ' ').join('');
    let operator = '';
    let helper;
    for (let i = 0; i < a.length; i++){
      if (a[i] !== '.'){
        operator += a[i];
        helper = i;
      }
    };
    let before = a.slice(0,helper).length;
    let after = a.slice(helper+1).length;
    if (operator == '+'){
      return '.'.repeat(before+after);
    } else if (operator == '-'){
      return '.'.repeat(before-after);
    } else if (operator == '*'){
      return '.'.repeat(before*after);
    } else {
      if (a.slice(0,helper).endsWith('/')){
        return '.'.repeat((before-1)/after);
      }
      return '.'.repeat(before/after);
    }
}