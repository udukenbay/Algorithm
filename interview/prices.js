/*--------------------------start--------------------------*/

/////Here is the price list of Gold in a shop during a festival of 9 days. I have to buy and resell it for the best profit.
//Find the best day to buy and the best day to sell?
///Input:
//            0 1 2 3 4 5 6 7 8   // Arrray Index
//            1 2 3 4 5 6 7 8 9   // Based on Days
let prices = [7,1,5,3,6,4,1,2,3];
//              ^     ^
//when to buy: Buy > Sell         // 6-1 = 5 Euro profit
/*
@MoreExplanation
You can't sell on first day, because you have no gold in your hand.
You can buy on day 2 (ArrayIndex = 1, price = 1) and sell on day 5 (ArrayIndex = 4, price = 6), profit = 5
*/

function getBestSellingDay(prices) {
  console.log(prices);
  let buyDay = Math.min(...prices);
  console.log(buyDay);

  prices.shift();
  console.log(prices);
  let sellDay = Math.max(...prices);
  console.log(sellDay);

  let profit = sellDay - buyDay;

  return profit;
}

console.log(getBestSellingDay(prices));


/*---------------------------end---------------------------*/
