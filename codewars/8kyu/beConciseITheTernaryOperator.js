/*
Be Concise I - The Ternary Operator
You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

If the age is 12 or lower, it return "You're a(n) kid"
If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
If the age is 65 or above, it return "You're a(n) elderly"
Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
*/

let describeAge=a=>{
  let s="You're a(n)"
  return a>=65?`${s} elderly`:(a>=18&&a<=65)?`${s} adult`:(a>= 13&&a<=17)?`${s} teenager`:`${s} kid`
}