/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


*/

function squareArea(A){
    // integer or float
    // area of red square, rounded to two decimals -> toFixed(2)
    // 2 -> 1.62
    // C = 2pi*r
    // r = C/2pi
    // areaSquare =  a * a;
    let circumverence = 4*A;
    let d = circumverence/Math.PI;
    let r = d/2;
    let area = Math.pow(r, 2);
    return Number(area.toFixed(2));
}