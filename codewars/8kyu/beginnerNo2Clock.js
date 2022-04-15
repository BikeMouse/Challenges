function past(h, m, s){
    /*
    Clock shows h hours, m minutes and s seconds after midnight.
    Your task is to write a function which returns the time since
    midnight in milliseconds.
    23h 59m 59s
    23h * 60 = 1.380m * 60 = 82.800s * 1000 = 82.800.000ms
    59m * 60 = 3.540s * 1.000 = 3.540.000ms
    59s * 1000 = 59.000ms
    */
    let ms = (((h*60)*60)*1000)+((m*60)*1000)+(s*1000)
    return ms
  }
