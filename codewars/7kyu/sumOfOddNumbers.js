/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
	// Integer
  // sum of numbers, n equals row #
  // n = 2; -> 8 (3+5)
  // 1 (+2) 3 (+4) 7 (+6) 13 (+8) 21 ---- +2 between numbers
  // nth row n elements
  return n*n*n
}