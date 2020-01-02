//!Set up global variables
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

// var wordSpaces = 0;

//Stats variables
var guessesLeft = (10 - lettersGuessed.length)
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
    setStats()
}

// runs word selection and placement into html
function wordSelection() {
    //Select a random word from the wordList array
    wordRandom = wordList[Math.floor(Math.random() * wordList.length)];
    //split the word into new array
    wordLetters = wordRandom.split("");
    // stores the length of the current word as a number
    // wordSpaces = wordLetters.length;
    // lets us know the word for debugging purposes
    // alert(wordRandom)
    //Creates an array from the selected word and displays __ in the HTML for each letter in the word
    for (var i = 0; i < wordLetters.length; i++) {
        answerArray[i] = "  __  ";
        document.getElementById("word").innerHTML = answerArray.join(" ");
    }
}

function game() {
    checkLetters();

    function checkLetters() {
        //Collects user input
        document.addEventListener("keydown", event => {
                const userGuess = event.key.toLowerCase();
                //add the guess to the lettersGuessed array
                lettersGuessed.push(userGuess);
                //for debugging
                // console.log(userGuess);
                // alert(wordLetters);
                //Ensures user has guesses left then tests if guess is correct or incorrect
                if (lettersGuessed.length < 11) {
                    //right guess
                    if (wordRandom.match(userGuess)) {
                        lettersGuessed.pop(userGuess);
                        // alert(userGuess + (" IS in the word: " + wordRandom + "\nNumber of guesses used: " + lettersGuessed.length + "/10"));
                        for (var j = 0; j <= wordLetters.length; j++) {
                            if (wordRandom[j] === userGuess) {
                                answerArray[j] = userGuess;
                                // alert("for loop before doc");
                                document.getElementById("word").innerHTML = answerArray.join(" ");
                                // alert("for loop after doc");
                            }

                        }
                        // alert("between loop and if");
                        if (wordLetters.toString() == answerArray.toString()) {
                            // alert("before wins++")
                            wins++
                            document.getElementById("totalWins").innerHTML = wins;
                            // alert("Good job, you win! \nNext word selected. Choose a letter to keep playing!");
                            reset();
                        }
                    } else if (lettersGuessed.match(userGuess)) {
                        (lettersGuessed[k] === userGuess) {
                            alert(userGuess + " already guessed. Please guess another letter");

                        } else {
                            //wrong guess
                            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
                            guessesLeft--
                            document.getElementById("guessesLeft").innerHTML = guessesLeft;
                        }
                        // alert(userGuess + (" IS NOT in the word: " + wordRandom + "\nNumber of guesses used: " + lettersGuessed.length + "/10"));


                    } else {
                        //Game Over
                        ++losses
                        // alert("Out of guesses! \nNext word selected. Choose a letter to keep playing!");
                        reset();
                    }
                };
            }
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