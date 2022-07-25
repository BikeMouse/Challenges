/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/

function queueTime(customers, n) {
    if (customers.length == 0){
      return 0;
    } else if (n >= customers.length){
      return Math.max(...customers);
    } else {
      let tills = Array(n).fill(0);
      while (customers.length > 0 ){
        let shortestTill = Math.min(...tills);
        let indexOfShortest = tills.indexOf(shortestTill);
        tills[indexOfShortest] += customers.shift()
      }
      return Math.max(...tills)
    }
}