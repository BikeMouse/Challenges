/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
*/

function search(budget, prices) {
    // budget - whole numbers, prices (array) - whole numbers
    // return the prices in budget, needs to be a string, sorted
    // 10; [20,30,10,50,60] -> 10
    // loop, elements to budget and put into output string
    prices.sort((a,b)=>a-b);
    let filter = prices.filter((e)=> e <= budget);
    return filter.join(',')
}