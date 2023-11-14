// Global Variables:
let displayValue = "";
let operator = "";
let currentNumber = "";
let nextNumber = "";
let currentResult = null;

const screen = document.querySelector(".screen");
const operatorScreen = document.querySelector(".operator_screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

// main operations
function operate(a, operator, b) {
  if (operator === "+") {
    result = +a + +b;
    return parseFloat(result.toFixed(4));
  }
  if (operator === "-") {
    result = a - b;
    return parseFloat(result.toFixed(4));
  }
  if (operator === "*") {
    let result = a * b;
    if (result % 1 != 0) {
      return parseFloat(result.toFixed(4));
    }
    return result;
  }
  if (operator === "/") {
    if (b === "0") {
      alert(
        "Dividing by zero? Nice try, but I'm not helping you break the universe. Try a real number, Einstein."
      );
      clearDisplay();
      return " ";
    }
    result = a / b;
    if (result % 1 != 0) {
      return parseFloat(result.toFixed(4));
    }
    return result;
  }
}

// function that DISPLAYS on SCREEN.
function updateDisplay() {
  screen.textContent = displayValue;
}

// function that DISPLAY OPERATOR on calc screen.
function updateOperatorDisplay() {
  operatorScreen.textContent = operator;
}

// Select ALL NUMBERED buttons.
numbers.forEach((numberedButton) =>
  numberedButton.addEventListener("click", (e) => {
    if (screen.textContent === "0") {
      displayValue = "";
    }
    if (displayValue === "" && !currentNumber && e.target.id === "0") {
      return;
    }
    if (currentResult && !operator) {
      currentResult = null;
      displayValue = e.target.id;
    } else {
      displayValue += e.target.id;
    }
    updateDisplay();
  })
);

// Select CLEAR button & Add event handler to clear screen when clicked.
const clearButton = document.querySelector(".clearAll");
clearButton.addEventListener("click", () => {
  clearDisplay();
  screen.textContent = "0";
  operatorScreen.textContent = "";
});

// // When OPERATOR buttons is clicked on.
operators.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (e) => {
    if (!currentNumber) {
      currentNumber = displayValue;
      operator = e.target.id;
      updateOperatorDisplay();
      displayValue = "";
      updateDisplay();
      return;
    } else if (!nextNumber) {
      nextNumber = displayValue;
    }
    currentResult = operate(currentNumber, operator, nextNumber);
    operator = e.target.id;
    updateOperatorDisplay();
    displayValue = currentResult;
    updateDisplay();
    currentNumber = displayValue;
    displayValue = "";
    nextNumber = "";
  })
);

// // When EQUAL sign is clicked on.
equalButton.addEventListener("click", (e) => {
  if (!currentNumber) {
    return updateDisplay();
  }
  if (!nextNumber) {
    nextNumber = displayValue;
  } else {
    currentNumber = currentResult;
  }
  currentResult = operate(currentNumber, operator, nextNumber);
  displayValue = currentResult;
  operatorScreen.textContent = "=";
  updateDisplay();
});

// percentage value of an operation.
const percentage = document.querySelector(".percent");
percentage.addEventListener("click", () => {
  if (currentNumber) {
    displayValue = displayValue / 100;
  }
  if (!operator) {
    displayValue = "0";
  }
  updateDisplay();
});

// backspace on last button clicked.
const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  let backspacedValue = displayValue.split("");
  backspacedValue.splice(backspacedValue.length - 1, 1);
  displayValue = backspacedValue.join("");
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
});

function clearDisplay() {
  displayValue = "";
  screen.textContent = 0;
  operator = "";
  currentNumber = "";
  nextNumber = "";
  currentResult = null;
}

// keyboard support
window.addEventListener("keydown", (e) => {
  const allButtons = document.querySelector(`button[id="${e.key}"]`);
  const clickEvent = new Event("click");
  if (!allButtons) {
    return;
  } else {
    if (e.key === "/") {
      e.preventDefault();
    }
  }
  allButtons.dispatchEvent(clickEvent);
});

// decimal input
const decimalPoint = document.querySelector(".decimal");
decimalPoint.addEventListener("click", (e) => {
  if (displayValue.includes(".") && e.target.id === ".") {
    return;
  }
  displayValue += e.target.id;
  updateDisplay();
});

// square of a number
const squared = document.querySelector(".sqr");
squared.addEventListener("click", () => {
  displayValue = displayValue ** 2;
  currentResult = displayValue;
  operatorScreen.textContent = "=";
  updateDisplay();
  currentResult = displayValue;
});

// negative value of a number.
const negativeValue = document.querySelector(".negate");
negativeValue.addEventListener("click", () => {
  displayValue = -1 * displayValue;
  updateDisplay();
});

// square root of a number
const sqrt = document.querySelector(".sqrt");
sqrt.addEventListener("click", () => {
  if (displayValue < 0) {
    alert("Square root of negativity? It's not therapy; it's math.");
    clearDisplay();
    return " ";
  } else {
    result = Math.sqrt(displayValue);
    displayValue = result;
    if (result % 1 != 0) {
      displayValue = parseFloat(result.toFixed(4));
    }
    operatorScreen.textContent = "=";
    updateDisplay();
    currentResult = displayValue;
  }
});

// reciprocal of a number
const reciprocal = document.querySelector(".reciprocal");
reciprocal.addEventListener("click", () => {
  if (screen.textContent === "0") {
    alert(
      "Dividing by zero? Nice try, but I'm not helping you break the universe. Try a real number, Einstein."
    );
    clearDisplay();
    return " ";
  }
  result = 1 / displayValue;
  if (result % 1 != 0) {
    displayValue = parseFloat(result.toFixed(4));
  }
  operatorScreen.textContent = "=";
  updateDisplay();
  currentResult = displayValue;
});
