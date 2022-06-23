/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.


*/

function diamond(n){
    let diam = '*';
    let diams;
    if ((n % 2 == 0) || (n <= 0)){
      return null;
    } else if (n == 1){
      return '*\n';
    } else {
       diams = [diam.repeat(n)+'\n'];
      for (let i = 1; i < n/2; i++){
        diams.push(' '.repeat(i)+diam.repeat(n-i*2)+'\n');
        diams.unshift(' '.repeat(i)+diam.repeat(n-i*2)+'\n');
      }
    }
    return diams.join('');
}