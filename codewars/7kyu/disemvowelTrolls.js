/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this y isn't considered a vowel.
*/

function disemvowel(str) {
    // string
    // string without vowels
    // 'that pug' -> 'tht pg'
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let array = str.split('');
    let result = [];
    array.forEach((element)=>{
      if (!vowels.includes(element) == true){
        result.push(element);
      }
    })
    return result.join('');
}