function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;

  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

  let numberOfGame = 0;
function playGame(playerInput){
  
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);
	let playerMove = getMoveName(playerInput);
  clearMessages();
  numberOfGame=numberOfGame+1;
  printMessage('Game number : '+numberOfGame);
	displayResult(computerMove, playerMove);
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
function displayResult(argComputerMove, argPlayerMove) {
	printMessage("Komputer wybrał - " +argComputerMove);
	printMessage("Gracz wybrał - "+ argPlayerMove);
  if (argComputerMove == "nieznany ruch" || argPlayerMove == "nieznany ruch") {
    printMessage("Zly ruch. Gra się skończyła, spróbuj ponownie");
  } else if (
    argPlayerMove == argComputerMove ||
    argPlayerMove == argComputerMove ||
    argPlayerMove == argComputerMove
  ) {
    printMessage(" Remis !!!");
  } else if (
    (argPlayerMove == "kamień" && argComputerMove == "papier") ||
    (argPlayerMove == "papier" && argComputerMove == "nożyce") ||
    (argPlayerMove == "nożyce" && argComputerMove == "kamień")
  ) {
    printMessage("Computer WIN!!!");
  } else printMessage("Player WIN!!!");
}
