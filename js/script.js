// Papier, kamień, nożyce - stałe odpowiedzi
var computerMove, PlayerMove;
PlayerMove = 'papier';
computerMove = 'kamień';
printMessage('Zagrałeś ' + PlayerMove + '. Komputer zagrał ' + computerMove + '! Wygrywasz!');

//Losowanie liczby od 11 do 19
var randomNumber;
randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);

//Papier, kamień, nożyce - łosowe odpowiedzi komputera

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