//Business Logic

//Object for name and scores
function Player() {
  this.playerRoll = 0;
  this.playerRoundScore = 0;
  this.playerTotalScore = 0;
}


//function to add multiple rolls to create a round score
Player.prototype.Roll = function () {
  this.playerRoll = Math.floor(Math.random()*6) +1;
  this.playerRoundScore += this.playerRoll;
}


//function to hold scores and store them as total score
Player.prototype.Hold = function () {
  this.playerTotalScore = this.playerTotalScore + this.playerRoundScore;
}


$(document).ready(function() {
  var newPlayer1 = new Player();
  var newPlayer2 = new Player();
  $("#player1TotalScore").text(0);
  $("#player2TotalScore").text(0);

  $("#start").click(function(event) {
    var character1 = $("input:radio[name=player1]:checked").val();
    var inputtedName2 = $("input#name2").val();
    $("#Opening").hide();
    $("#game").show();
    $("#player1Character1").text(character1);
  });
  //Player 1 Rolls
  $("#roll1").click(function(event) {
    event.preventDefault();
    newPlayer1.Roll();
    $("#player1Roll").text(newPlayer1.playerRoll);
    $("#player1RoundScore").text(newPlayer1.playerRoundScore);
  });
  //Player 1 Holds
  $("#hold1").click(function(event) {
    newPlayer1.Hold();
    $("#player1TotalScore").text(newPlayer1.playerTotalScore)
  });
  //Player 2 Rolls
  $("#roll2").click(function(event) {
    event.preventDefault();
    newPlayer2.Roll();
    $("#player2Roll").text(newPlayer2.playerRoll);
    $("#player2RoundScore").text(newPlayer2.playerRoundScore);
  });
  //Player 2 Holds
  $("#hold2").click(function(event) {
    newPlayer2.Hold();
    $("#player2TotalScore").text(newPlayer2.playerTotalScore)
  });
})
