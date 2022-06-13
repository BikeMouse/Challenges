/*
Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
*/

function to_nato(words) {
	let array = words.toLowerCase().split('');
  let result = [];
  for (let i = 0; i < array.length; i++){
      if (array[i] != ' '){
        if (NATO[array[i]]){
          result.push(NATO[array[i]]);
        } else {
          result.push(array[i]);
        }
    }
  }
  return result.join(' ');
}