/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

function solution(value) {
    let num = value.toString();
    switch (num.length) {
        case 1:
            return `Value is 0000${num}`;
            break;
        case 2:
            return `Value is 000${num}`;
            break;
        case 3:
            return `Value is 00${num}`;
            break;
        case 4:
            return `Value is 0${num}`;
            break;
        case 5:
            return `Value is ${num}`;
            break;
    };
}