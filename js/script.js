// Papier, kamień, nożyce

let argButtonName, 
PlayerNumber = 0, 
ComputerNumber = 0, 
ResultNumber = 0

const ButtonPaper = document.getElementById('button-paper'), 
ButtonRock = document.getElementById('button-rock'), 
ButtonScissors = document.getElementById('button-scissors')

ButtonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
ButtonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
ButtonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


/**
 * Describe this function...
 */

function buttonClicked(argButtonName, argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  

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
  printResult('Twoje punkty to ' + PlayerNumber + ' -  ' + ComputerNumber + ' to moje punkty');
  if (ResultNumber < 5) {
    printMessage('Gramy 5 rund. Jeszcze zostało '  + (5 - ResultNumber) + ' rund' );
  }  else {
    printMessage('Na dzisiaj starczy :) ');
    PlayerNumber = 0;
    ComputerNumber = 0;
    ResultNumber = 0;
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


