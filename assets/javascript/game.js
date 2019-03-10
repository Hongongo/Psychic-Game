// Global Variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = null;
var guessesLeft = 9;
var guessesMade = [];
var wins = 0;
var losses = 0;

document.onkeyup = function(){
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (userGuess == computerGuess) {
	 	wins++;
	 	guessesLeft = 9;
	} else {
	 	guessesMade++;
	 	guessesLeft--;
	 	document.querySelector('#guessesSoFar').innerHTML += userGuess + " ";
	 		if (guessesLeft == 0) {
	 			losses++;
	 			guessesLeft = 9;
	 			userGuess = null;
	 			document.querySelector('#guessesSoFar').innerHTML = userGuess;
 			}
 		}

 	document.querySelector('#winsCount').innerHTML = wins;
 	document.querySelector('#lossesCount').innerHTML = losses;
 	document.querySelector('#guessesLeft').innerHTML = guessesLeft;
}