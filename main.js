const title = document.querySelector(".title");
const battlefield = document.querySelector(".battlefield");
const blockStagePlayer = document.querySelector(".block-stage-player");

const playerBattle = document.querySelector(".player-battle");
const playerPoint = document.querySelector(".player")

const computerBattle = document.querySelector(".computer-battle");
const computerPoint = document.querySelector(".computer");
const blockStageComputer = document.querySelector(".block-stage-computer");

const playerChoices = document.querySelector(".player-choices");
const characters = document.querySelector(".characters");
const buttonChoices = document.querySelector(".buttons");

const finalResult = document.querySelector(".final-result");
const final = document.querySelector(".final");

/* Game logic */

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

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
        title.textContent = "You won this round!";
        playerPoint.textContent = `Player: ${humanScore}`;
    } else {
        computerScore++;
        title.textContent = "You lost this round!";
        computerPoint.textContent = `Computer: ${computerScore}`;
    }

    if (humanScore === maxScore || computerScore === maxScore) {
        declareFinalWinner();
    }
}

function declareFinalWinner() {
    characters.style.pointerEvents = "none";
    if (humanScore > computerScore) {
        final.textContent = "Congratulations! You win the game!";
    } else if (computerScore > humanScore) {
        final.textContent = "Game Over! The computer wins the game!";
    } else {
        final.textContent = "It's a draw! No one wins the game!";
    }
}

/*function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    finalResult.textContent = `Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    
    if (humanScore > computerScore) {
        final.textContent = "You won the game!";
    } else if (computerScore > humanScore) {
        final.textContent = "You lost the game!";
    } else {
        final.textContent = "Draw! No one wins!";
    }
}*/

characters.onclick = (event) => {
    const buttonClicked = event.target.getAttribute("id");
    const humanCharacter = buttonClicked;
    const computerCharacter = getComputerChoice();

    const playerImgChoice = document.createElement("img");
    playerImgChoice.src = `./images/${humanCharacter}.png`;
    playerImgChoice.setAttribute("class", `character-choice ${humanCharacter}`);

    const computerImgChoice = document.createElement("img");
    computerImgChoice.src = `./images/${computerCharacter}.png`;
    computerImgChoice.setAttribute("class", `character-choice ${computerCharacter}`);

    /*
    if (blockStagePlayer.childElementCount == 1) {
        blockStagePlayer.insertBefore(playerImgChoice, blockStagePlayer.firstchild);
        blockStageComputer.insertBefore(computerImgChoice, blockStageComputer.firstChild);
    } else {
        blockStagePlayer.replaceChild(playerImgChoice, blockStagePlayer.firstChild);
        blockStageComputer.replaceChild(computerImgChoice, blockStageComputer.firstChild);
    }
    */

    if (blockStagePlayer.childElementCount == 1) {
        blockStagePlayer.appendChild(playerImgChoice);
    } else {
        blockStagePlayer.replaceChild(playerImgChoice, blockStagePlayer.lastChild);
    }

    if (blockStageComputer.childElementCount == 1) {
        blockStageComputer.appendChild(computerImgChoice);
    } else {
        blockStageComputer.replaceChild(computerImgChoice, blockStageComputer.lastChild);
    }

    playRound(humanCharacter, computerCharacter);
}

