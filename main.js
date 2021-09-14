/*----- constants -----*/
const dealer = document.querySelector('DEALER');
const player = document.querySelector('PLAYER');


const deckImages = {
    ace: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-A.svg', 'card-deck-css/images/diamonds/diamonds-A.svg', 'card-deck-css/images/hearts/hearts-A.svg', 'card-deck-css/images/spades/spades-A.svg'],   
    },
    king: { 
        imagesUrl: ['card-deck-css/images/clubs/clubs-K.svg', 'card-deck-css/images/diamonds/diamonds-K.svg', 'card-deck-css/images/hearts/hearts-K.svg', 'card-deck-css/images/spades/spades-K.svg'],
    },
    queen: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-Q.svg', 'card-deck-css/images/diamonds/diamonds-Q.svg', 'card-deck-css/images/hearts/hearts-Q.svg', 'card-deck-css/images/spades/spades-Q.svg'],
    },
    jack: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-J.svg', 'card-deck-css/images/diamonds/diamonds-J.svg', 'card-deck-css/images/hearts/hearts-J.svg', 'card-deck-css/images/spades/spades-J.svg'],     
    },
    ten: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r10.svg', 'card-deck-css/images/diamonds/diamonds-r10.svg', 'card-deck-css/images/hearts/hearts-r10.svg', 'card-deck-css/images/spades/spades-r10.svg'],
    },
    nine: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r09.svg', 'card-deck-css/images/diamonds/diamonds-r09.svg', 'card-deck-css/images/hearts/hearts-r09.svg', 'card-deck-css/images/spades/spades-r09.svg'],
    },
    eight: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r08.svg', 'card-deck-css/images/diamonds/diamonds-r08.svg', 'card-deck-css/images/hearts/hearts-r08.svg', 'card-deck-css/images/spades/spades-r08.svg'],
    },
    seven: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r07.svg', 'card-deck-css/images/diamonds/diamonds-r07.svg', 'card-deck-css/images/hearts/hearts-r07.svg', 'card-deck-css/images/spades/spades-r07.svg'],
    },
    six: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r06.svg', 'card-deck-css/images/diamonds/diamonds-r06.svg', 'card-deck-css/images/hearts/hearts-r06.svg', 'card-deck-css/images/spades/spades-r06.svg'],
    },
    five: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r05.svg', 'card-deck-css/images/diamonds/diamonds-r05.svg', 'card-deck-css/images/hearts/hearts-r05.svg', 'card-deck-css/images/spades/spades-r05.svg']
    },
    four: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r04.svg', 'card-deck-css/images/diamonds/diamonds-r04.svg', 'card-deck-css/images/hearts/hearts-r04.svg', 'card-deck-css/images/spades/spades-r04.svg'],
    },
    three: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r03.svg', 'card-deck-css/images/diamonds/diamonds-r03.svg', 'card-deck-css/images/hearts/hearts-r03.svg', 'card-deck-css/images/spades/spades-r03.svg'],
    },
    two: {
        imagesUrl: ['card-deck-css/images/clubs/clubs-r02.svg', 'card-deck-css/images/diamonds/diamonds-r02.svg', 'card-deck-css/images/hearts/hearts-r02.svg', 'card-deck-css/images/spades/spades-r02.svg']
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
.addEventListener('click', displayRandomCard);


/*----- functions -----*/
function createNewDeck(){
    faceVal = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        for(let a = 0; a < suits.length; a++) {
            for(let f = 0; f < faceVal.length; f++) {
                const value = faceVal[f];
                const suit = suits[a];
                deck.push({ value, suit });
            }
        }
        return deck;
}
// console.log(cardDeck)
function deal2players(){
    // create 2 arrays, 1 for computer and 1 for player
    // global scope vs local scope
}

function displayRandomCard(){
    // // const cardDeck = createNewDeck();
    // // dealRandomCard(cardDeck)
    // // <div><img>Dealer’s “stack” of cards - random 26 cards each
        const randomDIdx = Math.floor(Math.random() * 13 +2);
        return randomDIdx;
        // <div><img>Player’s “stack” of cards - random 26 cards each   
        const randomPIdx = Math.floor(Math.random() * 13 +2);
    };

// Player clicks on Deal button to start game  and deal cards
// // Then, deal button needs to disappear from screen
function dealCards(){
    console.log('Draw Cards');
    createNewDeck();
    console.log(deck)
}
// //  When player clicks on top of their card <div><img>Dealer’s card played displays, get random card
function displayCard(){
    console.log('Card Drawn');
}














function init(){
    cardsWon = {
        dealer: 0,
        player: 0,
    }
    
    faceCards = {
        dealer: 'four',
        player: 'five'
    }
    
    winner = null;
    war = null;
    
    
    // Cards won score changes as winner collects winning cards
    for(let cardWon in cardsWon){
        console.log(cardWon, '< key name');
    cardsWonEls[cardWon].textContent = cardsWon[cardWon];
    }
}



  


    // for(let faceCard in faceCards){
    //     console.log(faceCard, 'four');
    //     console.log(deckImages.ace);
    //     faceCardEls[faceCard].imagesEl.src = deckImages.ace.imagesUrl[1]
        // console.log(faceCardEls[faceCard].imagesEl);
        // make it fit in the card by adjusting the size and grab that (height and width)
    // }



// // If player draws a higher value, then player gets both cards - Highest to lowest values (A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2)
// // If player draws a lower value, then dealer gets both cards
// // If player draws a card of the same value as dealer, then a war is declared. 
// // Function: WAR will display (pop up) and disappear after 3 seconds
// // Player clicks on top of their top card 4 times
// // 4th card displays face up. 
// // If player draws a higher value, then player gets both cards - Highest to lowest values (A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2)
// // If player draws a lower value, then dealer gets both cards
// // If player draws a card of the same value as dealer, then a war is declared.
// // If war happens again, repeat steps above
// // Winner of the war, gets all cards

// faceCards.dealer = dealRandomCard();
// faceCards.player = dealRandomCard();

//     if (cardsWon.dealer === cardsWon.player){
//         winner = 'war';
//     } else if(cardsWon.player )




// // Game will need to loop until winner gets all 52 cards
// // When games ends, display winner
// // <button>DEAL AGAIN
