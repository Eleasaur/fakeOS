export const dateTime = () => {
  const now = new Date();
  const currentDateTime = now.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.querySelector("#time").textContent = currentDateTime;
};

export const appenedElementWithText = (elementType, text, parent) => {
  const newElement = document.createElement(elementType);
  const textNode = document.createTextNode(text);
  newElement.appendChild(textNode);
  parent.appendChild(newElement);
};
