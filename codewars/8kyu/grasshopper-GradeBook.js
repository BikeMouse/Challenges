/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	  'F'

*/

function getGrade (s1, s2, s3) {
    // Integer, always positive, never greater than 100
    // String to mark grade
    // 95 -> 'A'
    let a = (s1+s2+s3)/3;
    if ((a > 90) && (a <= 100)){
      return 'A';
    } else if ((a >= 80) && (a < 90)){
      return 'B';
    } else if ((a >= 70) && (a < 80)){
      return 'C';
    } else if ((a >= 60) && (a < 70)){
      return 'D';
    } else {
      return 'F';
    };
}