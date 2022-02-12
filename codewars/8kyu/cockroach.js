/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
*/

function cockroachSpeed(s) {
    // 1km = 1000 m
    // 1m = 100 cm
    // 1km = 1000*100
    // 1h = 60 min
    // 1 min 60 sec
    // 1h = 60*60
    let second = s/3600;
    let centi = 1000*100;
    return Math.floor(second*centi);
}