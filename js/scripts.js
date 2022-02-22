`strict mode`;
// business logic

// Game - constructor DONE
function Game(playerOne, playerTwo, turnScoreTotal, turn, winner) {
  this.playerOne = new Player(),
  this.playerTwo = new Player(),
  this.turnScore = turnScore, 
  this.turn = turn, // roll 1 - switch turn and lose points
  this.winner = winner
}

// Player - constructor DONE
function Player(score) {
  this.score = score;
}

// dice object
// dice.roll(); <-------how to call roll function
let dice = {
  sides: 6,
  roll: function() {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// add to turn score total - unheld (unsolidified points - could roll 1)
// Game.prototype.addTurnPoints = function(roll()) {
//   this.turnScore = turnScore + dice.roll();
// }

Game.prototype.addToTurnTotal = function(roll) { // this prototype adds each value from the rolled dice to the turnTotal
  this.turnTotal += roll;
}

// add turn total to score - hold (decide to end turn)

// switch turn - roll 1

// switch(roll) {
//   case(1):
//     player.score = 0;
//     player.turn = false;
//     break;
//   case(hold)
// }

// check winner - anyone have 100?

// while (player1Score < 100 || player2Score < 100) {
//   console.log(dice.roll());
// }

// while (player1Score < 100 || player2Score < 100) {
//   dice.roll();
//   player1Score += dice.roll();
//   player2Score += dice.roll();
//   if (player1Score === 100) {
//     console.log(`UPDATED - Player 1 Score: ${player1Score} 
//     Player 2 Score: ${player2Score}`);
//   }
// }
  

// console.log(`OUTDATED - Player 1 Score: ${player1Score} 
// Player 2 Score: ${player2Score}`);

// Set a condition to true
// const iceCapsAreMelting = true;
// let polarBears = 5;

// // Initiate infinite loop
// while (iceCapsAreMelting) {
//   console.log(`There are ${polarBears} polar bears.`);
//   polarBears--;
//   // Terminate infinite loop when following condition is true
//   if (polarBears === 0) {
// 	console.log("There are no polar bears left.");
//   	break;
//   }
// }

let player1Score = 0;
let player2Score = 0;

while (player1Score < 100 || player2Score < 100) {
  dice.roll();
  player1Score += dice.roll();
  player2Score += dice.roll();
  console.log(`Player 1 Score: ${player1Score}
Player 2 Score: ${player2Score}`)
  if (player1Score >= 100 || player2Score >= 100) {
  break;
  }
}

// function pigDiceWinner(player1Score, player2Score) {
//   if (player1Score > player2Score);
//   console.log(`Player 1 wins!`);
// } else if {
//   console.log(`Player 2 wins!`);
// }

// user interface logic