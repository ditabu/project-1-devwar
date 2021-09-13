/*----- constants -----*/
const dealerDeck = document.getElementById('#dealerStack');
const playerDeck = document.getElementById('#playerStack');
const deckRef = {
    ace: {
        imagesURL: ['images/clubs/clubs-A.svg', 'images/diamonds/diamonds-A.svg', 'images/hearts/hearts-A.svg', 'images/spades/spades-A.svg'],
        lowerVal: ['clubsKing', 'clubsQueen', 'clubsJack', 'clubs10', 'clubs9', 'clubs8', 'clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamondsKing', 'diamondsQueen', 'diamondsJack', 'diamonds10', 'diamonds9', 'diamonds8', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'heartsKing', 'heartsQueen', 'heartsJack', 'hearts10', 'hearts9', 'hearts8', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spadesKing', 'spadesQueen', 'spadesJack', 'spades10', 'spades9', 'spades8', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    king: { 
        imagesURL: ['images/clubs/clubs-K.svg', 'images/diamonds/diamonds-K.svg', 'images/hearts/hearts-K.svg', 'images/spades/spades-K.svg'],
        lowerVal: ['clubsQueen', 'clubsJack', 'clubs10', 'clubs9', 'clubs8', 'clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamondsQueen', 'diamondsJack', 'diamonds10', 'diamonds9', 'diamonds8', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'heartsQueen', 'heartsJack', 'hearts10', 'hearts9', 'hearts8', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spadesQueen', 'spadesJack', 'spades10', 'spades9', 'spades8', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    queen: {
        imagesURL: ['images/clubs/clubs-Q.svg', 'images/diamonds/diamonds-Q.svg', 'images/hearts/hearts-Q.svg', 'images/spades/spades-Q.svg'],
        lowerVal: ['clubsJack', 'clubs10', 'clubs9', 'clubs8', 'clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamondsJack', 'diamonds10', 'diamonds9', 'diamonds8', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'heartsJack', 'hearts10', 'hearts9', 'hearts8', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spadesJack', 'spades10', 'spades9', 'spades8', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    jack: {
        imagesURL: ['images/clubs/clubs-J.svg', 'images/diamonds/diamonds-J.svg', 'images/hearts/hearts-J.svg', 'images/spades/spades-J.svg'],
        lowerVal: ['clubs10', 'clubs9', 'clubs8', 'clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamonds10', 'diamonds9', 'diamonds8', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts10', 'hearts9', 'hearts8', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spades10', 'spades9', 'spades8', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    ten: {
        imagesURL: ['images/clubs/clubs-r10.svg', 'images/diamonds/diamonds-r10.svg', 'images/hearts/hearts-r10.svg', 'images/spades/spades-r10.svg'],
        lowerVal: ['clubs9', 'clubs8', 'clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamonds9', 'diamonds8', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts9', 'hearts8', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spades9', 'spades8', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    nine: {
        imagesURL: ['images/clubs/clubs-r09.svg', 'images/diamonds/diamonds-r09.svg', 'images/hearts/hearts-r09.svg', 'images/spades/spades-r09.svg'],
        lowerVal: ['clubs8', 'clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamonds8', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts8', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spades8', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    eight: {
        imagesURL: ['images/clubs/clubs-r08.svg', 'images/diamonds/diamonds-r08.svg', 'images/hearts/hearts-r08.svg', 'images/spades/spades-r08.svg'],
        lowerVal: ['clubs7', 'clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamonds7', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts7', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spades7', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    seven: {
        imagesURL: ['images/clubs/clubs-r07.svg', 'images/diamonds/diamonds-r07.svg', 'images/hearts/hearts-r07.svg', 'images/spades/spades-r07.svg'],
        lowerVal: ['clubs6', 'clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamonds6', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts6', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spades6', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    six: {
        imagesURL: ['images/clubs/clubs-r06.svg', 'images/diamonds/diamonds-r06.svg', 'images/hearts/hearts-r06.svg', 'images/spades/spades-r06.svg'],
        lowerVal: ['clubs5', 'clubs4', 'clubs3', 'clubs2', 'diamonds5', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts5', 'hearts4', 'hearts3', 'hearts2', 'spades5', 'spades4', 'spades3', 'spades2']
    },
    five: {
        imagesURL: ['images/clubs/clubs-r05.svg', 'images/diamonds/diamonds-r05.svg', 'images/hearts/hearts-r05.svg', 'images/spades/spades-r05.svg'],
        lowerVal: ['clubs4', 'clubs3', 'clubs2', 'diamonds4', 'diamonds3', 'diamonds2', 'hearts4', 'hearts3', 'hearts2', 'spades4', 'spades3', 'spades2']
    },
    four: {
        imagesURL: ['images/clubs/clubs-r04.svg', 'images/diamonds/diamonds-r04.svg', 'images/hearts/hearts-r04.svg', 'images/spades/spades-r04.svg'],
        lowerVal: ['clubs3', 'clubs2', 'diamonds3', 'diamonds2', 'hearts3', 'hearts2', 'spades3', 'spades2']
    },
    three: {
        imagesURL: ['images/clubs/clubs-r03.svg', 'images/diamonds/diamonds-r03.svg', 'images/hearts/hearts-r03.svg', 'images/spades/spades-r03.svg'],
        lowerVal: ['clubs2', 'diamonds2', 'hearts2', 'spades2']
    },
    two: {
        imagesURL: ['images/clubs/clubs-r02.svg', 'images/diamonds/diamonds-r02.svg', 'images/hearts/hearts-r02.svg', 'images/spades/spades-r02.svg']
    },
}
console.log(deckRef);

/*----- app's state (variables) -----*/

let splitDeck;
let cardsWon;
let faceCards;
let winner;
let war;

/*----- cached element references -----*/
const splitDeckEls = {
    dealer: document.querySelector('#dealerStack > img'),
    player: document.querySelector('#playerStack > img')

}
const cardsWonEls = {
    dealer: document.querySelector('#dealerWon'),
    player: document.querySelector('#playerWon')
}

const faceCardEls = {
    dealer: {
        imagesEl: document.querySelector('#dealerFaceCard > img')
    },
    player: {
        imagesEl: document.querySelector('#playerFaceCard > img')
    }
} 

/*----- event listeners -----*/
document.querySelector('button')
    .addEventListener('click', dealCards);

document.querySelector('#playerStack')   
    .addEventListener('click', displayCard);

    
/*----- functions -----*/
init()

function init(){
    cardsWon = {
        dealer: 0,
        player: 0,
    }
   
    faceCards = {
        dealer: 'clubsKing',
        player: 'clubsKing'
    }

    winner = null;
    war = null;

    render()
}

function render(){

     
    for(let cardWon in cardsWon){
        console.log(cardWon, '< key name');
    cardsWonEls[cardWon].textContent = cardsWon[cardWon];
    }

    for(let faceCard in faceCards){
        console.log(faceCard, 'clubsKing');
        faceCardEls[faceCard].imagesEl.src = deckRef[faceCards[faceCard]].imagesUrl
    }
}

function dealCards(){
    console.log('Draw Card'); 
} 

function displayCard(){
    console.log('Card Drawn');
}

// if (dealer > player) {

// }else if (player > dealer)






// faceCards.dealer = getRandomCard();
// faceCards.player = getRandomCard();
    
// const randomIdx = Math.floor(Math.random() * 26);
//     return choice[randomIdx]

  

