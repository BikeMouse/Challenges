/* Wolves have been reintroduced to Great Britain. 
You are a sheep farmer, and are now plagued by wolves which
pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at 
the end of the array:*/

function warnTheSheep(queue) {
  /*
  [sheep sheep wolf sheep] -> warning to sheep #1
     3     2          1
     0     1    2     3
  [sheep sheep sheep wolf] -> tell wolf to leave
  iterating through the array.
  stop at wolf.
  warn sheep after wolf.
  */
  const wolf = queue.indexOf("wolf");
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep"
  };
  let warnedSheep = (queue.length - 1) - wolf;
  return "Oi! Sheep number " + warnedSheep + "! You are about to be eaten by a wolf!"
}