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
let winner;
let war;
let cardsWon;

/*----- cached element references -----*/
const btn = document.querySelector('button');
console.log(btn);


const dealerWonEls = document.querySelector('#dealerWon');
const playerWonEls = document.querySelector('#playerWon');

/*----- event listeners -----*/
btn.addEventListener('click', dealCards);

document.querySelector('#playerStack')
.addEventListener('click', compareCards);

document.querySelector('#playerStack')
.addEventListener('click', displayRandomCard);


/*----- functions -----*/
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
    console.log(playerHand, dealerHand, 'these are my hands')
}

function dealCards(){
    console.log('Deal Cards');
    deck = createNewDeck();
    shuffle();
    splitDeck();
    displayRandomCard();
    btn.removeEventListener('click', dealCards); 
}    
 
function disableDealBtn(){
    disableDealBtn();
}


function displayRandomCard(){
    playerCard = playerHand[0];
    dealerCard = dealerHand[0];
    console.log(playerCard, dealerCard, "these are my cards")
    const dealerFaceCard = document.getElementById('dealerFaceCard');
    dealerFaceCard.innerHTML = `${dealerCard?.value}${dealerCard?.suit}`;
    const playerFaceCard = document.getElementById('playerFaceCard');
    playerFaceCard.innerHTML = `${playerCard?.value}${playerCard?.suit}`; //copy this for check winner 
    // playerCard.value = 'No more cards'
    // dealerCard.value = 'No more cards'
    // playerCard.suit = 'No more cards'
    // dealerCard.suit = 'No more cards'
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
        let y = document.createTextNode('WAR IS DECLARED!');
        discardDealer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        console.log('WAR', dealerHand.length, playerHand.length, discardDealer.length, discardPlayer.length)
        for(let i = 0; i < 4; i++) {
            console.log('war declared');
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
        let war = 'WAR';
        dealerWonEls.textContent = 'WAR is DECLARED!';
        // select element on html where I'm going to leave a message for user letting them know that war is happeneing and update text content
        // then, 
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

function checkWinner(){
    if(discardPlayer.length === 0 && playerHand.length === 0) {
        // console.log(discardPlayer.length, discardDealer.length, 'winner?')
        // dealerWonEls.textContent = `You lost the battle!`;
        document.querySelector('#dealerWon').textContent = 'Dealer Wins War!';
    }else if(discardDealer.length === 0 && dealerHand.length === 0) {
        document.querySelector('#playerWon').textContent = 'Player Wins War!';
        // playerWonEls.textContent = `You won the battle!`;
        // playerCard.textContent = 'Player Wins War!';
    } 
    // declareWinner();
}


// function declareWinner(){
//         .textContent = discardPlayer.length
// }
