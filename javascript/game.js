var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guess = [];

    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log (computerLetter);

     var scoreResults =
  	"<p>Wins: " + wins + "</p>" +
  	"<p>Losses: " + losses + "</p>" +
 	"<p>Guesses Left: " + guessesLeft + "</p>" +
  	"<p>Your Guesses so far: " + guess +"</p>";

  	document.querySelector("#game").innerHTML = scoreResults;	

  	document.onkeyup = function(event) {

	  	var userInput = event.key;
	  	userInput = userInput.toLowerCase();
	  	if (computerChoices.indexOf(userInput) == -1) {
	 		alert("Invalid guess!") 
	 	} 
	 	else if (guess.indexOf(userInput) !== -1){
	 		alert("You have already guessed this letter!");
	 	} 

	 	else  { guess.push(userInput);


		 	if (userInput != computerChoices) {
		 		guessesLeft--;
		  	}

		  	if (computerLetter === userInput) {
		  		wins++;
		  		guessesLeft = 9;
		  		guess = [];
		  		computerLetter = computerChoices[Math.floor(Math.random() * 26)];
		  		console.log(computerLetter);
		  	}


		  	if (guessesLeft === 0) {
		  		losses++;
		  		guessesLeft = 9;
		  		guess = [];
		  		computerLetter = computerChoices[Math.floor(Math.random() * 26)];
		  		console.log(computerLetter);
		  	}
	  	}

	     var scoreResults =
	  	"<p>Wins: " + wins + "</p>" +
	  	"<p>Losses: " + losses + "</p>" +
	 	"<p>Guesses Left: " + guessesLeft + "</p>" +
	  	"<p>Your Guesses so far: " + guess +"</p>";

  	document.querySelector("#game").innerHTML=scoreResults;	  	
  	}