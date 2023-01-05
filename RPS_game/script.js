const buttonrock = document.querySelector(".buttonR");
const buttonpaper = document.querySelector(".buttonP");
const buttonScissor = document.querySelector(".buttonS");

const txt = document.querySelector(".text");
const cs = document.querySelector(".cs");
const ps = document.querySelector(".ps");
const compc = document.querySelector(".cc");

buttonrock.addEventListener("click", updatebtn);
buttonpaper.addEventListener("click", updatebtn);
buttonScissor.addEventListener("click", updatebtn);
// console.log(computerChoices[randomChoice]);

let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    const computerChoices = ["ROCK", "PAPER", "SCISSOR"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return (computerChoices[randomChoice]);
}

function updatebtn(event) {
    if (event.target === buttonrock) {
        let cc = computerChoice();
        txt.textContent = "ROCK";
        compc.textContent = cc;
        game(event.target, cc);
        cs.textContent = computerScore;
        ps.textContent = playerScore;
    }
    else if (event.target === buttonpaper) {
        let cc = computerChoice();
        txt.textContent = "PAPER";
        compc.textContent = cc;
        game(event.target, cc);
        cs.textContent = computerScore;
        ps.textContent = playerScore;
    }
    else if (event.target === buttonScissor) {
        let cc = computerChoice();
        txt.textContent = "SCISSOR";
        compc.textContent = cc;
        // console.log(event.target.textContent);
        // console.log(cc);
        game(event.target, cc);
        cs.textContent = computerScore;
        ps.textContent = playerScore;
    }
    else {
        console.log("invalidddd")
    }
}

function game(playerChoice, computerChoice) {
    playgame(playerChoice, computerChoice);
    score();
    if (playerScore > 5) {
        score();
        alert("Player WINS the game!!");
        reset();
    }
    else if (computerScore > 5) {
        score();
        alert("Computer WINS the game!!");
        reset();

    }
}

function playgame(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('Tie');
    }
    else if (
        (playerChoice == buttonrock && computerChoice == 'PAPER') ||
        (playerChoice == buttonpaper && computerChoice == 'SCISSOR') ||
        (playerChoice == buttonScissor && computerChoice == 'ROCK')) {
        //Computer won
        console.log("Computer Scores");
        computerScore++;
    }
    else if (
        (playerChoice == buttonrock && computerChoice == 'SCISSOR') ||
        (playerChoice == buttonpaper && computerChoice == 'ROCK') ||
        (playerChoice == buttonScissor && computerChoice == 'PAPER')) {
        //player won
        console.log("Player Scores");
        playerScore++;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    // alert('New Game');
    // game();
}

function score() {
    console.log(playerScore);
    console.log(computerScore);
}



