//!Set variables
//The list of words to choose from
var wordList = [
    "snowflake",
    "present",
    "santa",
    "ornaments",
    "sleigh",
    "reindeer",
    "krampus",
    "gingerbread",
    "cookies",
    "frosty",
    "lights",
    "cuddles"
];

//The randomly selected word
var wordRandom = "";
//The array of letters in the randomly selected word
var wordLetters = [];
//array for wrong guesses
var lettersGuessed = [];

var answerArray = [];
// letter that the player
var userGuess = "";

var wordSpaces = 0;

//Stats variables
var guessesLeft = 10;
var wins = 0;
var losses = 0;

//!Functions

// sets intial stats in html
function setStats() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("totalWins").innerHTML = wins;
}

// reset function
function reset() {
    guessesLeft = 10;
    lettersGuessed = [];
    answerArray = [];
    wordSelection();
}

// runs word selection and placement into html
function wordSelection() {
    //Select a random word from the wordList array
    wordRandom = wordList[Math.floor(Math.random() * wordList.length)];
    //split the word into new array
    wordLetters = wordRandom.split("");
    // stores the length of the current word as a number
    wordSpaces = wordLetters.length;
    // for testing purposes
    alert(wordRandom)
    //Creates an array from the selected word and displays __ in the HTML for each letter in the word
    for (var i = 0; i < wordLetters.length; i++) {
        answerArray[i] = "  __  ";
        document.getElementById("word").innerHTML = answerArray.join(" ");
    }
}

// alert(wordRandom)

function checkLetters() {


}

function gameOver() {
    if (wordLetters.toString() == answerArray.toString()) {
        wins++;
        reset();
        document.getElementById("totalWins").innerHTML = wins;
    } else if (guessesLeft === 0) {
        losses++;
        reset();

    }
}

//!Put it all together
//sets all starter stats
setStats()
//chooses the word
wordSelection()

// //!Collects user input
document.onkeyup = function (event) {
    var userGuess = (event.key);
    console.log(userGuess)

    var remainingLetters = wordRandom.length;
    console.log(remainingLetters)
    for (var j = 0; j < wordRandom.length; j++) {
        if (wordRandom[j] === userGuess && remainingLetters > 0) {
            answerArray[j] = userGuess;
            remainingLetters--;
            console.log(remainingLetters)
            console.log(answerArray)
            document.getElementById("word").innerHTML = answerArray.join(" ");
        }
    }


    gameOver();

    document.getElementById("lettersGuessed").innerHTML = " " + lettersGuessed.join(" ");
    document.getElementById("guessesLeft").innerHTML = " " + guessesLeft;
}




// //!Checks that the userGuess exists in the word array
// // while (remainingLetters > 0) {



//!Game code

//!Update stats
//!keep collecting input
//!Update answerArray and remainingLetters