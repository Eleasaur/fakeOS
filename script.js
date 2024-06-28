import { dateTime } from "./modules/date-time.js";

//time display initialise
const initDateTime = new Date().toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
});
document.querySelector("#time").textContent = initDateTime;

dateTime;
setInterval(dateTime, 10000);

const startMenu = document.querySelector(".windows_menu_open");
const startButton = document.querySelector(".windows_menu_start");

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  startMenu.classList.toggle("windows_menu_open--hidden");
  startButton.classList.toggle("windows_menu_start--clicked");
});
