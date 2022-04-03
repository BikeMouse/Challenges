function pipeFix(numbers){
    /*
      Filling gaps
      in order
      every number will be greater than the previous
      Example : [1,5,8] -> [1,2,3,4,5,6,7,8]
      numbers[0]->start
      numbers[numbers.length-1]->end
      numbers.push('')
    */
    let sortedArray = []
    for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
      sortedArray.push(i);
    } return sortedArray
  }