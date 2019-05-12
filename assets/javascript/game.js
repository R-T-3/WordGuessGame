document.getElementById("started").addEventListener("keypress", got);
$(document).keydown(got);

function got() {
    console.log("got is running");

    var words = [
        "throne", "dragon", "battle", "north", "wildlings", "south", "winter", "sword", "shield", "arrow", "raven"
    ];
    var word = words[Math.floor(Math.random()* words.length)];
    var answerArr = [];
    var guessedLetters = [];

    for (var i = 0; i < word.length; i++) {
        answerArr[i] = " _";
        document.getElementById("word").innerHTML = answerArr.join(" ");
    };

    var remainingLetters = word.length;
    var j = 0;
    
    while (remainingLetters > 0) {
        if (event.key === word[j]) {
            console.log("it worked")
            answerArr[j] = word[j];
            document.getElementById("word").innerHTML = answerArr.join(" ");
            remainingLetters--;
        }
        else {
            guessedLetters.push(word[j]);
            document.getElementById("guessed").innerHTML = guessedLetters;
        }
        
        j++
    };
};





