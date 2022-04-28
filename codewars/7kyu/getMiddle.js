function getMiddle(s){
    /*
    turning string to an array
    check array.length
    if array.length % 3 === 0 return element in the middle
    if array.length % 2 === 0 return middle 2 elements in the middle
    */
    let bigPug = s.split('');
    if (bigPug.length % 2 === 0){
      return bigPug[(bigPug.length/2)-1] + bigPug[(bigPug.length/2)] 
    } else {
      return bigPug[(bigPug.length-1)/2]
    }
  }