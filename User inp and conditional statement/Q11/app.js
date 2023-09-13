var firstNumber = parseFloat(prompt("Enter the first number:"));

var secondNumber = parseFloat(prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {

  if (secondNumber === 0) {
    alert("Error: Division by zero is not allowed.");
  } else {
    result = firstNumber / secondNumber;
  }
} else if (operation === "%") {
 
  if (secondNumber === 0) {
    alert("Error: Modulus by zero is not allowed.");
  } else {
    result = firstNumber % secondNumber;
  }
} else {
  alert("Invalid operation. Please enter a valid operation (+, -, *, /, %).");
}

if (typeof result !== "undefined") {
  alert("Result: " + result);
}
