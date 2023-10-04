var drumButtons = document.getElementsByClassName("drum");

var audioTom1 = new Audio("sounds/tom-1.mp3");
var audioTom2 = new Audio("sounds/tom-2.mp3");
var audioTom3 = new Audio("sounds/tom-3.mp3");
var audioTom4 = new Audio("sounds/tom-4.mp3");
var audioCrash = new Audio("sounds/crash.mp3");
var audioBass = new Audio("sounds/kick-bass.mp3");
var audioSnare = new Audio("sounds/Snare.mp3");

function sounds(event) {
    switch (event) {
        case "w":
            audioTom1.play();
            break;
        case "a":
            audioTom2.play();
            break;
        case "s":
            audioTom3.play();
            break;
        case "d":
            audioTom4.play();
            break;
        case "j":
            audioCrash.play();
            break;
        case "k":
            audioBass.play();
            break;
        case "l":
            audioSnare.play();
            break;
    }
}

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var letter = this.textContent;
        sounds(letter);
        animation(letter);
    });

};

document.addEventListener("keydown", function (event) {

    sounds(event.key);
    animation(event.key);
})

function animation(letter) {
    document.querySelector("." + letter).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + letter).classList.remove("pressed");
    }, 100);
}
