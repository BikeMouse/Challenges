/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


*/

function friend(friends){
    // String (names) array
    // String (names) array, filtered. Only four letter names are friends
    // ['Ryan','Kieran'] -> ['Ryan']
    // Loop through the array and check each element for its length
    let result = [];
    friends.forEach((element)=>{
      if (element.length == 4){
        result.push(element);
      }
    });
    return result
}