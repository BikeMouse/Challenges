/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
    let deckOfCards = card.split('')
    if (deckOfCards[deckOfCards.length-1] =='♣'){
        return 'clubs';
      } else if (deckOfCards[deckOfCards.length-1] =='♦'){
        return 'diamonds';
      } else if (deckOfCards[deckOfCards.length-1] =='♥'){
        return 'hearts';
      } else {
        return 'spades';
      }
}