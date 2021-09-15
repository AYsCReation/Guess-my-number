let score = document.querySelector('.score').textContent = 20;

const msgDisplay = function(msg) {
    document.querySelector('.message').textContent = msg
};
let highscore = 0;
let secretNumber = Number( Math.trunc(Math.random()*20 + 1));
document.querySelector('.check').addEventListener('click',function(){
let guess = Number( document.querySelector('.guess').value);
if(!guess){
    // document.querySelector('.message').textContent = 'NO VALUE ❌';
    msgDisplay('NO VALUE ❌');
}
else if(guess === secretNumber){
    // document.querySelector('.message').textContent = 'CORRECT ANSWER 😀😍😎';
    msgDisplay('CORRECT ANSWER 😀😍😎');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('body').style.color = 'blue';
    document.querySelector('.btn').style.color = 'blue';
    document.querySelector('.number').textContent = secretNumber;
    if(score> highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

}
else if(guess!== secretNumber){
    if (score > 1){
    guess > secretNumber ? msgDisplay('TOO HIGH😵') : msgDisplay('TOO LOW🥱');
    score--;
    document.querySelector('.score').textContent = score;
}else{
msgDisplay('YOU LOST THE GAME😶');
document.querySelector('.score').textContent = 0;
document.querySelector('body').style.backgroundColor = 'red';
}

}

})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    msgDisplay('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.color = '#eee';
    document.querySelector('.btn').style.color = '#222';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '25rem';
    
    
    
    document.querySelector('.number').textContent = '?';
   secretNumber = Number( Math.trunc(Math.random()*20 + 1));

    

})