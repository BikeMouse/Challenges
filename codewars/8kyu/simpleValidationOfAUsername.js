/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
    let name = username.split('');
    let allowed = 'abcdefghijklmnopqrstuvwxyz_1234567890'.split('');
    if ((name.length >= 4) && (name.length <= 16)){
      let result = [];
      name.forEach((e)=>{
        if (allowed.includes(e)){
          result.push(true);
        } else {
          result.push(false);
        }
      });
      return result.includes(false) ? false : true
    } else {
      return false;
    };
}