/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

*/

function zero(op) {
    if (op == undefined){
     return 0;
   }
   return op(0);
 };
 function one(op) {
    if (op == undefined){
     return 1;
   }
   return op(1);
 };
 function two(op) {
    if (op == undefined){
     return 2;
   }
   return op(2);
 };
 function three(op) {
    if (op == undefined){
     return 3;
   }
   return op(3);
 };
 function four(op) {
    if (op == undefined){
     return 4;
   }
   return op(4);
 };
 function five(op){
   if (op == undefined){
     return 5;
   }
   return op(5);
 };
 function six(op) {
    if (op == undefined){
     return 6;
   }
   return op(6);
 };
 function seven(op) {
   if (op == undefined){
     return 7;
   }
   return op(7);
 };
 function eight(op) {
    if (op == undefined){
     return 8;
   }
   return op(8);
 };
 function nine(op) {
    if (op == undefined){
     return 9;
   }
   return op(9);
 };
 
 function plus(x) {
   return function(y){
     return x+y;
   }
 };
 function minus(x) {
   return function(y){
     return y-x;
   }
 };
 function times(x) {
   return function(y){
     return x*y;
   };
 };
 function dividedBy(x) {
   return function(y){
     return Math.floor(y/x);
   }
 };