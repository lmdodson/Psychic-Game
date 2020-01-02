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
        //for debugging
        //console.log(userGuess);
        //alert(wordLetters);

        //Ensures user has guesses left then tests if guess is correct or incorrect
        if (lettersGuessed.length < 10) {
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
                        // alert("for loop after doc");
                    }
                }
                //check if the word is solved
                if (wordLetters.toString() == answerArray.toString()) {
                    //alert("before wins++");
                    wins++
                    //add win to html
                    document.getElementById("totalWins").innerHTML = wins;
                    // alert ("You win! \nNext word selected. Choose a letter to keep playing");
                    alert("Congratulations you won! Choose another letter to keep playing!")
                    //start a new game
                    reset();
                }
            } else {
                //wrong guess
                //adds wrong guess to html
                document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
                //counts down guesses left
                guessesLeft--
                //updates number of guessesLeft in html
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                // alert(userGuess + (" IS NOT in the word: " + wordRandom + "\nNumber of guesses used: " + lettersGuessed.length + "/10"));
            }
        } else {
            //Game Over
            ++losses
            // alert("Out of guesses! \nNext word selected. Choose a letter to keep playing!");

            alert("You lost! The word was " + wordRandom);
            //start a new game
            reset();
        }
    });
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