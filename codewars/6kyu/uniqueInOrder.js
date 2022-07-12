/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


*/

var uniqueInOrder=function(iterable){
    let a = [...iterable];
    let result = [];
    for (let i = 0 ; i < a.length ; i++){
      if (a[i] != a[i+1]){
        result.push(a[i]);
      }
    };
    return result;
}