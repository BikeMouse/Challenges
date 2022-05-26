/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

function pillars(num_pill, dist, width) {
    // pillars >= 1, integer; distance between pillars 10 - 30 meters; width per pillar 10 - 50 cm
    // return distance between first and last pillar in cm, without the width of the width
    // 1 pillar; 10 meter 10centimeter , 0;
    // 1 pillar = 0 cm distance
    let distanceInCentimeter = dist*100;
    if (num_pill == 1){
      return 0;
    } else if (num_pill == 2){
      return distanceInCentimeter;
    } else {
      return (distanceInCentimeter*(num_pill-1))+(width*(num_pill-2));
    }
}