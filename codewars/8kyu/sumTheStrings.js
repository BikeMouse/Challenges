/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
*/

function sumStr(a,b) {
    let numA = Number(a);
    let numB = Number(b);
    let result = '';
    if ((a==='')&&(b==='')){
      result = 0;
    } else if (a===''){
      result = 0 + numB;
    } else if (b===''){
      result = 0 + numA;
    } else {
      result = numA + numB
    }
    return result.toString()
}