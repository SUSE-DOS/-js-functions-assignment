// PLAY ROCK, PAPER AND SCISSORS

let computersChoice = "";
let compChoices = ["rock", "paper", "scissors"];
let output = 0;

function playGame(playersChoice) {
  computersChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
  if (
    playersChoice !== "rock" &&
    playersChoice !== "paper" &&
    playersChoice !== "scissors"
  ) {
    output = "The game can only accept 'rock', 'paper' or 'scissors'";
    return output;
  } else if (computersChoice === "rock" && playersChoice === "scissors") {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. User loses!`;
    return output;
  } else if (computersChoice === "rock" && playersChoice === "paper") {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. User wins!.`;
    return output;
  } else if (computersChoice === "paper" && playersChoice === "rock") {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. User loses!.`;
    return output;
  } else if (computersChoice === "paper" && playersChoice === "scissors") {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. User wins!.`;
    return output;
  } else if (computersChoice === "scissors" && playersChoice === "paper") {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. User loses!.`;
    return output;
  } else if (computersChoice === "scissors" && playersChoice === "rock") {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. User wins!.`;
    return output;
  } else {
    output = `Computer picked: ${computersChoice}. User picked: ${playersChoice}. It's a tie!.`;
    return output;
  }
}

playGame("rock");

console.log(output);
