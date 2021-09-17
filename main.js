const dealer = document.querySelector('DEALER');
const player = document.querySelector('PLAYER');

let deck = []
let playerHand = []
let dealerHand = []
let discardPlayer = []
let discardDealer = []
let playerCard;
let dealerCard;
let winner;
let war;
let cardsWon;

const btn = document.querySelector('button');
const dealerWonEls = document.querySelector('#dealerWon');
const playerWonEls = document.querySelector('#playerWon');

btn.addEventListener('click', dealCards);
document.querySelector('#playerStack').addEventListener('click', compareCards);
document.querySelector('#playerStack').addEventListener('click', displayRandomCard);


function init(){
    cardsWon = {
        dealer: 0,
        player: 0,
    }
    winner = null;
    war = null;
    playerHand = [];
    dealerHand = [];
    discardPlayer = [];
    discardDealer = [];
    render();
}

function createNewDeck(){
    faceVal = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits = ['♣', '♦', '♥', '♠'];
        for(let i = 0; i < suits.length; i++) {
            for(let f = 0; f < faceVal.length; f++) {
                const value = faceVal[f];
                const suit = suits[i];
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
            playerHand.push(deck[i]);
        } else {
            dealerHand.push(deck[i]);
        }
    }
}

function dealCards(){
    deck = createNewDeck();
    shuffle();
    splitDeck();
    displayRandomCard();
    btn.removeEventListener('click', dealCards); 
}    
 
function displayRandomCard(){
    playerCard = playerHand[0];
    dealerCard = dealerHand[0];
    const dealerFaceCard = document.getElementById('dealerFaceCard');
    dealerFaceCard.innerHTML = `${dealerCard.value}${dealerCard.suit}`;
    const playerFaceCard = document.getElementById('playerFaceCard');
    playerFaceCard.innerHTML = `${playerCard.value}${playerCard.suit}`;
}

function compareCards(){
    if(playerCard.value > dealerCard.value) {
        playerWonEls.textContent = discardPlayer.length;
        playerFaceCard.style.backgroundColor = 'white';
        dealerFaceCard.style.backgroundColor = 'white';
        discardPlayer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
    }else if(playerCard.value < dealerCard.value) {
        dealerWonEls.textContent = discardDealer.length;
        playerFaceCard.style.backgroundColor = 'white';
        dealerFaceCard.style.backgroundColor = 'white';
        discardDealer.push(playerCard);
        discardDealer.push(dealerCard);
        playerHand.shift();
        dealerHand.shift();
    }else if(playerCard.value === dealerCard.value) {
        playerFaceCard = document.getElementById('playerFaceCard');
        playerFaceCard.style.backgroundColor = '#0e266a';
        dealerFaceCard = document.getElementById('dealerFaceCard');
        dealerFaceCard.style.backgroundColor = '#6a110e';
        playerWonEls.textContent = 'WAR';
        dealerWonEls.textContent = 'WAR';
        discardDealer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        for(let i = 0; i < 4; i++) {
        }
    }
    if (playerHand.length === 0){
        playerHand = discardPlayer;
        discardPlayer = [];
    }
    if (dealerHand.length === 0){
        dealerHand = discardDealer;
        discardDealer = [];
    }
    checkWinner();
}

function declareWarWin(){
    if(playerCard.value > dealerCard.value) {
        discardPlayer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
    }else if(playerCard.value < dealerCard.value) {
        discardDealer.push(playerCard);
        discardDealer.push(dealerCard);
        playerHand.shift();
        dealerHand.shift();
    }else if(playerCard.value === dealerCard.value) {
        discardDealer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        for(let i = 0; i < 4; i++) {
            discardDealer.push(dealerCard[i]);
            discardPlayer.push(playerCard[i]);
            dealerHand.shift(i);
            playerHand.shift(i);
        }
    }

}

function checkWinner(){
    if(discardPlayer.length === 0 && playerHand.length === 0) {
        document.querySelector('#dealerWon').textContent = 'Dealer Wins War!';
    }else if(discardDealer.length === 0 && dealerHand.length === 0) {
        document.querySelector('#playerWon').textContent = 'Player Wins War!';

    } 
}

