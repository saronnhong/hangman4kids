var directionsText = document.getElementById("directions-text");
var hangmanText = document.getElementById("hangman-text");
var userChoiceText = document.getElementById("userchoice-text");
var tryCountText = document.getElementById("tryCount-text");
var guessSoFarText = document.getElementById("guess-text");
var endGameText = document.getElementById("endGameMessage-text");
var scoreText = document.getElementById("score-text");
document.getElementById('continueButton').style.visibility = 'hidden';


var gotDictArray = ["aubrey", "eliana", "spidergwen", "squirrelgirl", "donut", "true", "sofia", "msmarvel", "rice", "cookie", "ninja", "unclesaron", "cake", "tayo", "cupcake", "sprinkles", "spiderman", "captainmarvel", "ironman", "quake", "ballerina", "mommy", "daddy", "bonchon", "snow", "hideandseek", "govisitunclesaroninsandiego", "beach", "sand", "squirtle", "chang", "milk", "chocolatechip"];
var chosenWord = gotDictArray[Math.floor(Math.random() * gotDictArray.length)];
var indivChar = chosenWord.split("");
var answerArray = [];
var guessArray = [];
var usedKeysArray = [];
var correctGuessCount = 0;
var emptyChar = [];
maxTry = 9;
var score=0;


for (var i = 0; i < indivChar.length; i++) {                //display underscore in place of chars
    emptyChar.push("_");
}

function locations(substring, string) {                       //repeats indexOf to find all same characters in word
    var a = [], i = -1;
    while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i);
    return a;
}

function restart() {
    emptyChar.length = 0;
    chosenWord = "";
    indivChar = "";
    usedKeysArray.length = 0;
    correctGuessCount = 0;
    maxTry = 9;
    chosenWord = gotDictArray[Math.floor(Math.random() * gotDictArray.length)];
    indivChar = chosenWord.split("");

    for (var i = 0; i < indivChar.length; i++) {                //display underscore in place of chars
        emptyChar.push("_");
    }
    hangmanText.textContent = emptyChar.join(" ");
    tryCountText.textContent = "Tries: " + maxTry;
    guessSoFarText.textContent = "Guesses: ";
    endGameText.textContent = "";
    directionsText.textContent = "Press any key to get started";
    score=0;
    document.getElementById('continueButton').style.visibility = 'visible';
    scoreText.textContent = "Score: 0 "
}
function continueGame() {
    emptyChar.length = 0;
    chosenWord = "";
    indivChar = "";
    usedKeysArray.length = 0;
    correctGuessCount = 0;
    chosenWord = gotDictArray[Math.floor(Math.random() * gotDictArray.length)];
    indivChar = chosenWord.split("");

    for (var i = 0; i < indivChar.length; i++) {                //display underscore in place of chars
        emptyChar.push("_");
    }
    hangmanText.textContent = emptyChar.join(" ");
    tryCountText.textContent = "Tries: " + maxTry;
    guessSoFarText.textContent = "Guesses: ";
    endGameText.textContent = "";
    directionsText.textContent = "Seven blessings to you!";
    maxTry = maxTry;
    document.getElementById('startButton').style.visibility = 'hidden';
}

hangmanText.textContent = emptyChar.join(" ");
tryCountText.textContent = "Tries: " + maxTry;
guessSoFarText.textContent = "Guesses: ";

document.onkeyup = function (event) {
    var keyPressed = event.key;

    var keyExist = usedKeysArray.indexOf(keyPressed);       //Check if input letter already has been used
    if (keyExist !== -1) {
                                                            //* If yes, ask for a new keypress

    }
    else {
        usedKeysArray.push(keyPressed);                     //* If no, add to used keys.
        

        for (var i = 0; i < chosenWord.length; i++) {
            if (indivChar[i] === keyPressed) {
                guessArray[i] = keyPressed;
                                    //- Check if input matches first letter
                correctGuessCount++;                             //a. if yes, fill out guess array
            }                                                //c. continue until end of letter
        }
        
        if (guessArray.indexOf(keyPressed) === -1) {
            maxTry--;                                           //- Decrease # of tries if letter was not in answer
            
        }
        if (correctGuessCount === chosenWord.length) {              //- At the end, check if games is won
            
            endGameText.textContent = ("Winner! You get a popsicle!");
            score++;
            document.getElementById('startButton').style.visibility = 'hidden';
            document.getElementById('continueButton').style.visibility = 'visible';
            


        }
        if (maxTry < 1) {
                                                                      //- Check if game is lost
            endGameText.textContent = ("You Lose! Time to go to bed.");
            document.getElementById('continueButton').style.visibility = 'hidden';
            document.getElementById('startButton').style.visibility = 'visible';
        }

        var correctChar = locations(keyPressed, indivChar);                     //creates array with "_" when blank and fill in with characters as they are guessed
        for (var i = 0; i < chosenWord.length; i++) {
            if (correctChar.length > i) {
                emptyChar.splice(correctChar[i], 1, keyPressed);
                
            }
        }

        hangmanText.textContent = emptyChar.join(" ");
        tryCountText.textContent = "Tries: " + maxTry;
        guessSoFarText.textContent = "Guesses: " + usedKeysArray.join(" ");
        directionsText.textContent = " ";
        scoreText.textContent = "Score: " + score; 
        
    }


}