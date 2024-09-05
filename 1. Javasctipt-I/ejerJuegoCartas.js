const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade'){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}



