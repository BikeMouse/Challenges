/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum( a,b ){
    let x = [a,b];
    let y = [];
    x.sort((o,p)=>o-p)
    for (let i = x[0]; i <= x[x.length-1]; i++){
      y.push(i);
    }
    return y.reduce((acc,c)=>acc+c,0)
}