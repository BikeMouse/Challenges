/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
*/

String.prototype.toAlternatingCase = function () {
    let a = this.split('');
    let b = [];
    a.forEach((e)=>{
      if (e == e.toUpperCase()){
        b.push(e.toLowerCase());
      } else if (e == e.toLowerCase()){
        b.push(e.toUpperCase());
      } else {
        b.push(e)
      }
    });
    return b.join('')
}