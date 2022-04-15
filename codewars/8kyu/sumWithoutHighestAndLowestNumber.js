function sumArray(array) {
    if (Array.isArray(array)){
      let sorted = array.sort((a,b)=> a-b);
      let sum = 0;
      for (let i = 1; i < array.length - 1; i++){
        sum += array[i];
      }
      return sum
    } else {
      return 0
    }
  }