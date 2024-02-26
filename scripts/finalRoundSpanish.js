// import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// catching the URL parameters and their values
const url = new URL(window.location.href);
const searchParams = url.searchParams;

let player1Score = parseInt(searchParams.get("player1Score"));
let player2Score = parseInt(searchParams.get("player2Score"));

// Determine the current player based on scores
let currentPlayer = player1Score > player2Score ? 1 : 2;

// Final question
const finalQ = placeholderQuestions.find(
  (placeholderQuestions) => placeholderQuestions.category === "Final"
);

const finalBetAmount = document.getElementById("finalBetAmount");
finalBetAmount.addEventListener("input", function () {
  //take the value from the input?
  pointAmount = parseInt(finalBetAmount.value);
  console.log(pointAmount);
});

// Fishing

// Variable that displays the questions and states the questions that will be displayed
let questionDisplay1 = document.querySelector(".questionDisplay1");
let currentQuestion = "";
let currentAnswer = "";

// Variables that keep track of whose turn it is and their points
let pointAmount = 0;

// function to show the score
function updateScoreDisplay() {
  document.querySelector(
    "#player1Score"
  ).textContent = `Player 1 - Score: ${player1Score}`;
  document.querySelector(
    "#player2Score"
  ).textContent = `Player 2 - Score: ${player2Score}`;
}

updateScoreDisplay();

function finalCategory() {
  console.log(finalQ.question);
  console.log(finalQ.answer);
  currentQuestion = finalQ.question;
  currentAnswer = finalQ.answer;
  questionDisplay1.textContent = currentQuestion;
}

/* we see the finalBetAmount, check if it's value is within the player's means  */
finalBet.addEventListener("click", () => {
  let finalBetAmount = document.getElementById("finalBetAmount");
  pointAmount = parseInt(finalBetAmount);
  if (currentPlayer === 1 && finalBetAmount.value <= player1Score) {
    console.log(finalBetAmount.value);
    finalCategory();
  } else if (currentPlayer === 2 && finalBetAmount.value <= player2Score) {
    console.log(finalBetAmount.value);
    finalCategory();
  }
});

// function to add points
function addPoints() {
  if (currentPlayer === 1) {
    player1Score = player1Score + pointAmount;
  } else if (currentPlayer === 2) {
    player2Score = player2Score + pointAmount;
  }
}
// function to take away points
function takeAwayPoints() {
  if (currentPlayer === 1) {
    player1Score = player1Score - pointAmount;
  } else if (currentPlayer === 2) {
    player2Score = player2Score - pointAmount;
  }
}

guess.addEventListener("click", () => {
  let userInput1 = document.querySelector(".userAnswer1").value;
  if (userInput1.toLowerCase() === currentAnswer.toLowerCase()) {
    addPoints();
    updateScoreDisplay();
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
    alert(
      "Congratulations! Your answer was right! You won the game! END OF THE GAME"
    );
    // Redirect to index.html
    window.location.href = "index.html";
  } else if (userInput1.toLowerCase() != currentAnswer.toLowerCase()) {
    takeAwayPoints();
    updateScoreDisplay();

    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
    alert("Wrong answer! END OF THE GAME");
    // Redirect to index.html
    window.location.href = "index.html";
  }
});

window.addEventListener("load", () => {
  document.querySelector(
    "#turnRound"
  ).textContent = `Player ${currentPlayer}'s turn!`; // turns
  updateScoreDisplay(); //updating the score after the turn
});
