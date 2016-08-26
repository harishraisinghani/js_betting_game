$(function() {

  // Initialize Variables
  var sum = 100;
  var getBet;
  var getSelect;

  function updateBalance() {
    $('#balance').text(sum);
  }

  //Initailize functions

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 function withinOne(guess,actual) {
    if (guess === (actual + 1) || guess === (actual - 1)) {
      return true;
    }
  }

  function processBets(event) {
    if (sum > 0) {
      getBet = parseInt($("#bet").val());
      getSelect = parseInt($("#select").val());
      var getDraw = getRandomIntInclusive(1,10);
      
      console.log("You selected:", getSelect);
      console.log("The number is:", getDraw);

      if (getSelect === getDraw) {
          sum += getBet;
          console.log("Congrats you guessed right and won your bet");
      } else {
        if (withinOne(getSelect, getDraw)) {
          console.log("Sorry, you didn't guess right but close enough so you don't lose your bet");
        } else {
          sum -= getBet;
          console.log("Sorry, you didn't guess right and lose your bet");
        }
      }
      console.log("Your remaining amount is:", sum);
      updateBalance();
      if (sum <= 0) {
        console.log("You have no more money left. Game over");
      }
    } 
  };//processBets

  // Game Logic
  $("button").on('click', processBets);

  
});


