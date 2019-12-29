//Array of words to choose from
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
//!Select a random word from the wordList array
var wordRandom = wordList[Math.floor(Math.random() * wordList.length)];
// var wordSelected = wordRandom.split("");
alert(wordRandom)

//!Creates an array from the selected word and displays __ in the HTML for each letter in the word
var answerArray = [];
for (var i = 0; i < wordRandom.length; i++) {
    answerArray[i] = "  __  ";
    document.getElementById("word").innerHTML = answerArray.join(" ");
}

// alert(wordRandom)

//!Set game stats
var guessesLeft = 10;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
var lettersGuessed = [];
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
var wins = 0;
document.getElementById("totalWins").innerHTML = wins;


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
        // else if (remainingLetters = 0) {
        //     alert("You Win!");
        //     document.getElementsByClassName("wins").innerHTML = wins + 1

    }
}



//!Game code

//!Update stats
//!keep collecting input
//!Update answerArray and remainingLetters