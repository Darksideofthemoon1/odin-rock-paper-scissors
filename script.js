let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};

const playRound = function (playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    return `Draw You both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
};

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    const player = prompt("Rock Paper or Scissors?");
    const computer = getComputerChoice();
    console.log(playRound(player, computer));
    console.log(
      `player score: ${playerScore} computer score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log("Player Wins the Game!");
  } else if (computerScore > playerScore) {
    console.log("Computer Wins the Game!");
  } else {
    console.log("The Game was a draw!");
  }
};
playGame();
