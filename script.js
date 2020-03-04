// Constants
    const gameLog = document.querySelector('#log');
    const playerScoreDisplay = document.querySelector('#player_score_display');
    const computerScoreDisplay = document.querySelector('#computer_score_display');
    const options = document.querySelectorAll('#game_options img');
    
// Variables
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    let max_rounds = 5;

// Events
    for(var i = 0;i < options.length;i++){
        document.getElementById(options[i].id).addEventListener('click', () => { play(event); });
    }
    document.getElementById('new_game').addEventListener('click', newGame);
    
// Functions
    function newGame(){
        playerScore = 0;
        computerScore = 0;
        rounds = 0;
        gameLog.textContent = "";
        playerScoreDisplay.textContent = "Your Score: 0";
        computerScoreDisplay.textContent = "Computer Score: 0";
    }
    
    function play(e){
        rounds++;
    
        let gameOptions = ["rock", "paper", "scissors"];
        let rng = Math.floor(Math.random() * 3);
        let playerChoice = e.target.id;
        let computerChoice = gameOptions[rng];
        let color = "lime";
        
        if(playerChoice === "rock" && computerChoice === "scissors"){
            ++playerScore;
        }else if(playerChoice === "scissors" && computerChoice === "paper"){
            ++playerScore;
        }else if(playerChoice === "paper" && computerChoice === "rock"){
            ++playerScore;
        }else if(playerChoice === computerChoice){
            // draw
            color = "grey";
        }else{
            ++computerScore;
            color = "red";
        }
        
        if(rounds > max_rounds){
            let winner = false;
            if(playerScore > computerScore){
                winner = "player";
            }else{
                winner = "computer";
            }
            
            winner = (playerScore === computerScore) ? "nobody" : winner;
            
            if(rounds <= 6){
                gameLog.innerHTML += `- Game Over, ${winner} wins -`;
            }
        }else{
            gameLog.innerHTML += `<span style="color:${color};">Round ${rounds}: You chose ${playerChoice}, the computer chose ${computerChoice}.</span></br>`;
        
            playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        }
    }
