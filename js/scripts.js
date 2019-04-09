//Business Logic

//Object for name and scores
function Player1(name1, player1Roll, player1RoundScore, player1TotalScore) {
  this.name1 = name1;
  this.player1Roll = player1Roll;
  this.player1RoundScore = [];
  this.player1TotalScore = [];
}

//function to add multiple rolls to create a round score
Player1.prototype.Round = function () {
  return ths.roll ++;
}
//Dice roll
function roll() {
  return Math.floor((Math.random()*6) +1);
}

//User Interface Logic

$(document).ready(function() {
  var player1Roll = roll();
  $("#roll1").click(function(event) {
    // alert(player1Roll);
    $("#player1Roll").append(player1Roll);
    event.preventDefault();
  })
})
