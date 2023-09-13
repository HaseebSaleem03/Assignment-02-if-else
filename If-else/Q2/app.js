var firstInteger = parseInt(prompt("Enter the first integer:"));

var secondInteger = parseInt(prompt("Enter the second integer:"));

if (firstInteger === secondInteger) {
  alert("Both integers are equal.");
} else if (firstInteger > secondInteger) {
  alert("The larger integer is: " + firstInteger);
} else {
  alert("The larger integer is: " + secondInteger);
}
