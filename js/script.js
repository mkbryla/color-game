var rgbDisplay = document.querySelector("span");
var text = document.getElementById("text");
var newColorsBtn = document.getElementById("new-colors");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var squares = document.getElementsByClassName("color-square");
var numberOfColors = 6;
var selectedColor;
var colors;
var gameOver;
var header = document.getElementById("header");

function start() {
    reset();
    colorSquares();
    // picking color
    selectedColor = colors[Math.floor(Math.random() * numberOfColors)];

    // changing rgbDisplay
    rgbDisplay.textContent = selectedColor;

    setUpEvents();
}

function reset() {
    // reseting
    text.textContent = "";
    header.style.background = "#232323";
    gameOver = 0;
    newColorsBtn.textContent = "New Colors";
    colors = [];
}

function colorSquares() {
    // drawing colors
    for (var i = 0; i < numberOfColors; i++) {
        colors.push(randomColor());
    }
    // changing squares background
    for (var j = 0; j < 6; j++) {
        if (colors[j]) {
            squares[j].style.background = colors[j];
            squares[j].style.display = "block";
        } else {
            squares[j].style.display = "none";
        }
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function isCorrect() {
    if (!gameOver) {
        if (this.style.background === selectedColor) {
            gameWon();
        } else {
            text.textContent = "Try Again";
            this.style.background = "#232323";
            this.style.cursor = "auto";
        }
    }
}

function gameWon() {
    for (var i = 0; i < numberOfColors; i++) {
        squares[i].style.background = selectedColor;
        squares[i].style.display = "block";
    }
    text.textContent = "Correct!";
    gameOver = 1;
    newColorsBtn.textContent = "Play again";
    header.style.background = selectedColor;
}

function setUpEvents() {
    newColorsBtn.addEventListener("click", start);

    easy.addEventListener("click", function() {
        numberOfColors = 3;
        easy.classList.add("selected");
        hard.classList.remove("selected");
        start();
    });

    hard.addEventListener("click", function() {
        numberOfColors = 6;
        easy.classList.remove("selected");
        hard.classList.add("selected");
        start();
    });

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", isCorrect);
    }
}

start();
