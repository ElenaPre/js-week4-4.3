function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;

  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
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
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

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
