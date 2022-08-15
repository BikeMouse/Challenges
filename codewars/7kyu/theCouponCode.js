/*
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let current = new Date(currentDate);
    let expired = new Date(expirationDate);
    if (enteredCode === correctCode){
      return current <= expired ? true : false
    } else {
      return false;
    };
}