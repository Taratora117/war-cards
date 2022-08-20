const SUITS = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const VALUES = {
  '2': 1,
  '3': 2,
  '4': 3,
  '5': 4,
  '6': 5,
  '7': 6,
  '8': 7,
  '9': 8,
  '10': 9,
  'Jack': 10,
  'Queen': 11,
  'King': 12,
  'Ace': 13
};

class Game {
  #history = [];

  #newDeck() {
    const deck = [];
    SUITS.forEach((suit) => {
      Object.keys(VALUES).forEach((value) => {
        deck.push({value: value, suit: suit, strength: VALUES[value]});
      });
    });
    return [...deck];
  }

  #shuffle(deck) {
    for (let i = 0; i < deck.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return [...deck];
  }

  

  play() {
    //init
    const shuffledDeck = this.#shuffle(this.#newDeck());
    const humanDeck = shuffledDeck.slice(0, 26);
    const aiDeck = shuffledDeck.slice(26, 52);
    const cards = {human: null, ai: null, pot: []};
    let war = false;

    // loop
    while ((humanDeck.length > 0 && aiDeck.length > 0) || war) {
      // draw card
      cards.human = humanDeck.shift();
      cards.ai = aiDeck.shift();

      // if cards run out during war
      if (!cards.human) {
        cards.human = aiDeck.shift();
      } else if (!cards.ai) {
        cards.ai = humanDeck.shift();
      }

      cards.pot.push(cards.human, cards.ai);

      if (war && (cards.pot.length === 2 || (cards.pot.length - 2) % 6 !== 0)) continue;

      // evaluate cards
      if (cards.human.strength > cards.ai.strength) {
        war = false;
        humanDeck.push(...this.#shuffle(cards.pot));
      } else if (cards.human.strength < cards.ai.strength) {
        war = false;
        aiDeck.push(...this.#shuffle(cards.pot));
      } else {
        war = true
        continue;
      }
      // reset
      cards.human = null;
      cards.ai = null;
      cards.pot = [];
    }
    return `you ${humanDeck.length? 'win': 'lose'}`; // return this.#history;
  }

  record(turn) {
    this.#history.push(turn);
  }
}