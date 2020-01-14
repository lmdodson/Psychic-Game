//!Set variables
//The list of words to choose from
var wordList = [
    "snowflake",
    "present",
    "santa",
    "ornament",
    "sleigh",
    "reindeer",
    "krampus",
    "gingerbread",
    "cookies",
    "frosty",
    "lights",
    "caroling",
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

    //Creates an array from the selected word and displays __ in the HTML for each letter in the word
    for (var i = 0; i < wordLetters.length; i++) {
        answerArray[i] = "  __  ";
        document.getElementById("word").innerHTML = answerArray.join(" ");
    }
}

// function givePresent() {
//     var present = document.createElement("div");
//     present.classList.add("present");
//     var currentDiv = document.getElementById("under-tree");
//     document.body.insertAdjacentElement(present, currentDiv);
// }


function game() {
    //Collect user input
    document.addEventListener("keydown", event => {
        const userGuess = event.key.toLowerCase();
        //add the guess to the letters Guessed array
        lettersGuessed.push(userGuess);

        //Ensures user has guesses left then tests if guess is correct or incorrect
        if (lettersGuessed.length < 10) {
            //right guess
            if (wordRandom.match(userGuess)) {
                //removes the letter from the array because it's right
                lettersGuessed.pop(userGuess)
                //finds where in the array the letter is
                for (var j = 0; j <= wordLetters.length; j++) {
                    if (wordRandom[j] === userGuess) {
                        answerArray[j] = userGuess;
                        //adds the correct letter inside all occurances in html
                        document.getElementById("word").innerHTML = answerArray.join(" ");
                    }
                }
                //check if the word is solved
                if (wordLetters.toString() == answerArray.toString()) {
                    wins++
                    //add win to html
                    document.getElementById("totalWins").innerHTML = wins;
                    document.getElementById("word").innerText = ("Congrats you won! The word was " + wordRandom);
                    //start a new game
                    wait();
                }
            } else {
                //adds wrong guess to html
                document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
                //counts down guesses left
                guessesLeft--
                //updates number of guessesLeft in html
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
            }
        } else {
            //Game Over
            ++losses
            document.getElementById("word").innerText = ("Sorry you lost, the word was " + wordRandom);
            wait();
            //start a new game
        }
    });
}

function wait() {
    setTimeout(reset, 3000);
}



//!Put it all together
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    console.log('content loaded');
    //set stats
    setStats();
    wordSelection();
    game();
})