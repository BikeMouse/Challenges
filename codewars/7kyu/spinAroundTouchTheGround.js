/*
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left".

*/

function spinAround(turns) {
    if (turns.length == 0) return 0
    let right = 0
    let left = 0
    let num
    for (let i = 0; i < turns.length; i++) {
        if (turns[i] == 'right') {
            right += 1
        } else {
            left += 1
        }
    }
    if (right > left) {
        num = right - left
        num = num * 90
        num = Math.floor(num / 360)
        return num
    } else {
        num = left - right
        num = num * 90
        num = Math.floor(num / 360)
        return num
    }
}