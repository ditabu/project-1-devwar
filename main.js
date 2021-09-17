/*----- constants -----*/ 
// define constant variables used in the game of war
const dealer = document.querySelector('DEALER');
const player = document.querySelector('PLAYER');

/*----- app's state (variables) -----*/
// define war's state variables that will change in the functions below
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
// defining elements that will be used and manipulated with DOM
const btn = document.querySelector('button'); 
const dealerWonEls = document.querySelector('#dealerWon');
const playerWonEls = document.querySelector('#playerWon');

/*----- event listeners -----*/
// add event listener to DEAL button to deal cards to player and dealer once button is clicked
btn.addEventListener('click', dealCards);
// add event listener to listen to a click on the player's stack of cards to start 
// comparing and displaying the value of the player's and dealer's hands
document.querySelector('#playerStack').addEventListener('click', compareCards);
document.querySelector('#playerStack').addEventListener('click', displayRandomCard);

/*----- functions -----*/
// these are the state variables that need to initialize the game to update the UI with values
// start with 0 or null at the start of the game 
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

// create a create new deck function with an array for the value and suits of the card
// use for loop to loop through the length of the values and suits of the deck of cards and push it to the deck
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

// create a shuffle function and for loop to loop through the deck of 52 cards
// use math floor random to randomize the array of cards in the deck
function shuffle(){
    for(let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

// create a split deck function and for loop to loop through the deck of cards array
// use modulus method to push even numbers from deck array to playerHand array and odd numbers 
// to dealerHand array with an if/else statement
// call function under dealCards function block of code
function splitDeck(){
    for(let i = 0; i < deck.length; i++) {
       if(i % 2 === 0){
            playerHand.push(deck[i]);
        } else {
            dealerHand.push(deck[i]);
        }
    }
}

// create dealCards function and call it in the deal button element add event listener above
// call functions in order here: createNewDeck, shuffle, splitDeck, displayRandomCard, 
// and remove event listener to deal button to disable the button from dealing another 52 cards
function dealCards(){
    deck = createNewDeck();
    shuffle();
    splitDeck();
    displayRandomCard();
    btn.removeEventListener('click', dealCards); 
}    

// create displayRandomCard function and call it in the event listener above when player clicks on 
// top of their stack of cards array and also under dealCards block of code
// redefine the variables playerCard and dealerCard to the playerHand and dealerHand arrays
// define dealerFaceCard & playerFaceCard by getting the element by their ID to manipulate the 
// DOM to update the UI with the values and suits value properties using innerHTML
function displayRandomCard(){
    playerCard = playerHand[0];
    dealerCard = dealerHand[0];
    const dealerFaceCard = document.getElementById('dealerFaceCard');
    dealerFaceCard.innerHTML = `${dealerCard.value}${dealerCard.suit}`;
    const playerFaceCard = document.getElementById('playerFaceCard');
    playerFaceCard.innerHTML = `${playerCard.value}${playerCard.suit}`;
}

// create compareCards function to compare the values of the playerCard and dealerHand to 
// determine who has a higher value card vs a lower value card. Use if/else. If they have an 
// equal value, then war is declared. Manipulate the playerWonEls, dealerWonEls, playerFaceCard, and dealerFaceCards 
// with styling of color and textContent to update the UI in cards won with the number that us pushed to the 
// discardPlayer/dealer arrays. Also, use shift for each hand to remove the first element in the array. 
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
        // if values are equal, change color of dealer faceCard to red and change color of player faceCard to blue
        // and change wonEls to WAR to indicate a WAR has been declared. us for loop to loop through player/dealerHands 
        // 4 times
        playerWonEls.textContent = 'WAR';
        dealerWonEls.textContent = 'WAR';
        playerFaceCard = document.getElementById('playerFaceCard');
        playerFaceCard.style.backgroundColor = '#0e266a';
        dealerFaceCard = document.getElementById('dealerFaceCard');
        dealerFaceCard.style.backgroundColor = '#6a110e';
        discardDealer.push(dealerCard);
        discardPlayer.push(playerCard);
        dealerHand.shift();
        playerHand.shift();
        for(let i = 0; i < 4; i++) {
        }
    }
    // run this if player hand = 0, then redefine playerHand = discardPlayer
    // then, change the discardPlayer = []
    // if both playerhand && discardPlayer are [], playerHand === [] && discardPlayer === [], then they lost
    // same thing for the dealer
    // or keep track of a variable allPlayerCards = playerHand.length + playerdiscard.length, player wins 
    if (playerHand.length === 0){
        playerHand = discardPlayer;
        discardPlayer = [];
    }
    if (dealerHand.length === 0){
        dealerHand = discardDealer;
        discardDealer = [];
    }
    declareWinner();
}
// create declareWinner function and call it above in the compareCards block of code
// if both array lengths of the discard piles equal 26, then change UI of wonEls to winner or surrender. 
// remove event listener for displayRandomCard on the click of the playerStack to disable the hands 
function declareWinner(){
    if(discardPlayer.length === 26) {
        dealerWonEls.textContent = 'WINNER!';
        dealerWonEls.style.fontSize = 'x-large';
        playerWonEls.textContent = 'SURRENDER!';
        playerWonEls.style.fontSize = 'x-large';
        document.querySelector('#playerStack').removeEventListener('click', displayRandomCard);
    }else if(discardDealer.length === 26) {
        playerWonEls.textContent = 'WINNER!';
        playerWonEls.style.fontSize = 'x-large';
        dealerWonEls.textContent = 'SURRENDER!';
        dealerWonEls.style.fontSize = 'x-large';
        document.querySelector('#playerStack').removeEventListener('click', displayRandomCard);
    }
}    
