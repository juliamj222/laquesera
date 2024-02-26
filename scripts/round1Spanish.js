// import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Questions imported in chunks of 5
const natureQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Nature"
);
const natureQ1 = natureQ.slice(0, 5);

const animalQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Animals"
);
const animalQ1 = animalQ.slice(0, 5);

const computerQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Computers"
);
const computerQ1 = computerQ.slice(0, 5);

const mythologyQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "Mythology"
);
const mythologyQ1 = mythologyQ.slice(0, 5);

const historyQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "History"
);
const historyQ1 = historyQ.slice(0, 5);

const generalQ = placeholderQuestions.filter(
  (placeholderQuestions) => placeholderQuestions.category === "General"
);
const generalQ1 = generalQ.slice(0, 5);

// Creating variables for every category of questions, for every round
const natureCat1 = document.querySelectorAll(".nature");
const animalCat1 = document.querySelectorAll(".animals");
const computerCat1 = document.querySelectorAll(".computers");
const mythologyCat1 = document.querySelectorAll(".mythology");
const historyCat1 = document.querySelectorAll(".history");
const generalCat1 = document.querySelectorAll(".general");

// Fishing
// Variables for guessing, passing and next
let guess = document.querySelector("#guess");
let pass = document.querySelector("#pass");
let next = document.querySelector("#next");

// Variable that displays the questions and states the questions that will be displayed
let questionDisplay1 = document.querySelector(".questionDisplay1");
let currentQuestion = "";
let currentAnswer = "";

// Variables that keep track of whose turn it is and their points
let currentPlayer = 1;

let pointAmount = 0;

let player1Score = 0;
let player2Score = 0;

//variable to keep track of clicked questions
let clickedQuestions = 0;

// Loops so that questions from all categories are asked, selecting the rounds when they will be asked
natureCat1.forEach((nature, index) => {
  nature.addEventListener("click", () => {
    console.log(nature.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(nature.innerHTML);
    console.log(natureQ1[index].question);
    console.log(natureQ1[index].answer);
    currentQuestion = natureQ1[index].question;
    currentAnswer = natureQ1[index].answer;
    questionDisplay1.textContent = currentQuestion;
    nature.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
  });
});

animalCat1.forEach((animal, index) => {
  animal.addEventListener("click", () => {
    console.log(animal.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(animal.innerHTML);
    console.log(animalQ1[index].question);
    console.log(animalQ1[index].answer);
    currentQuestion = animalQ1[index].question;
    currentAnswer = animalQ1[index].answer;
    questionDisplay1.textContent = currentQuestion;
    animal.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
  });
});

computerCat1.forEach((computers, index) => {
  computers.addEventListener("click", () => {
    console.log(computers.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(computers.innerHTML);

    console.log(computerQ1[index].question);
    console.log(computerQ1[index].answer);
    currentQuestion = computerQ1[index].question;
    currentAnswer = computerQ1[index].answer;
    questionDisplay1.textContent = currentQuestion;
    computers.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
  });
});

mythologyCat1.forEach((mythology, index) => {
  mythology.addEventListener("click", () => {
    console.log(mythology.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(mythology.innerHTML);
    console.log(mythologyQ1[index].question);
    console.log(mythologyQ1[index].answer);
    currentQuestion = mythologyQ1[index].question;
    currentAnswer = mythologyQ1[index].answer;
    questionDisplay1.textContent = currentQuestion;
    mythology.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
  });
});

historyCat1.forEach((history, index) => {
  history.addEventListener("click", () => {
    console.log(history.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(history.innerHTML);
    console.log(historyQ1[index].question);
    console.log(historyQ1[index].answer);
    currentQuestion = historyQ1[index].question;
    currentAnswer = historyQ1[index].answer;
    questionDisplay1.textContent = currentQuestion;
    history.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
  });
});

generalCat1.forEach((general, index) => {
  general.addEventListener("click", () => {
    console.log(general.innerHTML);
    clickedQuestions++;
    pointAmount = parseInt(general.innerHTML);
    console.log(generalQ1[index].question);
    console.log(generalQ1[index].answer);
    currentQuestion = generalQ1[index].question;
    currentAnswer = generalQ1[index].answer;
    questionDisplay1.textContent = currentQuestion;
    general.classList.add("clicked");
    disableOtherQuestions();
    enablePassGuess();
    disableNextRound();
  });
});

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
  ).textContent = `Participante 1 - Puntuación: ${player1Score}`;
  document.querySelector(
    "#player2Score"
  ).textContent = `Participante 2 - Puntuación: ${player2Score}`;
}
// function to change players
function changePlayers() {
  currentPlayer = currentPlayer === 2 ? 1 : 2;
  console.log(currentPlayer);
  document.querySelector(
    "#turnRound"
  ).textContent = `PARTICIPANTE ${currentPlayer}`;
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

function enableNextIfAllQuestionsClicked() {
  const totalQuestions = 1;
  if (
    clickedQuestions === totalQuestions ||
    player1Score > 4500 ||
    player2Score > 4500
  ) {
    enableNextRound();
  }
}

next.addEventListener("click", () => {
  // Passing the scores and the turn:
  const url = "https://juliamj222.github.io/la-quesera/round2Sp.html?";
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
    questionDisplay1.textContent = " ";
    enableNextIfAllQuestionsClicked();
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
  ).textContent = `PARTICIPANTE ${currentPlayer}`; // turns
  updateScoreDisplay(); //updating the score after the turn
  disableNextRound();
});
