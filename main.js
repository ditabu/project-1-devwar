/*----- constants -----*/
const dealer = document.querySelector('DEALER');
const player = document.querySelector('PLAYER');

/*----- app's state (variables) -----*/

let deck = []
let playerHand = []
let dealerHand = []
let discardPlayer = []
let discardDealer = []
let playerCard;
let dealerCard;

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
.addEventListener('click', compareCards);

document.querySelector('#playerStack')
.addEventListener('click', displayRandomCard);

document.querySelector('#playerStack')
.addEventListener('click', gameOver);

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

function splitDeck(){
    for(let i = 0; i < deck.length; i++) {
       if(i % 2 ===0){
            playerHand.push(deck[i])
        } else {
            dealerHand.push(deck[i])
        }
    }
    console.log(playerHand, dealerHand, 'these are my hands')
}

function dealCards(){
    console.log('Deal Cards');
    deck = createNewDeck();
    shuffle();
    splitDeck();
    displayRandomCard();
}    
// }
// function disableDealBtn(){
//     document.querySelector('button').disabled = true;
//     disableDealBtn();
// }


function displayRandomCard(){
    playerCard = playerHand[0]
    dealerCard = dealerHand[0]
    console.log(playerCard, dealerCard, "these are my cards")
    const dealerFaceCard = document.getElementById('dealerFaceCard')
    dealerFaceCard.innerHTML = `${dealerCard.value}${dealerCard.suit}`
    const playerFaceCard = document.getElementById('playerFaceCard')
    playerFaceCard.innerHTML = `${playerCard.value}${playerCard.suit}`
}

function compareCards(){
    console.log(playerCard, dealerCard, 'compare card function')
    if(playerCard.value > dealerCard.value) {
        discardPlayer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        console.log('pc higher dc', dealerHand.length, playerHand.length, discardDealer.length, discardPlayer.length)
    }else if(playerCard.value < dealerCard.value) {
        discardDealer.push(playerCard);
        discardDealer.push(dealerCard);
        playerHand.shift();
        dealerHand.shift();
        console.log('pc lower dc', playerHand.length, dealerHand.length,discardDealer.length, discardPlayer.length)
    }else if(playerCard.value === dealerCard.value) {
        war = 'WAR';
        discardDealer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        console.log('WAR', dealerHand.length, playerHand.length, discardDealer.length, discardPlayer.length)
        for(let i = 0; i < 4; i++) {
            console.log('war declared');
        }
    }
}
console.log(dealerHand, playerHand)

function declareWarWin(){
    console.log(playerCard, dealerCard, 'compare war win')
    if(playerCard.value > dealerCard.value) {
        discardPlayer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        console.log('pc higher dc', dealerHand.length, playerHand.length, discardDealer.length, discardPlayer.length)
    }else if(playerCard.value < dealerCard.value) {
        discardDealer.push(playerCard);
        discardDealer.push(dealerCard);
        playerHand.shift();
        dealerHand.shift();
        console.log('pc lower dc', playerHand.length, dealerHand.length,discardDealer.length, discardPlayer.length)
    }else if(playerCard.value === dealerCard.value) {
        war = 'WAR';
        discardDealer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        console.log('WAR', dealerHand.length, playerHand.length, discardDealer.length, discardPlayer.length)
        for(let i = 0; i < 4; i++) {
            console.log('war declared');
        }
    }

}

function gameOver(){
    if(playerHand === 0) {
        winner = 'dealer'
    }else if(dealerHand === 0) {
        looser = 'player'
    }
}

function init(){
    cardsWon = {
        dealer: 0,
        player: 0,
    }
    
    faceCards = {
        dealer: 0,
        player: 0,
    }
    
    winner = null;
    looser = null;
    war = null;

    playerHand = [];
    dealerHand = [];

    render()
}

function render(){   
    // Cards won score changes as winner collects winning cards
    for(let cardWon in cardsWon){
        console.log(cardWon, '< key name');
    cardsWonEls[cardWon].textContent = cardsWon[cardWon];
    }
    render()
}
