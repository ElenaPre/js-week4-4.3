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
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
}

let gameCount = 0;
let compWinCount=0;
let playWinCount=0;
let remisCount=0;
function displayResult(argComputerMove, argPlayerMove) {
	printMessage("Komputer wybrał - " +argComputerMove);
	printMessage("Gracz wybrał - "+ argPlayerMove);
  if (argComputerMove == "nieznany ruch" || argPlayerMove == "nieznany ruch") {
    printMessage("Zly ruch. Gra się skończyła, spróbuj ponownie");
  } else if (
    argPlayerMove == argComputerMove
  ) {
    printMessage(" Remis !!!");
    remisCount++;
    printMessage('Computer won '+compWinCount+" times, player won "+playWinCount+" times, remises "+remisCount);
  } else if (
    (argPlayerMove == "kamień" && argComputerMove == "papier") ||
    (argPlayerMove == "papier" && argComputerMove == "nożyce") ||
    (argPlayerMove == "nożyce" && argComputerMove == "kamień")
  ) {
    printMessage("Computer WIN!!!");
    compWinCount++;
    printMessage('Computer won '+compWinCount+" times, player won "+playWinCount+" times, remises "+remisCount);
  } else {printMessage("Player WIN!!!");
  playWinCount++;
  printMessage('Computer won '+compWinCount+" times, player won "+playWinCount+" times, remises "+remisCount);
}}

