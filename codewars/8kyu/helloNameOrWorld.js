/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
*/

function hello(name) {
    if (!name){
      return 'Hello, World!'
    } else {
    let nameArray = name.toLowerCase().split('');
    let firstLetter = nameArray[0].toUpperCase();
    let rest = nameArray.slice(1).join('');
    return `Hello, ${firstLetter}${rest}!`;
      }
}