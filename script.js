import {
  dateTime,
  appenedElementWithText,
  Calculator,
} from "./modules/functions.js";

//time display initialise
const initDateTime = new Date().toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
});
document.querySelector("#time").textContent = initDateTime;

dateTime;
setInterval(dateTime, 10000);

//menu button functionality
const startMenu = document.querySelector(".windows_menu_open");
const startButton = document.querySelector(".windows_menu_start");

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  startMenu.classList.toggle("windows_menu_open--hidden");
  startButton.classList.toggle("windows_menu_start--clicked");
});

//desktop icons opening respective app
const calcDesktopIcon = document.querySelector("#calculatorShortcut");
const toDoDesktopIcon = document.querySelector("#toDoListShortcut");
const rpsDesktopIcon = document.querySelector("#paperScissorsRockShortcut");

const calcMenuIcon = document.querySelector("#menu-calculator");
const toDoMenuIcon = document.querySelector("#menu-toDoList");
const rpsMenuIcon = document.querySelector("#menu-paperScissorsRock");

const calcDisplay = document.querySelector(".app-container_calculator");
const toDoDisplay = document.querySelector(".app-container_toDoList");
const rpsDisplay = document.querySelector(".app-container_rps");

//opening windows
calcDesktopIcon.addEventListener("dblclick", (e) => {
  e.preventDefault;
  calcDisplay.classList.remove("app-container_calculator--hidden");
});

calcMenuIcon.addEventListener("click", (e) => {
  e.preventDefault;
  calcDisplay.classList.remove("app-container_calculator--hidden");
  startMenu.classList.toggle("windows_menu_open--hidden");
  startButton.classList.toggle("windows_menu_start--clicked");
});

toDoDesktopIcon.addEventListener("dblclick", (e) => {
  e.preventDefault;
  toDoDisplay.classList.remove("app-container_toDoList--hidden");
});

toDoMenuIcon.addEventListener("click", (e) => {
  e.preventDefault;
  toDoDisplay.classList.remove("app-container_toDoList--hidden");
  startMenu.classList.toggle("windows_menu_open--hidden");
  startButton.classList.toggle("windows_menu_start--clicked");
});

rpsDesktopIcon.addEventListener("dblclick", (e) => {
  e.preventDefault;
  rpsDisplay.classList.remove("app-container_rps--hidden");
});

rpsMenuIcon.addEventListener("click", (e) => {
  e.preventDefault;
  rpsDisplay.classList.remove("app-container_rps--hidden");
  startMenu.classList.toggle("windows_menu_open--hidden");
  startButton.classList.toggle("windows_menu_start--clicked");
});

//close buttons on respective apps
const closeCalc = document.querySelector(".app-container_top-bar_close-calc");
const closeToDo = document.querySelector(".app-container_top-bar_close-toDo");
const closeRps = document.querySelector(".app-container_top-bar_close-rps");

//closing windows
closeCalc.addEventListener("click", (e) => {
  e.preventDefault;
  calcDisplay.classList.add("app-container_calculator--hidden");
});

closeToDo.addEventListener("click", (e) => {
  e.preventDefault;
  toDoDisplay.classList.add("app-container_toDoList--hidden");
});

closeRps.addEventListener("click", (e) => {
  e.preventDefault;
  rpsDisplay.classList.add("app-container_rps--hidden");
});

//Calculator app

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-all-clear]");
const prevOpText = document.querySelector("[data-prev-op]");
const currOpText = document.querySelector("[data-curr-op]");

const calculator = new Calculator(prevOpText, currOpText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

//To do list app
const form = document.querySelector(".toDoListForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const inputValue = input.value.trim();

  const taskList = document.querySelector("#tasksToDo");
  appenedElementWithText("p", inputValue, taskList);

  input.value = "";

  const nothingPara = document.querySelector("#nothingPara");
  if (nothingPara) {
    taskList.removeChild(nothingPara);
  }
});

// rock paper scissors app

const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("rps-result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
