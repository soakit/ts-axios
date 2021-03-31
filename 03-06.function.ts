interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];

    createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            const pickedCard = Math.floor(Math.random() * 52);
            const pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}

const cardPicker = deck.createCardPicker();
const pickCard = cardPicker();

console.log('card: ' + pickCard.card + ' of ' + pickCard.suit)
// ----------------------------
// this
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
    type: string

    onClickBad(this: Handler, e: Event) {
        this.type = e.type
    }

    onClickGood = (e: Event) => {
        this.type = e.type
    }
}

let h = new Handler()

let uiElement: UIElement = {
    addClickListener() {
    }
}

// uiElement.addClickListener(h.onClickBad) // error!
uiElement.addClickListener(h.onClickGood) // error!

// ----------------------------
// 函数重载
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCardFn(x: {suit: string; card: number }[]): number
function pickCardFn(x: number): {suit: string; card: number }

function pickCardFn(x): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]
let pickedCard1 = myDeck[pickCardFn(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCardFn(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)