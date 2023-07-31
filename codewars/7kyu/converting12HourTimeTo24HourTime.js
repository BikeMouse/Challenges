/*
Converting a normal (12-hour) time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

You will have to define a function named "to24hourtime", and you will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.
*/

function to24hourtime(hour, minute, period) {
    let output = ''
    if (period == 'am') {
        if (hour < 10) {
            output += `0${hour}`
        } else if (hour <= 11 && hour > 9) {
            output += `${hour}`
        } else {
            output += '00'
        }
    } else {
        if (hour == 12) {
            output += `12`
        } else {
            output += `${hour + 12}`
        }
    }
    if (minute >= 10) {
        output += `${minute}`
    } else {
        output += `0${minute}`
    }
    return output
}