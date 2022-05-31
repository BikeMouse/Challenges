/*
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]
*/

function interest(P,r,n) {
    // P = money owed, integer, positive, whole
    // r = rate of interest, positive, float
    // n = number of years, integer, whole
    // return array total owed money under simple and compound interest
    // P = 100, r = 0.1, n = 2 -> [120,121]
    let compound = P*Math.pow(1+r,n);
    let simple = P * r * n + P; 
    return [Math.round(simple),Math.round(compound)]
}