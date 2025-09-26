let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function restartButton() {
    firstNumberElement.textContent = parseInt(Math.ceil(Math.random() * 100));
    secondNumberElement.textContent = parseInt(Math.ceil(Math.random() * 100));
    userInputElement.value = "";
    gameResultElement.textContent = "";
}

restartButton();

function checkButton() {
    let combineNumber = parseInt(firstNumberElement.textContent) + parseInt(secondNumberElement.textContent);
    let userInput = parseInt(userInputElement.value);
    
    if (combineNumber === userInput) {
        gameResultElement.textContent = "Congratulations! You got it right.";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}