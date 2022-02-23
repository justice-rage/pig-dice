`strict mode`;
// business logic

//business logic
let player1="";
let player2="";

let throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}

// hold
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

// // changing turn
// Player.prototype.changeturn = function () {
//   if (this.roll ===1) {
//     this.turn = false;
//   } else {
//     this.turn = true;
//   }
// }
// check for 100
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.newGame = function () {
  //debugger;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}

let clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    let player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    let player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    // player1.newGame();
    // player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});

// function Game(playerOne, playerTwo, turnScoreTotal, turn, winner) {
//   this.playerOne = new Player(),
//   this.playerTwo = new Player(),
//   this.turnScore = turnScore, 
//   this.turn = turn,
//   this.winner = winner
// }

// function Player(score) {
//   this.score = score;
// }

// let player1 = {
//   score: 0,
// }

// let dice = {
//   sides: 6,
//   roll: function() {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }

// Game.prototype.addToTurnTotal = function(roll) {
//   this.turnTotal += roll;
// }

// let player1Score = 0;
// let player2Score = 0;

// while (player1Score < 100 || player2Score < 100) {
//   dice.roll();
//   player1Score += dice.roll();
//   player2Score += dice.roll();
//   console.log(`Player 1 Score: ${player1Score}
// Player 2 Score: ${player2Score}`)
//   if (player1Score >= 100 || player2Score >= 100) {
//   break;
//   }
// }