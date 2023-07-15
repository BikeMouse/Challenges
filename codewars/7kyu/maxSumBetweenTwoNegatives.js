/*
Task
You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, C++, JavaScript, Java, CoffeeScript and COBOL, Nothing for Haskell, None for Rust.

Example 1
[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

Example 2
[4, -1, -2] -> 0
     ^   ^
There is nothing between -1 and -2, so return 0.


*/

function maxSumBetweenTwoNegatives(a) {
    if ((a.length == 0) || (a.length == 1)) return -1
    if (a.filter((e) => e < 0).length == 1) return -1
    if (a.every((e) => e >= 0)) return -1
    let b = []
    let c = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] < 0) {
                    b.push(c)
                    c = 0
                    break
                } else {
                    c += a[j]
                }
            }
        }
    }
    return b.sort((y, z) => z - y)[0]
}