//  import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// catching the URL parameters and their values
const url = new URL(window.location.href);
const searchParams = url.searchParams;
let currentPlayer = parseInt(searchParams.get("currentPlayer"));
let player1Score = parseInt(searchParams.get("player1Score"));
let player2Score = parseInt(searchParams.get("player2Score"));

//variable to keep track of clicked questions
let clickedQuestions = 0;

// Questions imported in chunks of 5
const natureQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Nature"
);
const natureQ2 = natureQ.slice(5, 10);

const animalQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Animals"
);
const animalQ2 = animalQ.slice(5, 10);

const computerQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Computers"
);
const computerQ2 = computerQ.slice(5, 10);

const mythologyQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Mythology"
);
const mythologyQ2 = mythologyQ.slice(5, 10);

const historyQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "History"
);
const historyQ2 = historyQ.slice(5, 10);

const generalQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "General"
);
const generalQ2 = generalQ.slice(5, 10);

// Creating variables for every category of questions, for every round

const natureCat2 = document.querySelectorAll(".nature");
const animalCat2 = document.querySelectorAll(".animals");
const computerCat2 = document.querySelectorAll(".computers");
const mythologyCat2 = document.querySelectorAll(".mythology");
const historyCat2 = document.querySelectorAll(".history");
const generalCat2 = document.querySelectorAll(".general");

// Fishing
// Variables for guessing, passing and next
let guess = document.querySelector("#guess");
let pass = document.querySelector("#pass");
let next = document.querySelector("#next");

// Variable that displays the questions and states the questions that will be displayed
let questionDisplay1 = document.querySelector(".questionDisplay1");
let currentQuestion = "";
let currentAnswer = "";

let pointAmount = 0;

