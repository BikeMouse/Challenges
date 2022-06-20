/*
How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is: How many 8-inch pizzas "fit" in a 16-incher?

The answer, as it turns out, is exactly four 8-inch pizzas. 
*/

function howManyPizzas(n) {
    // pizza inch size as integer, slices are 8inch (1 8inch pizza = 8 slices)
    // string 'pizzas: n, slices: n'
    // how_many_pizzas(16) -> "pizzas: 4, slices: 0"
    let pizzaN = Math.PI*((n/2)**2);
    let pizza8 = Math.PI * (4**2);
    let whole = Math.floor(pizzaN/pizza8);
    let slice = Math.round((((pizzaN/pizza8)%1)*8));
    return `pizzas: ${whole}, slices: ${slice}`;
}