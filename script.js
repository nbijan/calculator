// Global Variables:
let displayValue = "";
let operator = "";
let currentNumber = "";
let nextNumber = "";
let currentResult = null;

const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

// main operations
function operate(a, operator, b) {
  if (operator === "+") return +a + +b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === "0") {
      alert(
        "Dividing by zero? Nice try, but I'm not helping you break the universe. Try a real number, Einstein."
      );
      clearDisplay();
      return " ";
    }
    return a / b;
  }
}

// // function that DISPLAYS on SCREEN.
function updateDisplay() {
  screen.textContent = displayValue;
}

// Select ALL NUMBERED buttons.
numbers.forEach((numberedButton) =>
  numberedButton.addEventListener("click", (e) => {
    if (displayValue.match(/[.]/) && e.target.id === ".") {
      return;
    }
    else if (displayValue === "" && !currentNumber && e.target.id === "0") {
      return;
    } else {
      displayValue += e.target.id;
      updateDisplay();
    }
  })
);

// Select CLEAR button & Add event handler to clear screen when clicked.
const clearButton = document.querySelector("#btn-clear");
clearButton.addEventListener("click", () => {
  clearDisplay();
  screen.textContent = "0";
});

// // When OPERATOR buttons is clicked on.
operators.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (e) => {
    if (!currentNumber) {
      currentNumber = displayValue;
      operator = e.target.id;
      displayValue = "";
      updateDisplay();
    } else {
      nextNumber = displayValue;
      currentResult = operate(currentNumber, operator, nextNumber);
      operator = e.target.id;
      displayValue = currentResult;
      updateDisplay();
      currentNumber = displayValue;
      displayValue = "";
      nextNumber = "";
    }
  })
);

// // When EQUAL sign is clicked on.
equalButton.addEventListener("click", (e) => {
  if (!nextNumber) {
    nextNumber = displayValue;
    currentResult = operate(currentNumber, operator, nextNumber);
    displayValue = currentResult;
    updateDisplay();
  } else {
    currentNumber = currentResult;
    currentResult = operate(currentNumber, operator, nextNumber);
    displayValue = currentResult;
    updateDisplay();
  }
});

// percentage value of an operation.
const percentage = document.querySelector(".percent");
percentage.addEventListener("click", () => {
  if (currentNumber) {
    displayValue = displayValue / 100;
    updateDisplay();
  }
  if (!operator) {
    displayValue = "0";
    updateDisplay();
  }
});

// backspace on last button clicked.
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  let backspacedValue = displayValue.split("");
  backspacedValue.splice(backspacedValue.length - 1, 1);
  displayValue = backspacedValue.join("");
  updateDisplay();
});

function clearDisplay() {
  displayValue = "";
  operator = "";
  currentNumber = "";
  nextNumber = "";
  currentResult = null;
}
