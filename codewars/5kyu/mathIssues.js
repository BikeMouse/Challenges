/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

Math.round = function (number) {
    let c = number.toString().split('');
    if (c.length === 1) return number;
    let first;
    let second;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === '.') {
            first = Number(c.slice(0, i).join(''));
            second = Number(c[i + 1]);
            return number === 0 ? 0 : second >= 5 ? first + 1 : first;
        };
    };
};
Math.ceil = function (number) {
    let a = number.toString().split('');
    if (a.length === 1) return number;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '.') {
            return Number(a.slice(0, i).join('')) + 1;
        };
    };
};
Math.floor = function (number) {
    let b = number.toString().split('');
    if (b.length === 1) return number;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === '.') {
            return Number(b.slice(0, i).join(''));
        };
    };
};