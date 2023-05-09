/*
Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

So what to do?

Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

Easy example:
Input: "gdfgdf234dg54gf*23oP42"
Output: "54929268" (because 23454*2342=54929268)

*/

function calculateString(st) {
    let cleaned = '';
    for (let i = 0; i < st.length; i++) {
        if (st[i] >= '0' && st[i] <= '9') {
            cleaned += st[i];
        } else if ((st[i] == '+') || (st[i] == '-') || (st[i] == '*') || (st[i] == '/')) {
            cleaned += st[i];
        } else if (st[i] == '.') {
            cleaned += st[i];
        }
    };
    let a = '';
    let b = '';
    let operator = '';
    for (let i = 0; i < cleaned.length; i++) {
        if ((cleaned[i] == '+') || (cleaned[i] == '-') || (cleaned[i] == '*') || (cleaned[i] == '/')) {
            a = Number(cleaned.slice(0, i));
            b = Number(cleaned.slice(i + 1));
            operator = cleaned[i];
        };
    };
    switch (operator) {
        case '+':
            return (Math.round(a + b)).toString();
            break;
        case '-':
            return (Math.round(a - b)).toString();
            break;
        case '*':
            return (Math.round(a * b)).toString();
            break;
        case '/':
            return (Math.round(a / b)).toString();
            break;
    };
}