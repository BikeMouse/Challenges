/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.


*/

function stringClean(s){
    // string, numbers, special chatacters and numbers
    // return string bar numbers
    // "great 5doing!" -> "great doing"
    // loop through and remove number
    let array = s.split('');
    let nums = ['0','1','2','3','4','5','6','7','8','9']
    let result = [];
    if (s == ""){
      return ""
    } else {
      array.forEach((element)=>{
        if (nums.includes(element)==false){
          result.push(element);
          }
      })
    }
    return result.join('');
}