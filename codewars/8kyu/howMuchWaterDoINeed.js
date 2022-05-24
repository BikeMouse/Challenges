/*
My washing machine uses water amount of water to wash load amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load and clothes.

My washing machine is an old model that can only handle double the amount of load. If the amount of clothes is more than 2 times the standard amount of load, return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load. If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.
*/

function howMuchWater(water, load, clothes){
    // 3 arguments: water,load, clothes, all integers, all positive
    // return floats, rounded to the nearest 2 decimals
    // load 10, water 5, clothes 14 -> 5*1.1^(14-10)
    // if clothes are double the load - > too much clothes
    // if clothes less than load - > not enough clothes
    if (clothes < load){
      return 'Not enough clothes';
    } else if (clothes > 2*load){
      return 'Too much clothes';
    } else {
      return Number((water*Math.pow(1.1,(clothes-load))).toFixed(2))
    }
}