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

//Stats variables
var guessesLeft = 10;
var wins = 0;
var losses = 0;

//!Functions

function setStats() {
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("totalWins").innerHTML = wins;
}


function wordSelection() {

    //Select a random word from the wordList array
    wordRandom = wordList[Math.floor(Math.random() * wordList.length)];

    //split the word into new array
    wordLetters = wordRandom.split("");

    // for testing purposes
    alert(wordRandom)

    //Creates an array from the selected word and displays __ in the HTML for each letter in the word
    for (var i = 0; i < wordLetters.length; i++) {
        answerArray[i] = "  __  ";
        document.getElementById("word").innerHTML = answerArray.join(" ");
    }
}


setStats()
wordSelection()
// alert(wordRandom)




var remainingLetters = wordRandom.length;
//!Collects user input
document.onkeyup = function (event) {
    var userGuess = event.key
    alert(userGuess);

    //!Checks that the userGuess exists in the word array
    // while (remainingLetters > 0) {
    for (var j = 0; j < wordRandom.length; j++) {
        if (wordRandom[j] === userGuess && remainingLetters > 0) {
            answerArray[j] = userGuess;
            remainingLetters--;
            console.log(remainingLetters)
            console.log(answerArray)
            document.getElementById("word").innerHTML = answerArray.join(" ");
        }
    }
}


//!Game code

//!Update stats
//!keep collecting input
//!Update answerArray and remainingLetters