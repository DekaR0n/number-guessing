let random = parseInt((Math.random() * 100) + 1);

let number = document.querySelector("input");
let indicatorArray = document.getElementsByClassName("game_indicator");
let remainsAttempts = document.getElementsByClassName("remains");
let indicatorHighLow = document.getElementsByClassName("high_low");
let indicatorEndStart = document.getElementsByClassName("end_start");

let remains = []
let attempts = 10;

let randomNumber = random;

let correct = true;
let startGames = true;

function startGame() {
    clearGame();
}

function endGame() {
    startGames = false
}

function changeArray() {
    remains[(attempts - 10) * (-1)] = number.value;
    let textArray = "";
    for (let i = 0; i < remains.length; i++) {
        textArray += remains[i] + " ";
    }
    indicatorArray[0].innerHTML = textArray;
}

function submitAnswer() {
    if (startGames) {
        correct = true;
        submitException();
        if (correct) {
            changeArray();
            attempts--;
            remainsAttempts[0].innerHTML = attempts;
            number.value = "";
            lowHigh();
            zeroAttempts();
        }
    }
}

function zeroAttempts() {
    if (attempts < 0) {
        indicatorHighLow[0].innerHTML = "Don't be sad";
        indicatorEndStart[0].innerHTML = "You loose! The number is " + randomNumber + ". Click this bar";
        endGame();
    }
}

function lowHigh() {
    if (randomNumber === parseInt(remains[remains.length - 1])) {
        indicatorHighLow[0].innerHTML = "You won in "+(10-attempts)+" attempts";
        indicatorEndStart[0].innerHTML = "Congrats! Click this bar";
        endGame();
    } else {
        remains[remains.length - 1] > randomNumber ?
            indicatorHighLow[0].innerHTML = "Too High Number! Try again" :
            indicatorHighLow[0].innerHTML = "Too Low Number! Try again";
    }
}

function submitException() {
    if ((!(number.value && (!isNaN(number.value)))) || number.value > 100 || number.value < 1) {
        correct = false;
        number.value="";
        alert("Enter correct value");
    }
}

function clearGame() {
    number.value = "";
    indicatorArray[0].innerHTML = "";
    remainsAttempts[0].innerHTML = "";
    indicatorHighLow[0].innerHTML = "";
    indicatorEndStart[0].innerHTML = "";

    remains = []
    startGames = true;
    attempts = 10;
    randomNumber = parseInt((Math.random() * 100) + 1);
    ;
}
