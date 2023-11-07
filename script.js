const allButtonsContainer = document.querySelectorAll(".btn");
const calcDisplay = document.querySelector(".cal-screen");
calcDisplay.textContent = null;
let isOperatorClicked = false;

//display the input of the user on the calculator display
allButtonsContainer.forEach((button) => {
  button.addEventListener("click", (e) => {
    calcDisplay.textContent += `${e.target.textContent}`;
    return (displayValue = calcDisplay.textContent);
  });
});

//clear the content of the calculator display
const clearButton = document.querySelector(".btn-clear");
clearButton.addEventListener("click", (e) => (calcDisplay.textContent = ""));

// saves the operator sign
const operators = document.querySelectorAll(".operator");
operators.forEach((button) =>
  button.addEventListener("click", (event) => {
    let firstNumberArray = displayValue.split(/[+\-*\/]/);
    let firstNumber = firstNumberArray[0];
    calcDisplay.textContent = "";
    let operator = event.target.textContent;
    console.log(
      `the first number is ${firstNumber} and the operator is ${operator}`
    );
  })
);

//Execute operate function when equalSign is clicked.
const equalSign = document.querySelector(".equal");
equalSign.addEventListener("click", operate);

// main operations
function add(firstNumber, secondNumber) {
  const addition = +firstNumber + +secondNumber;
  calcDisplay.textContent = addition;
  return addition;
}
function subtract(firstNumber, secondNumber) {
  const subtraction = firstNumber - secondNumber;
  calcDisplay.textContent = subtraction;
  return subtraction;
}

function multiply(firstNumber, secondNumber) {
  const multiplication = firstNumber * secondNumber;
  calcDisplay.textContent = multiplication;
  return multiplication;
}

function divide(firstNumber, secondNumber) {
  const division = firstNumber / secondNumber;
  calcDisplay.textContent = division;
  return division;
}

function operate(firstNumber, operator, secondNumber) {
  let displayArray = displayValue.split(/[+\-*\/=]/);
  displayArray.splice(displayArray.length - 1, 1);
  firstNumber = displayArray[0];
  secondNumber = displayArray[1];
  let match = displayValue.match(/[+\-*\/]/);
  operator = match[0];
  if (operator === "+") add(firstNumber, secondNumber);
  if (operator === "-") subtract(firstNumber, secondNumber);
  if (operator === "*") multiply(firstNumber, secondNumber);
  if (operator === "/") divide(firstNumber, secondNumber);
}
