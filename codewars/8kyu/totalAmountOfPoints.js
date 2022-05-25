/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/

function points(games) {
    // scores -> 4:0; 0:3 etc; if x > y 3 points;  x < y 0 points; x = y 1 point
    // return overall points
    // ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30
    let points = 0;
    for (let i = 0; i < games.length; i++){
      if(games[i][0] > games[i][2]){
          points = points +3;
      } else if (games[i][0] == games[i][2]){
          points = points +1;
      } else {
          points = points;
      }
    }
    return points
}