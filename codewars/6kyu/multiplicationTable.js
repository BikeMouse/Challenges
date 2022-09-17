/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


*/

const multiplicationTable = function(size) {
    let sizeArray = [];
    for (let i = 1; i <= size; i++){
      sizeArray.push(i);
    };
    let result =[sizeArray];
    let j = 2;
    while (j <= size){
      let a = sizeArray.map((e)=>e*j);
      result.push(a);
      j++
    };
    return result;
}  