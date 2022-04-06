const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    /*
    Destination 50 miles away
    Car runs 25 miles per gallon
    2 gallons left (1 gallon 25 // 2 gallon 50)
    Is it possible ? yay : nay
    */
    let distanceInTank = fuelLeft*mpg;
    if (distanceInTank >= distanceToPump){
      return true;
    } else {
      return false;
    }
  };