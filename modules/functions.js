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

export class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currOpText.innerText = this.currentOperand;
    this.prevOpText.innerText = this.previousOperand;
  }
}
