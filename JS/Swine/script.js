'use strict';
//variables
const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.getElementById('current--1');
const playerScore0 = document.querySelector('#score--0');
const playerScore1= document.querySelector('#score--1');
const newGame = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const saveScore = document.querySelector('.btn--hold');
const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');
const diceDots = document.querySelector('.dice');
let currentScore = 0;
let score = [0,0];
let activePlayer = 0; //vibor igroka

//set initial conditions
function initGame () {
currentScorePlayer0.textContent = 0;
currentScorePlayer1.textContent = 0;
playerScore0.textContent = 0;
playerScore1.textContent = 0;
diceDots.classList.add('hidden');
}

function changePlayer() {
   Player0.classList.toggle('player--active');
   Player1.classList.toggle('player--active');
   activePlayer = activePlayer === 0 ? 1 : 0;
}

function check100(){
   if (score[`${activePlayer}`] >= 100) {
   //diceDots.classList.add('hidden');
   //document.getElementById(`name--${activePlayer}`).classList.add('player--winner');
   diceRoll.classList.add('hidden');
   saveScore.classList.add('hidden');
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  // document.body.classList.remove('background-image');
}
}

//dice roll
let diceNumber;
function ShowTheDice(){
   diceDots.src =`dice${diceNumber}.png`;
   diceDots.classList.remove('hidden');
}
function RollTheDice() {
   diceNumber = (Math.trunc((Math.random()*6 + 1)))
   if (diceNumber != 1 && score[`${activePlayer}`] < 100) {
   ShowTheDice();
   currentScore += diceNumber;
   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   check100(); 
   }
   else {
    ShowTheDice();
    score[`${activePlayer}`] += currentScore; 
    check100()
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = score[`${activePlayer}`];
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    changePlayer();
   }
}; 
//write down result
function writeDownResult() {
   score[`${activePlayer}`] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = score[`${activePlayer}`];
   check100();
   currentScore = 0;
   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   changePlayer();

}



// let activePlayerCurrentScore = document.getElementById(`current--${activePlayer}`);
// let totalScore = document.getElementById(`score--${activePlayer}`);
// scorePlayer0.textContent = score;
initGame();
diceRoll.addEventListener('click', RollTheDice);
saveScore.addEventListener('click',writeDownResult);
newGame.addEventListener('click', initGame);

