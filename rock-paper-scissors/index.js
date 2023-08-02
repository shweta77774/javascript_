const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtn = document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener( "click", () => {
    player = button.innerHTML;
    
    computerTurn();
    playerText.innerHTML = `Player: ${player}`;
    computerText.innerHTML = `Computer: ${computer}`;
    resultText.innerHTML = checkWinner();


}))

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer= "SCISSORS";
            break;
        
    }
}
function checkWinner() {
    if (player == computer) {
        return "Draw its a tie";
    }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!!!" : "You Loose";
    }
    else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!!!" : "You Loose";
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!!!" : "You Loose";
    }
}