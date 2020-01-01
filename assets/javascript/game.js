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
    "cuddles",
    "eggnog",
    "grinch",
    "mistletoe",
    "holly"
];

//The randomly selected word
var wordRandom = "";
//The array of letters in the randomly selected word
var wordLetters = [];
//array for wrong guesses
var lettersGuessed = [];

var answerArray = [];
// letter that the player selects
var userGuess = "";

// var wordSpaces = 0;

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
    lettersGuessed.length = 0;
    answerArray = [];
    wordSelection();
    setStats();
}

// runs word selection and placement into html
function wordSelection() {
    //Select a random word from the wordList array
    wordRandom = wordList[Math.floor(Math.random() * wordList.length)];
    //split the word into new array
    wordLetters = wordRandom.split("");
    // stores the length of the current word as a number
    // wordSpaces = wordLetters.length;
    // for testing purposes
    // alert(wordRandom)
    //Creates an array from the selected word and displays __ in the HTML for each letter in the word
    for (var i = 0; i < wordLetters.length; i++) {
        answerArray[i] = "  __  ";
        document.getElementById("word").innerHTML = answerArray.join(" ");
    }
}


function game() {
    //Collect user input
    document.addEventListener("keydown", event => {
        const userGuess = event.key.toLowerCase();
        //add the guess to the letters Guessed array
        lettersGuessed.push(userGuess);
        //for debugging
        //console.log(userGuess);
        //alert(wordLetters);

        //Ensures user has guesses left then tests if guess is correct or incorrect
        if (lettersGuessed.length < 11) {
            //right guess
            if (wordRandom.match(userGuess)) {
                //removes the letter from the array because it's right
                lettersGuessed.pop(userGuess)
                // alert(userGuess + (" IS in the word: " + wordRandom + "\nNumber of guesses used: " + lettersGuessed.length + "/10"));
                //finds where in the array the letter is
                for (var j = 0; j <= wordLetters.length; j++) {
                    if (wordRandom[j] === userGuess) {
                        answerArray[j] = userGuess;
                        //alert("for loop before doc");
                        //adds the correct letter inside all occurances in html
                        document.getElementById("word").innerHTML = answerArray.join(" ");
                    }
                }
            }
        }
    })


}




// //!Collects user input



//!Put it all together

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    console.log('content loaded');
    //set stats
    setStats();
    wordSelection();
    game();
})