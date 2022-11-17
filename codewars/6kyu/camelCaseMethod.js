/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function () {
    let string = ''
    if (this === '') return '';
    else if (this.endsWith(' ')) string += this.slice(0, this.length - 1);
    else if (this.startsWith(' ')) string += this.slice(1, this.length);
    else string = this;
    let camel = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            camel += string[i].toUpperCase();
        } else if (string[i] === ' ') {
            camel += string[i + 1].toUpperCase();
            i++
        } else {
            camel += string[i];
        };
    };
    return camel;
}