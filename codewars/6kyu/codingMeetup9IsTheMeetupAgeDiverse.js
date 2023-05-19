/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.
*/

function isAgeDiverse(list) {
    let ages = [];
    let groups = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian'];
    for (let i = 0; i < list.length; i++) {
        ages.push(list[i].age);
    };
    ages = ages.sort((a, b) => a - b);
    let check = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 10 && ages[i] < 20) check.push('teens');
        if (ages[i] >= 20 && ages[i] < 30) check.push('twenties');
        if (ages[i] >= 30 && ages[i] < 40) check.push('thirties');
        if (ages[i] >= 40 && ages[i] < 50) check.push('forties');
        if (ages[i] >= 50 && ages[i] < 60) check.push('fifties');
        if (ages[i] >= 60 && ages[i] < 70) check.push('sixties');
        if (ages[i] >= 70 && ages[i] < 80) check.push('seventies');
        if (ages[i] >= 80 && ages[i] < 90) check.push('eighties');
        if (ages[i] >= 90 && ages[i] < 100) check.push('nineties');
        if (ages[i] >= 100) check.push('centenarian');
    };
    for (let i = 0; i < groups.length; i++) {
        if (!check.includes(groups[i])) return false;
    };
    return true;
}