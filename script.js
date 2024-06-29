import { dateTime } from "./modules/date-time.js";

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

const calcDisplay = document.querySelector(".app-container_calculator");
const toDoDisplay = document.querySelector(".app-container_toDoList");
const rpsDisplay = document.querySelector(".app-container_rps");

calcDesktopIcon.addEventListener("dblclick", (e) => {
  e.preventDefault;
  calcDisplay.classList.remove("app-container_calculator--hidden");
});

toDoDesktopIcon.addEventListener("dblclick", (e) => {
  e.preventDefault;
  toDoDisplay.classList.remove("app-container_toDoList--hidden");
});

rpsDesktopIcon.addEventListener("dblclick", (e) => {
  e.preventDefault;
  rpsDisplay.classList.remove("app-container_rps--hidden");
});

//close buttons on respective apps
const closeCalc = document.querySelector(".app-container_top-bar_close-calc");
const closeToDo = document.querySelector(".app-container_top-bar_close-toDo");
const closeRps = document.querySelector(".app-container_top-bar_close-rps");

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