// Loops so that questions from all categories are asked, selecting the rounds when they will be asked
natureCat2.forEach((nature, index) => {
  nature.addEventListener("click", () => {
    console.log(nature.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(nature.innerHTML);
    console.log(natureQ2[index].question);
    console.log(natureQ2[index].answer);
    currentQuestion = natureQ2[index].question;
    currentAnswer = natureQ2[index].answer;
    questionDisplay1.textContent = currentQuestion;
    nature.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
    console.log(clickedQuestions);
  });
});

animalCat2.forEach((animal, index) => {
  animal.addEventListener("click", () => {
    console.log(animal.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(animal.innerHTML);
    console.log(animalQ2[index].question);
    console.log(animalQ2[index].answer);
    currentQuestion = animalQ2[index].question;
    currentAnswer = animalQ2[index].answer;
    questionDisplay1.textContent = currentQuestion;
    animal.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
    console.log(clickedQuestions);
  });
});

computerCat2.forEach((computers, index) => {
  computers.addEventListener("click", () => {
    console.log(computers.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(computers.innerHTML);
    console.log(computerQ2[index].question);
    console.log(computerQ2[index].answer);
    currentQuestion = computerQ2[index].question;
    currentAnswer = computerQ2[index].answer;
    questionDisplay1.textContent = currentQuestion;
    computers.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
    console.log(clickedQuestions);
  });
});

mythologyCat2.forEach((mythology, index) => {
  mythology.addEventListener("click", () => {
    console.log(mythology.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(mythology.innerHTML);
    console.log(mythologyQ2[index].question);
    console.log(mythologyQ2[index].answer);
    currentQuestion = mythologyQ2[index].question;
    currentAnswer = mythologyQ2[index].answer;
    questionDisplay1.textContent = currentQuestion;
    mythology.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
    console.log(clickedQuestions);
  });
});

historyCat2.forEach((history, index) => {
  history.addEventListener("click", () => {
    console.log(history.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(history.innerHTML);
    console.log(historyQ2[index].question);
    console.log(historyQ2[index].answer);
    currentQuestion = historyQ2[index].question;
    currentAnswer = historyQ2[index].answer;
    questionDisplay1.textContent = currentQuestion;
    document.querySelector("#guess").classList.remove("disabled");
    history.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
    console.log(clickedQuestions);
  });
});

generalCat2.forEach((general, index) => {
  general.addEventListener("click", () => {
    console.log(general.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(general.innerHTML);
    console.log(generalQ2[index].question);
    console.log(generalQ2[index].answer);
    currentQuestion = generalQ2[index].question;
    currentAnswer = generalQ2[index].answer;
    questionDisplay1.textContent = currentQuestion;
    general.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
    console.log(clickedQuestions);
  });
});

// Functions to enable or disable buttons
function enablePassGuess() {
  document.querySelector("#guess").classList.remove("disabled");
  document.querySelector("#pass").classList.remove("disabled");
}

function disablePassGuess() {
  document.querySelector("#guess").classList.add("disabled");
  document.querySelector("#pass").classList.add("disabled");
}

function enableNextRound() {
  document.querySelector("#next").classList.remove("disabled");
}

function disableNextRound() {
  document.querySelector("#next").classList.add("disabled");
}

function disableOtherQuestions() {
  const gridItems = document.querySelectorAll(".gridItem");
  gridItems.forEach(function (gridItem) {
    gridItem.classList.add("disabled");
  });
}

function enableOtherQuestions() {
  const gridItems = document.querySelectorAll(".gridItem");
  gridItems.forEach(function (gridItem) {
    gridItem.classList.remove("disabled");
  });
}

// function to show the score
function updateScoreDisplay() {
  document.querySelector(
    "#player1Score"
  ).textContent = `Player 1 - Score: ${player1Score}`;
  document.querySelector(
    "#player2Score"
  ).textContent = `Player 2 - Score: ${player2Score}`;
}
// function to change players
function changePlayers() {
  currentPlayer = currentPlayer === 2 ? 1 : 2;
  console.log(currentPlayer);
  document.querySelector(
    "#turnRound"
  ).textContent = `Player ${currentPlayer}, It's your turn!`;
}
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

// Function to pass scores and currentPlayer to the next round

let passGuessCount = 0;

document.getElementById("pass").addEventListener("click", function () {
  if (passGuessCount === 0) {
    passGuessCount++;
    changePlayers();
    enableNextIfAllQuestionsClicked();
  } else if (passGuessCount === 1) {
    changePlayers();
    passGuessCount = 0;
    enableOtherQuestions();
    questionDisplay1.textContent = " ";
    disablePassGuess();
    enableNextIfAllQuestionsClicked();
  }
});

let player1ScoreToPass;
let player2ScoreToPass;
let currentPlayerToPass;

player1ScoreToPass = player1Score;
player2ScoreToPass = player2Score;
currentPlayerToPass = currentPlayer;

function enableNextIfAllQuestionsClicked() {
  const totalQuestions = 1;
  if (
    clickedQuestions === totalQuestions ||
    player1Score > 15000 ||
    player2Score > 15000
  ) {
    enableNextRound();
  }
}

next.addEventListener("click", () => {
  // Passing the scores and the turn:
  const url = "https://juliamj222.github.io/la-quesera/finalRoundSp.html?";
  const searchParams = new URLSearchParams();
  searchParams.append("player1Score", player1Score);
  searchParams.append("player2Score", player2Score);
  searchParams.append("currentPlayer", currentPlayer);
  const queryString = searchParams.toString();
  const URL = url + queryString;

  window.location.href = URL;

  player1ScoreToPass = player1Score;
  player2ScoreToPass = player2Score;
  currentPlayerToPass = currentPlayer;

  alert("you go to the next round");
});

guess.addEventListener("click", () => {
  let userInput1 = document.querySelector(".userAnswer1").value;
  if (userInput1.toLowerCase() === currentAnswer.toLowerCase()) {
    addPoints(); // if right, add points
    enableOtherQuestions(); //enable other questions to choose from
    updateScoreDisplay(); // display score
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
    disablePassGuess();
    enableNextIfAllQuestionsClicked();
    questionDisplay1.textContent = " ";
  } else if (
    userInput1.toLowerCase() != currentAnswer.toLowerCase() &&
    passGuessCount === 1
  ) {
    takeAwayPoints(); // if wrong, take away points
    passGuessCount++;
    //disableOtherQuestions();
    updateScoreDisplay(); // display score
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
    changePlayers(); // change players
    enableNextIfAllQuestionsClicked();

    enableOtherQuestions();
    questionDisplay1.textContent = " ";
    disablePassGuess();
    passGuessCount = 0;
    enableNextIfAllQuestionsClicked();
  } else if (
    userInput1.toLowerCase() != currentAnswer.toLowerCase() &&
    passGuessCount === 0
  ) {
    takeAwayPoints(); // if wrong, take away points
    passGuessCount++;
    disableOtherQuestions();
    updateScoreDisplay(); // display score
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
    changePlayers(); // change players
  }
});

window.addEventListener("load", () => {
  document.querySelector(
    "#turnRound"
  ).textContent = `Player ${currentPlayer}'s turn!`; // turns
  updateScoreDisplay(); //updating the score after the turn
  disableNextRound();
});
