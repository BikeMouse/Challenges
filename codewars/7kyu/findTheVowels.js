/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word){
    //string, not empty
    // number of vowels in string (A,a,E,e,I,i,O,o,U,u) as array
    // super -> [2,4]
    let vowels = ['A','a','E','e','I','i','O','o','U','u','Y','y'];
    let wordArray = word.split('');
    let result = [];
    for (let i = 0; i < word.length; i++){
      for (let j = 0; j < vowels.length; j++){
        if (wordArray[i] == vowels[j]){
          result.push(i+1);
        }
      }
    }
    return result;
}