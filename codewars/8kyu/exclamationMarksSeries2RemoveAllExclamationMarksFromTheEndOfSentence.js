/*
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(string) {
    while (string.endsWith('!')) {
        let index = string.lastIndexOf('!');
        string = string.slice(0, index);
    };
    return string;
}