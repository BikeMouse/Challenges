function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++){
      let result = (i*x)
      z.push(result)
    }
    return z;
  }