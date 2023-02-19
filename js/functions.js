let gameCount = 0;
let compWinCount=0;
let playWinCount=0;
let remisCount=0;

function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function getComputerAction(){
 return Math.floor(Math.random() * 3 + 1);
}

function playGame(playerInput){
  clearMessages();
  gameCount++;
  printMessage('Game number : '+gameCount);
	displayResult(getMoveName(getComputerAction()),getMoveName(playerInput));
  }

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "stone";
  } else if (argMoveId == 2) {
    return "paper";
  } else if (argMoveId == 3) {
    return "scissors";
  } else {
    printMessage("I don't know the move id " + argMoveId + ".");
    return "unknown move";
  }
}

function displayResult(argComputerMove, argPlayerMove) {
	printMessage("The computer chose - " +argComputerMove);
	printMessage("The player chose - "+ argPlayerMove);
  if (argComputerMove == "nieznany ruch" || argPlayerMove == "nieznany ruch") {
    printMessage("Wrong move. Game over, please try again");
  } else if (
    argPlayerMove == argComputerMove
  ) {
    printMessage(" Remis !!!");
    remisCount++;
    printMessage('Computer won '+compWinCount+" times, player won "+playWinCount+" times, remises "+remisCount);
  } else if (
    (argPlayerMove == "stone" && argComputerMove == "paper") ||
    (argPlayerMove == "paper" && argComputerMove == "scissors") ||
    (argPlayerMove == "scissors" && argComputerMove == "stone")
  ) {
    printMessage("Computer WIN!!!");
    compWinCount++;
    printMessage('Computer won '+compWinCount+" times, player won "+playWinCount+" times, remises "+remisCount);
  } else {printMessage("Player WIN!!!");
  playWinCount++;
  printMessage('Computer won '+compWinCount+" times, player won "+playWinCount+" times, remises "+remisCount);
}}

