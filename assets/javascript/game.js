var words = [
    "throne", "dragon", "battle", "north", "wildlings", "south", "winter", "sword", "shield", "arrow", "raven"
];

var word = words[Math.floor(Math.random()* words.length)];

answerArray = []

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remaingLetters = word.length;