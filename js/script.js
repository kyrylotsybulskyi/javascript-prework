// Papier, kamień, nożyce

var argButtonName, BattonPaper, BattonRock, BattonScissors, buttonTest, PlayerNumber, ComputerNumber, ResultNumber;

/**
 * Describe this function...
 */
ResultNumber = 0;
PlayerNumber = 0;
ComputerNumber = 0;
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  ResultNumber = ResultNumber + 1;
  console.log(ResultNumber + ' zagrano rund');
  if (argMoveId == 1) {
    return 'kamień';    
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    PlayerNumber = PlayerNumber + 1;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    PlayerNumber = PlayerNumber + 1;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    PlayerNumber = PlayerNumber + 1;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
    ComputerNumber = ComputerNumber + 1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printMessage('Twoje punkty ' + PlayerNumber + ', -  Moje punkty  ' + ComputerNumber);
  if (ResultNumber < 5) {
    printMessage('Gramy 5 rund. Jeszcze zostało '  + (5 - ResultNumber) + ' rund' );
  }  else {
    printMessage('Na dzisiaj starczy :) ')
  }
}

console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);


}
BattonRock = document.getElementById('button-rock');
BattonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
BattonPaper = document.getElementById('button-paper');
BattonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
BattonScissors = document.getElementById('button-scissors');
BattonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

