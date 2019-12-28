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

alert(wordRandom)

var remainingLetters = wordRandom.length;
// alert(wordSelected)