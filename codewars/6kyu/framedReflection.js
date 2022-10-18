/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.


*/

function mirror(text){
    let reversed = text.split(' ').map((e)=>e.split('').reverse().join(''));
    let longestWord = 0;
    reversed.forEach((e)=>{
      if (e.length > longestWord){
        longestWord = e.length;
      };
    });
    const frame = '*'.repeat(longestWord+4);
    reversed.push(frame);
    reversed.unshift(frame);
    let output = '';
    for (let i = 0; i < reversed.length; i++){
      if (i == 0){
        output += reversed[i]+'\n';
      } else if (i == reversed.length-1){
        output += reversed[i];
      } else {
        if (reversed[i].length == longestWord){
          output += '* '+reversed[i]+' *\n';
        } else {
          let space = longestWord-reversed[i].length;
          output +=  '* '+reversed[i]+' '.repeat(space)+' *\n';
        }
      };
    };
    return output;
}