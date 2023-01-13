let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."));
displayResult(computerMove, playerMove);