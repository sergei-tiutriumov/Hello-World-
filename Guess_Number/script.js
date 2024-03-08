'use strict';
let randomNumber = Math.trunc(Math.random()*20+1);
let score = 20;
document.querySelector('.guess-message').textContent = 'Guess the number'
document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber =  Number(document.querySelector('.number-input').value);
    if (guessingNumber <=0){
        document.querySelector('.guess-message').textContent = 'You should input a positive number';
    }       else if (guessingNumber === randomNumber){
             document.querySelector('.guess-message').textContent = 'BINGO!!!';
             document.querySelector('.question').textContent = randomNumber;
             document.querySelector('body').style.backgroundColor = 'rgb(0,180,0)';
             document.querySelector('.question').style.width = '50rem';
             let bestResult = Number(document.querySelector('.highscore').value);
             if (!bestResult){
                bestResult = score;
             }  else if (score > bestResult) {bestResult = score} 
             document.querySelector('.highscore').value = bestResult;
             document.querySelector('.highscore').textContent = bestResult;     
            } else if (guessingNumber > randomNumber) {
                document.querySelector('.guess-message').textContent = 'too much!';
                score--;
                document.querySelector('.score').value = score;
                document.querySelector('.score').textContent = score;
            } else  if (guessingNumber < randomNumber) {
                document.querySelector('.guess-message').textContent = 'so little...';  
                score--;
                document.querySelector('.score').value = score;
                document.querySelector('.score').textContent = score;
            }    
    console.log('randomNumber is  ', randomNumber);
    console.log('guessingNumber is ', guessingNumber);
    // console.log('bestResult is   ', bestResult);  
             
    if (score <= 1){
        document.querySelector('.guess-message').textContent = 'Game Over!'
        document.querySelector('.score').value = 'fail';
        document.querySelector('.score').textContent = 'fail';
        document.querySelector('body').style.backgroundColor = 'rgb(200,30,30)';}

    document.querySelector('.again').addEventListener('click', function () {
            document.querySelector('.question').style.width = '25rem'
            document.querySelector('.question').textContent = '?????';
            document.querySelector('.number-input').value = '';
            score = 20;
            document.querySelector('.score').value = score;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'rgb(0,0,0)';
            document.querySelector('.guess-message').textContent = 'Guess the number';
            randomNumber = Math.trunc(Math.random()*20+1);
        
        })
})

