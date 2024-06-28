export const dateTime = () => {
  const now = new Date();
  const currentDateTime = now.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.querySelector("#time").textContent = currentDateTime;
};
