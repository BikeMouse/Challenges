/*
Like his punches, Chuck NEVER needs more than one line of code.

Your task, to please Chuck, is to create a function that chains 4 methods on a SINGLE LINE! You can pass with multiple lines, but CHuck will pity you. Go big or go home. ONE LINE!!

Chuck expects his list of favourite items to be split, sorted, joined AND have any occurrences of the letters 'e' and 'a' removed - why, you ask? Well Nunchuks hasn't got the letters 'a' or 'e' in it has it?? Chuck says shut your mouth... and don't forget the capitals.

If anyone dares to provide Chuck with an empty string, an integer or an array, just return a description of their face once Chuck finds out: 'Broken!'

Go, go go!!!
*/

function onePunch(items){
    if ((items.length == 0) || (typeof(items) !== 'string')){
      return 'Broken!';
    } else {
      let temp = items.split(' ').sort().join(' ').split('').filter((e)=> e!== 'a' && e!=='e' && e!== 'A' && e!=='E').join('');
      return temp;
    };
}