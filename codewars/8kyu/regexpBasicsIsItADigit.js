/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

*/

String.prototype.digit = function () {
    if (this.length !== 1) return false
    for (let i = 0; i < this.length; i++) {
        if (this[i] >= '0' && this[i] <= '9') return true
    }
    return false
};