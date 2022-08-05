/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
*/

function titleCase(title, minorWords) {
    let result = [];
    if (!title){
      return '';
    } else if (!minorWords){
      let a = [];
      title.split(' ').forEach((e)=>{
        a.push(e.toLowerCase());
      });
      a.forEach((e,i)=>{
        result.push(e[0].toUpperCase()+e.slice(1).toLowerCase());
        });
      return result.join(' ');
    } else {
      let a = [];
      title.split(' ').forEach((e)=>{
        a.push(e.toLowerCase());
      });
      let b = [];
      minorWords.split(' ').forEach((e)=>{
        b.push(e.toLowerCase());
      });
      a.forEach((e,i)=>{
        if ((!b.includes(e))||(i == 0)){
          result.push(e[0].toUpperCase()+e.slice(1).toLowerCase());
        } else if ((b.includes(e)) && (i > 0)){
          result.push(e.toLowerCase());
        }
      });
      return result.join(' ')
    }
}