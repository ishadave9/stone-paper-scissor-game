let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score"); 

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"]; 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const updateScores = () => {
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, play again!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("You win");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    updateScores();
};

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true; 
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
