const title = document.querySelector(".title");
const battlefield = document.querySelector(".battlefield");
const blockStage = document.querySelector(".block-stage");

const playerBattle = document.querySelector(".player-battle");
const playerPoint = document.querySelector(".player")

const computerBattle = document.querySelector(".computer-battle");
const computerPoint = document.querySelector(".computer");

const playerChoices = document.querySelector(".player-choices");
const characters = document.querySelector(".characters");
const buttonChoices = document.querySelector(".buttons");

const finalResult = document.querySelector(".final-result");
const final = document.querySelector(".final");

/* Game logic */

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    const value = ["mario", "peach", "bowser"];
    const choice = Math.floor(Math.random() * 3);
    return value[choice];
}

function getHumanChoice(choice) {
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        title.textContent = "It is a tie!";
        return;
    }

    const winCoditions = {
        mario: "bowser",
        peach: "mario",
        bowser: "peach"
    };

    if (winCoditions[humanChoice] === computerChoice) {
        humanScore++;
        title.textContent = "You won!";
        playerPoint.textContent = `Player: ${humanScore}`;
    } else {
        computerScore++;
        title.textContent = "You lose!";
        computerPoint.textContent = `Computer: ${computerScore}`;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    finalResult.textContent = `Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    
    if (humanScore > computerScore) {
        final.textContent = "You win the game!";
    } else if (computerScore > humanScore) {
        final.textContent = "You lose the game!";
    } else {
        final.textContent = "Draw! No one wins!";
    }
}

characters.onclick = (event) => {
    const buttonClicked = event.target.getAttribute("id");
    const humanCharacter = buttonClicked;
    const computerCharacter = getComputerChoice;

    const playerImgChoice = document.createElement("img");
    playerImgChoice.src = `./images/${buttonClicked}.png`;
    playerImgChoice.setAttribute("class", "character-choice");

    const computerImgChoice = document.createElement("img");
    playerImgChoice.src = `./images/${computerCharacter}.png`;
    playerImgChoice.setAttribute("class", "character-choice");


}

