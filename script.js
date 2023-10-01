'use strict';

const dispayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //return random int in an inclusive range
}

let secretNumber = getRandomInt(1, 20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //No Input
    if(!guess){
        dispayMessage('No Number!');

    //Guess is wrong 
    } else if (guess !== secretNumber){
        if (score > 1){
        //Hint (too high or too low)
            dispayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            dispayMessage('You Lost');
            document.querySelector('.score').textContent = 0;
        }   

    //Guess is correct
    } else if (guess === secretNumber){
        //Highscore functionality
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = String(highScore);
        }

        //Celebration aspects
        dispayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = guess;
    }
});

//Reset everything to defaults
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.guess').value = "";
    dispayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.number').style.width = '15rem'; 
    secretNumber = getRandomInt(1, 20);
    score = 20;
    document.querySelector('.score').textContent = score;
})