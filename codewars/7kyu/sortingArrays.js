/*
Sorting an array of positive integers
Background
You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

Task
Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

Extension
If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.


*/

Array.prototype.sort = function () {
    let arr = this;
    let output = [...arr];
    for (let i = 0; i < output.length; i++) {
        let a;
        let b;
        if (output[i] > output[i + 1]) {
            a = output[i];
            b = output[i + 1];
            output[i] = b;
            output[i + 1] = a;
            i = -1
        }
    }
    return output;
}