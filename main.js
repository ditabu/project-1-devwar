/*----- constants -----*/
const dealer = document.querySelector('DEALER');
const player = document.querySelector('PLAYER');
// Grab all the documents by all the Ids I'll need 

// Then, change the source of images to hard code in 1 card. Taking out image card in the div. Change background image in css

// const deckRef = {
//     suits: ['clubs', 'diamonds', 'hearts', 'spades'],
//     faceVal: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// }

// console.log(deckRef);

const deckImages = {
    ace: {
        imagesURL: ['card-deck-css/images/clubs/clubs-A.svg', 'card-deck-css/images/diamonds/diamonds-A.svg', 'card-deck-css/images/hearts/hearts-A.svg', 'card-deck-css/images/spades/spades-A.svg'],   
    },
    king: { 
        imagesURL: ['card-deck-css/images/clubs/clubs-K.svg', 'card-deck-css/images/diamonds/diamonds-K.svg', 'card-deck-css/images/hearts/hearts-K.svg', 'card-deck-css/images/spades/spades-K.svg'],
    },
    queen: {
        imagesURL: ['card-deck-css/images/clubs/clubs-Q.svg', 'card-deck-css/images/diamonds/diamonds-Q.svg', 'card-deck-css/images/hearts/hearts-Q.svg', 'card-deck-css/images/spades/spades-Q.svg'],
    },
    jack: {
        imagesURL: ['card-deck-css/images/clubs/clubs-J.svg', 'card-deck-css/images/diamonds/diamonds-J.svg', 'card-deck-css/images/hearts/hearts-J.svg', 'card-deck-css/images/spades/spades-J.svg'],     
    },
    ten: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r10.svg', 'card-deck-css/images/diamonds/diamonds-r10.svg', 'card-deck-css/images/hearts/hearts-r10.svg', 'card-deck-css/images/spades/spades-r10.svg'],
    },
    nine: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r09.svg', 'card-deck-css/images/diamonds/diamonds-r09.svg', 'card-deck-css/images/hearts/hearts-r09.svg', 'card-deck-css/images/spades/spades-r09.svg'],
    },
    eight: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r08.svg', 'card-deck-css/images/diamonds/diamonds-r08.svg', 'card-deck-css/images/hearts/hearts-r08.svg', 'card-deck-css/images/spades/spades-r08.svg'],
    },
    seven: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r07.svg', 'card-deck-css/images/diamonds/diamonds-r07.svg', 'card-deck-css/images/hearts/hearts-r07.svg', 'card-deck-css/images/spades/spades-r07.svg'],
    },
    six: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r06.svg', 'card-deck-css/images/diamonds/diamonds-r06.svg', 'card-deck-css/images/hearts/hearts-r06.svg', 'card-deck-css/images/spades/spades-r06.svg'],
    },
    five: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r05.svg', 'card-deck-css/images/diamonds/diamonds-r05.svg', 'card-deck-css/images/hearts/hearts-r05.svg', 'card-deck-css/images/spades/spades-r05.svg']
    },
    four: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r04.svg', 'card-deck-css/images/diamonds/diamonds-r04.svg', 'card-deck-css/images/hearts/hearts-r04.svg', 'card-deck-css/images/spades/spades-r04.svg'],
    },
    three: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r03.svg', 'card-deck-css/images/diamonds/diamonds-r03.svg', 'card-deck-css/images/hearts/hearts-r03.svg', 'card-deck-css/images/spades/spades-r03.svg'],
    },
    two: {
        imagesURL: ['card-deck-css/images/clubs/clubs-r02.svg', 'card-deck-css/images/diamonds/diamonds-r02.svg', 'card-deck-css/images/hearts/hearts-r02.svg', 'card-deck-css/images/spades/spades-r02.svg']
    },
}
console.log(deckImages);


/*----- app's state (variables) -----*/

let deck = []
let deal; // button will hide when clicked
let splitDeck; //  deck split into 26 cards for dealer and player
let cardsWon; // will change every time player or dealer wins war
let faceCards; // will change when you click on top of stacked card deck
let winner; // = null until end of game
let war; // null until war is declared
let dealAgain; // to replay game


/*----- cached element references -----*/
const dealerDeckEls = {
    dealer: document.querySelector('#dealerStack'),
    player: document.querySelector('#playerStack')
}
const faceCardEls = {
    dealer: {
        imagesEl: document.querySelector('#dealerFaceCard > img')
    },    
    player:  {
        imagesEl: document.querySelector('#playerFaceCard > img')
    }    
}
const cardsWonEls = {
    dealer: document.querySelector('#dealerWon'),
    player: document.querySelector('#playerWon')
}
const splitDeckEls = {
    dealer: document.querySelector('#dealerStack'),
    player: document.querySelector('#playerStack')
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
        dealer: '2, clubs',
        player: '2, clubs'
    }

    winner = null;
    war = null;

    render()
}
function render(){

// create a new deck of cards array - https://w3collective.com/random-playing-card-javascript/
function createNewDeck(){
    faceVal = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const cardDeck = [];
        for(let a = 0; a < suits.length; a++) {
            for(let f = 0; f < faceVal.length; f++) {
                const value = faceVal[f];
                const suit = suits[a];
                cardDeck.push({ value, suit });
            }
        }
    return cardDeck;
}
console.log(createNewDeck());


    // Cards won score changes as winner collects winning cards
    for(let cardWon in cardsWon){
        console.log(cardWon, '< key name');
    cardsWonEls[cardWon].textContent = cardsWon[cardWon];
    }

    for(let faceCard in faceCards){
        console.log(faceCard, '2, clubs');
        faceCardEls[faceCard].imagesEl.src = deckImages[faceCards[faceCard]].imagesURL
    }
}
// Player clicks on Deal button to start game  and deal cards
// Then, deal button needs to disappear from screen
function dealCards(){
    console.log('Draw Cards');
}
//  When player clicks on top of their card <div><img>Dealer’s card played displays, get random card

function displayCard(){
    console.log('Card Drawn');
}
// If player draws a higher value, then player gets both cards - Highest to lowest values (A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2)
// If player draws a lower value, then dealer gets both cards
// If player draws a card of the same value as dealer, then a war is declared. 
// Function: WAR will display (pop up) and disappear after 3 seconds
// Player clicks on top of their top card 4 times
// 4th card displays face up. 
// If player draws a higher value, then player gets both cards - Highest to lowest values (A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2)
// If player draws a lower value, then dealer gets both cards
// If player draws a card of the same value as dealer, then a war is declared.
// If war happens again, repeat steps above
// Winner of the war, gets all cards

faceCards.dealer = dealRandomCard();
faceCards.player = dealRandomCard();

    if (cardsWon.dealer === cardsWon.player){
        winner = 'war';
    } else if(cardsWon.player)


    render()

function dealRandomCard(){
}
const cardDeck = createNewDeck();
dealRandomCard(cardDeck)
    const randomIdx = Math.floor(Math.random() * 51);
      


// Game will need to loop until winner gets all 52 cards
// When games ends, display winner
// <button>DEAL AGAIN
