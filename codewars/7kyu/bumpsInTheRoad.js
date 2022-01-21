/*

*/

function bump(x) {
    let routeSafe = [...x].filter((e) => e == 'n');
    return routeSafe.length <= 15 ? 'Woohoo!' : 'Car Dead'
}