
// Initialize Variables
var sum = 100;
var bet;

//Initailize functions

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Game Logic

while(sum > 0) {
  
  //Keep prompting for an input if bet is not within $5-$10 or if there are insufficient funds
  do {
    bet = prompt("Place a bet between $1 and $10")
  } while (sum < bet || bet > 10);

  //Keep prompting for an input if select is not within 1-10
  do {
    var select = parseInt(prompt("Guess a number between 1 and 10"));
  } while ( select < 1 || select > 10);

  console.log("You selected:", select)
  var draw = getRandomIntInclusive(1,10);
  console.log("The number is:", draw);

  if (select === draw) {
    sum += bet;
    alert("Congrats you guessed right and won your bet");
  } else {
    if (select === (draw + 1) || select === (draw - 1)) {
      alert("Sorry, you didn't guess right but close enough so you don't lose your bet");
    } else {
      sum -= bet;
      alert("Sorry, you didn't guess right and lose your bet");
    }
  }
  console.log("Your remaining amount is:", sum);
}

alert("You have no more money left. Game over");




