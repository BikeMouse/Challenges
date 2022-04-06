/*
Your task is to create a function that does four basic mathematical operations.
*/
function basicOp(operation, value1, value2){
    if (operation === "+"){
        return (value1+value2);
        } else if (operation === "-"){
          return (value1-value2);
        } else if (operation === "*"){
          return (value1*value2);
        } else {
          return (value1/value2);
        }
  }