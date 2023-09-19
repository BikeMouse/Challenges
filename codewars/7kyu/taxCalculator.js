/*
Write a function to calculate compound tax using the following table:
For $10 and under, the tax rate should be 10%.
For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%.
Tack on an additional 3% for the portion of the total above $30.
Return 0 for invalid input(anything that's not a positive real number).
Examples:
An input of 10, should return 1 (1 is 10% of 10)
An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)
* Note that the returned value should be rounded to the nearest penny.

*/

function taxCalculator(total) {
    let a
    let b
    let c
    let d
    if ((total <= 0) || (!total) || (typeof total == 'string')) return 0
    if (total <= 10) {
        a = (total / 100) * 10
        return Math.round(a * 100) / 100
    } else if (total <= 20) {
        a = (10 / 100) * 10
        total -= 10
        b = a + ((total / 100) * 7)
        return Math.round(b * 100) / 100
    } else if (total <= 30) {
        a = (10 / 100) * 10
        b = (10 / 100) * 7
        total -= 20
        c = a + b + ((total / 100) * 5)
        return Math.round(c * 100) / 100
    } else {
        a = (10 / 100) * 10
        b = (10 / 100) * 7
        c = (10 / 100) * 5
        total -= 30
        d = a + b + c + ((total / 100) * 3)
        return Math.round(d * 100) / 100
    }
}