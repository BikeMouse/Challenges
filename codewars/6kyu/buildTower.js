/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
*/


function towerBuilder(nFloors) {
    let brick = '*';
    let space = ' ';
    let a = [];
    for (let i = 0; i < nFloors; i++){
      a.push(space.repeat(nFloors-1-i)+brick.repeat((2*i)+1)+space.repeat(nFloors-1-i))
    };
    return a
}