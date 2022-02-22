`strict mode`;
// business logic

// Game - constructor
function Game(playerOne, playerTwo, turnScoreTotal, turn, winner) {
  this.playerOne = new Player(),
  this.playerTwo = new Player(),
  this.turnScoreTotal = turnScoreTotal, 
  this.turn = turn, // roll 1 - switch turn and lose points
  this.winner = winner
}

// Player - constructor
function Player(score) {
  this.score = 0;
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
Game.prototype.unclaimedTurnPoints = dice {
  this.turnScoreTotal = turnScoreTotal + dice.roll();
}


// add turn total to score - hold (decide to end turn)

// switch turn - roll 1

// check winner - anyone have 100?

// user interface logic