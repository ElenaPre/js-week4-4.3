let randomNumber = Math.floor(Math.random() * 3 + 1);

let playerMove = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

if (randomNumber == 1) {
  printMessage('computer enter "kamień"');
} else if (randomNumber == 2) {
  printMessage('computer enter "papier"');
} else if (randomNumber == 3) {
  printMessage('computer enter "nożyce."');
}

if (playerMove == 1) {
  printMessage('player enter "kamień"');
} else if (playerMove == 2) {
  printMessage('player enter "papier"');
} else if (playerMove == 3) {
  printMessage('player enter "nożyce."');
} else printMessage("zly ruch");

if (playerMove > 3 || playerMove < 1) {
  printMessage("Zly ruch. Gra się skończyła, spróbuj ponownie");
} else if (
  (playerMove == 1 && randomNumber == 1) ||
  (playerMove == 2 && randomNumber == 2) ||
  (playerMove == 3 && randomNumber == 3)
) {
  printMessage(" Remis !!!");
} else if (
  (playerMove == 1 && randomNumber == 2) ||
  (playerMove == 2 && randomNumber == 3) ||
  (playerMove == 3 && randomNumber == 1)
) {
  printMessage("Computer WIN!!!");
} else printMessage("Player WIN!!!");
