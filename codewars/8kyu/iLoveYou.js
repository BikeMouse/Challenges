function howMuchILoveYou(nbPetals) {
    /* 
    Your goal is to determine which phrase
    the girls would say for a flower of a
    given number of petals, where nb_petals > 0.
    */
    const love = "I love you";
    const little = "a little";
    const lot = "a lot";
    const passion = "passionately";
    const mad = "madly";
    const not = "not at all";
  
    if(nbPetals%6 === 1/*1,7,13,19,+6*/){
      return love
    } else if(nbPetals%6 === 2/*2,8,14,20,+6*/){
      return little
    } else if(nbPetals%6 === 3/*3,9,15,21,+6*/){
      return lot
    } else if(nbPetals%6 === 4/*4,10,16,22,+6*/){
      return passion
    } else if(nbPetals%6 === 5 /*5,11,17,23,+3*/){
      return mad
    } else{
      return not
    }
}