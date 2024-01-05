const pd=document.getElementById("playerDisplay");
const cd=document.getElementById("computerDisplay");
const rd=document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

const avail=['ROCK','PAPER','SCISSORS'];

function play(input){
    input=input.toUpperCase();
    pd.textContent=`PLAYER: ${input}`;


    let i=Math.floor(Math.random()*3);
    let cc=avail[i];
    cd.textContent=`COMPUTER: ${cc}`;

    switch(cc){
        case 'ROCK':
            input == 'SCISSORS' ? rd.textContent='LOOSE' : input== 'PAPER'? rd.textContent='WIN' : rd.textContent='TIE';
            break;
        case 'PAPER':
            input == 'ROCK' ? rd.textContent='LOOSE' : input== 'SCISSORS'? rd.textContent='WIN' : rd.textContent='TIE';
            break;    
        case 'SCISSORS':
            input == 'PAPER' ? rd.textContent='LOOSE' : input== 'ROCK'? rd.textContent='WIN' : rd.textContent='TIE';        
            break;
    }
    rd.classList.remove('wres','lres');
    if(rd.textContent=='WIN'){
        rd.classList.add('wres');
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
        computerScoreDisplay.textContent=computerScore;
    }
    if(rd.textContent=='LOOSE'){
        computerScore++;
        playerScoreDisplay.textContent=playerScore;
        computerScoreDisplay.textContent=computerScore;
        rd.classList.add('lres');
    }
}