/*
I've got a crazy mental illness. I dislike numbers a lot. 
But it's a little complicated: The number I'm afraid of depends on which 
day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) 
and an integer (number to be tested) so it tells the 
doctor if I'm afraid or not. (return a boolean)
*/

const AmIAfraid = function (day, num) {
    switch (day) {
        case 'Monday':
            if (num == 12) {
                return true
            } else {
                return false
            }
        case 'Tuesday':
            if (num > 95) {
                return true
            } else {
                return false
            }
        case 'Wednesday':
            if (num == 34) {
                return true
            } else {
                return false
            }
        case 'Thursday':
            if (num == 0) {
                return true
            } else {
                return false
            }
        case 'Friday':
            if (num % 2 == 0) {
                return true
            } else {
                return false
            }
        case 'Saturday':
            if (num == 56) {
                return true
            } else {
                return false
            }
        case 'Sunday':
            if ((num == 666) || (num == -666)) {
                return true
            } else {
                return false
            }
    }
}