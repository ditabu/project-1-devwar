/*----- constants -----*/
const dealer = document.querySelector('DEALER');
const player = document.querySelector('PLAYER');

/*----- app's state (variables) -----*/

let deck = []
let playerhand = []
let dealerhand = []

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
    suits = ['♣', '♦', '♥', '♠'];
        for(let a = 0; a < suits.length; a++) {
            for(let f = 0; f < faceVal.length; f++) {
                const value = faceVal[f];
                const suit = suits[a];
                deck.push({ value, suit });
            }
        }
        return deck;
}

function shuffle(){
    for(let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}



function displayRandomCard(){
    // // const cardDeck = createNewDeck();
    // // dealRandomCard(cardDeck)
    // // <div><img>Dealer’s “stack” of cards - random 26 cards each
        const randomDIdx = Math.floor(Math.random() * 13 +2);
        return randomDIdx;
        // <div><img>Player’s “stack” of cards - random 26 cards each   
        const randomPIdx = Math.floor(Math.random() * 13 +2);
}

function dealCards(){
    console.log('Draw Cards');
    deck = createNewDeck();
    shuffle();
    splitDeck();
    // split deck variable in half and give one stack to dealer and one to player

    // console.log(deck)
}

function splitDeck(){
    for(let i = deck.length - 1; i >= deck.length/2; --i) {
        temp.add(deck.get(i));
        deck.remove(i);
    } 
    return newDeck;
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

    // if (cardsWon.dealer === cardsWon.player){
    //     winner = 'war';
    // } else if(cardsWon.player )




// // Game will need to loop until winner gets all 52 cards
// // When games ends, display winner
// // <button>DEAL AGAIN
