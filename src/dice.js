// DICE GAME, PART ONE
/*
function rollDice() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let sumOfDice = dice1 + dice2;

  return `Dice rolled are ${dice1} and ${dice2} with the sum of ${sumOfDice}`;
}

let output = rollDice();

console.log(output);
*/

// BONUS CHALLENGE

let diceRoll = 0;
let info = "Dice rolled are ";
let output;
let diceSum = 0;

function rollDice(rolls) {
  for (let i = 0; i <= rolls; i++) {
    diceRoll = Math.floor(Math.random() * 6) + 1;

    if (i === rolls - 1) {
      diceSum += diceRoll;
      output = info += `and ${diceRoll} with the sum of ${diceSum}`;
      return output;
    } else {
      diceSum += diceRoll;
      output = info += `${diceRoll}, `;
    }
  }
}

output = rollDice(5);

console.log(output);
