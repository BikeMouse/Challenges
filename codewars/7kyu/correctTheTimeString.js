/*
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

*/

function timeCorrect(timestring) {
    if (timestring === null) return null;
    if (timestring === '') return '';
    if (!timestring.includes(':')) return null;
    let hours = timestring.slice(0, 2);
    let minutes = timestring.slice(3, 5);
    let seconds = timestring.slice(6, timestring.length);
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= 'a' && hours[i] <= 'z') return null
    };
    for (let i = 0; i < minutes.length; i++) {
        if (minutes[i] >= 'a' && minutes[i] <= 'z') return null
    };
    for (let i = 0; i < seconds.length; i++) {
        if (seconds[i] >= 'a' && seconds[i] <= 'z') return null
    };
    let time = [Number(hours), Number(minutes), Number(seconds)].reverse();
    for (let i = 0; i < time.length; i++) {
        if (i === 0 && time[i] >= 60) {
            time[i] = time[i] - 60;
            time[i + 1]++;
        } else if (i === 1 && time[i] >= 60) {
            time[i] = time[i] - 60;
            time[i + 1]++;
        } if (i === 2 && time[i] >= 24) {
            while (time[i] >= 24) {
                time[i] = time[i] - 24;
            };
        };
    };
    let clean = time.reverse();
    let output = [];
    clean.forEach((e) => {
        if (e < 10) {
            output.push(`0${e}`);
        } else {
            output.push(`${e}`)
        };
    });
    return output.join(':');
}