// business logic

// dice object
// dice.roll(); <-------how to call roll function
let dice = {
  sides: 6,
  roll: function() {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// Starting Score: player 1 score = 0
// Starting Score: player 2 score = 0


// user interface logic