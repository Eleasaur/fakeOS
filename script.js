//time display
const initDateTime = new Date().toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
});
document.querySelector("#time").textContent = initDateTime;

const dateTime = () => {
  const now = new Date();
  const currentDateTime = now.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.querySelector("#time").textContent = currentDateTime;
};
dateTime;
setInterval(dateTime, 1000);
