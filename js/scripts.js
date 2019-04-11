//Business Logic

//Object for name and scores
function Player1() {
  this.player1Roll = 0;
  this.player1RoundScore = 0;
  this.player1TotalScore = 0;
}
function Player2() {
  this.player2Roll = 0;
  this.player2RoundScore = 0;
  this.player2TotalScore =0;
}

//function to add multiple rolls to create a round score
Player1.prototype.Roll = function () {
  this.player1Roll = Math.floor(Math.random()*6) +1;
  this.player1RoundScore += this.player1Roll;
}
Player2.prototype.Roll = function () {
  this.player2Roll = Math.floor(Math.random()*6) +1;
  this.player2RoundScore += this.player2Roll;
}

//function to hold scores and store them as total score
Player1.prototype.Hold = function () {
  this.player1TotalScore = this.player1TotalScore + this.player1RoundScore;
}
Player2.prototype.Hold = function () {
  this.player2TotalScore = this.player2TotalScore + this.player2RoundScore;
}
//User Interface Logic

$(document).ready(function() {
  var inputtedName1 = $("input#name1").val();
  var inputtedName2 = $("input#name2").val();
  var newPlayer1 = new Player1();
  var newPlayer2 = new Player2();
  $("#player1TotalScore").text(0);
  $("#player2TotalScore").text(0);

  $("#start").click(function(event) {
    $("Opening").hide();
    $("#game").show();
    
  })
  //Player 1 Rolls
  $("#roll1").click(function(event) {
    event.preventDefault();
    newPlayer1.Roll();
    $("#player1Roll").text(newPlayer1.player1Roll);
    $("#player1RoundScore").text(newPlayer1.player1RoundScore);
  });
  //Player 1 Holds
  $("#hold1").click(function(event) {
    newPlayer1.Hold();
    $("#player1TotalScore").text(newPlayer1.player1TotalScore)
  });
  //Player 2 Rolls
  $("#roll2").click(function(event) {
    event.preventDefault();
    newPlayer2.Roll();
    $("#player2Roll").text(newPlayer2.player2Roll);
    $("#player2RoundScore").text(newPlayer2.player2RoundScore);
  });
  //Player 2 Holds
  $("#hold2").click(function(event) {
    newPlayer2.Hold();
    $("#player2TotalScore").text(newPlayer2.player2TotalScore)
  });
})
