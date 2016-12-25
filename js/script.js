var rgbDisplay = document.querySelector("span");
var text = document.getElementById("text");
var newColorsBtn = document.getElementById("new-colors");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var numberOfColors = 6;
var squares = document.getElementsByClassName("color-square");
var selectedColor;
var colors = [];

function start() {
    selectedColor = Math.floor(Math.random() * numberOfColors);
    colors=[];
    // drawing colors
    for (var i = 0; i < numberOfColors; i++) {
        colors.push(randomColor());
    }

    // changing squares background
    for (var i = 0; i < 6; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].textContent = squares[i].style.background;
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }

    // changing rgbDisplay
    rgbDisplay.textContent = colors[selectedColor];
}

start();

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

newColorsBtn.addEventListener("click", start);
easy.addEventListener("click", function() {
    numberOfColors = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    start();
})

hard.addEventListener("click", function() {
    numberOfColors = 6;
    easy.classList.remove("selected");
    hard.classList.add("selected");
    start();
})
