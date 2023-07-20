'use strict' ; 

    let number = document.querySelector('.number').value = Math.trunc(Math.random()*20)+1;
    //  console.log(number);
    // document.querySelector('.number').textContent = number;
    let score = 20;
    let highscore = 0;

document.querySelector('.check').addEventListener('click' , function(){
    const guess = document.querySelector('.guess').value;
    // console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = "🤯 No Number";
    }
    if(guess != number){
       score--;
    //    console.log(score);
       document.querySelector('.score').textContent = score;
       if(score == 0){
        document.querySelector('.message').textContent = '🫣 You Lose';
       }
       if(score > guess){
        document.querySelector('.message').textContent = '📉 Too Low';
       }
       if(score < guess){
        document.querySelector('.message').textContent = '📈 Too High';
       }
     }
     if(guess == number){
        document.querySelector('.message').textContent = '🥳 Correct Answer';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#90EE90';
        if(score > highscore){
            document.querySelector('.highscore').textContent = score;
            let prev_high = document.querySelector('.highscore').value
        }else if(prev_high > score){
            document.querySelector('.highscore').textContent = prev_high;
        }
     }

});

document.querySelector('.again').addEventListener('click' , function(){
//    console.log('Again Clicked');
    score = 20;
    number = document.querySelector('.number').value = Math.trunc(Math.random()*20)+1;
    console.log(number);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start Playing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

 });

