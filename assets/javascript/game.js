//Array of words to choose from
var wordList = [
    "snowflake",
    "present",
    "candycane",
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
//!Select a random word from the wordList array
var wordRandom = wordList[Math.floor(Math.random() * wordList.length)];
// var wordSelected = wordRandom.split("");

//!Creates an array from the selected word and displays __ in the HTML for each letter in the word
var answerArray = [];
for (var i = 0; i < wordRandom.length; i++) {
    answerArray[i] = "  __  ";
    document.getElementById("word").innerHTML = answerArray.join(" ");
}

// alert(wordRandom)

//!Set game stats
var guessesLeft = 10;
document.getElementById("guessesLeft").innerHTML = guessesLeft
var lettersGuessed = "";
document.getElementById("lettersGuessed").innerHTML = lettersGuessed

var remainingLetters = wordRandom.length;
// while (remainingLetters > 0) {
document.onkeyup = function (event) {
    var userGuess = event.key
    alert(userGuess);
    for (var j = 0; j < wordRandom.length; j++) {
        if (wordRandom[j] === userGuess) {
            answerArray[j] = userGuess;
            remainingLetters--;
        }
    }
    // }


    //!Game code

    //!Update stats
    //!keep collecting input
    //!Update answerArray and remainingLetters
}