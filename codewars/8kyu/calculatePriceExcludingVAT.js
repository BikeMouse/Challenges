/*
Write a function that calculates the original product price, without VAT.
*/

function excludingVatPrice(price){
    if (price != null){
      let rawPrice = (price/115)*100;
      return Number(rawPrice.toFixed(2));
    } else return -1
  }