// Papier, kamień, nożyce - stałe ruchy
var computerMove, PlayerMove;
PlayerMove = 'papier';
computerMove = 'kamień';
printMessage('Zagrałeś ' + PlayerMove + '. Komputer zagrał ' + computerMove + '! Wygrywasz!');

//Losowanie liczby od 11 do 19
var randomNumber;
randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);

//Papier, kamień, nożyce - łosowe ruchy komputera

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);
computerMove = 'papier';

//Papier, kamień, nożyce - ruchy gracza

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'Myślę że chciałeś powiedzieć 1.' + ' kamień';
}
printMessage('Twój ruch: ' + playerMove);