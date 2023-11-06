function add(firstNumber, secondNumber) {
  // return +firstNumber + +secondNumber;
  console.log(+firstNumber + +secondNumber);
}
function subtract(firstNumber, secondNumber) {
  // return firstNumber - secondNumber;
  console.log(firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
  // return firstNumber * secondNumber;
  console.log(firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
  // return firstNumber / secondNumber;
  console.log(firstNumber / secondNumber);
}

let firstNumber = prompt('Enter the first number');
let operator = prompt('Enter the operator');
let secondNumber = prompt('Enter the second number');

function operate(firstNumber, operator,secondNumber) {
    if (operator === '+') add(firstNumber,secondNumber);
    if (operator === '-') subtract(firstNumber, secondNumber);
    if (operator === '*') multiply(firstNumber, secondNumber);
    if (operator === '/') divide(firstNumber, secondNumber);
}

operate(firstNumber, operator,secondNumber);
