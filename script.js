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
      return 0;
    }
    return a / b;
  }
}

// Global Variables:
let displayValue = "";
let operator = "";
let currentNumber = "";
let isOperatorClicked = false;
let currentResult = null;

// // function that DISPLAYS on SCREEN.
function updateDisplay() {
  screen.textContent = displayValue;
}

// Select ALL NUMBERED buttons.
numbers.forEach((numberedButton) =>
  numberedButton.addEventListener("click", (e) => {
    displayValue += e.target.id;
    updateDisplay();
  })
);

// Select CLEAR button & Add event handler to clear screen when clicked.
const clearButton = document.querySelector("#btn-clear");
clearButton.addEventListener("click", () => {
  displayValue = "";
  operator = "";
  currentNumber = null;
  screen.textContent = "0";
});

// // When OPERATOR buttons is clicked on.
operators.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (e) => {
    if (!currentNumber) {
      // console.log("NO NUMBER IS ENTERED");
      currentNumber = displayValue;
      operator = e.target.id;
      displayValue = "";
      updateDisplay();
    } else if (operator) {
      currentResult = operate(currentNumber, operator, displayValue);
      displayValue = currentResult;
      updateDisplay();
      currentNumber = displayValue;
      operator = e.target.id;
      // console.log(operator);
      displayValue = "";
    }
  })
);

// // When EQUAL sign is clicked on.
equalButton.addEventListener("click", (e) => {
  if (currentNumber && operator) {
    currentResult = operate(currentNumber, operator, displayValue);
    displayValue = currentResult;
    currentNumber = displayValue;
    updateDisplay();
  }
  if (currentResult) {
    displayValue = currentResult;
    currentNumber = displayValue;
    currentResult = operate(currentNumber, operator, displayValue);
    displayValue = currentResult;
    // console.log("DIR CHI 7ARAKA");
  }
});
