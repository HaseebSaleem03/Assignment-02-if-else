var input = prompt("Enter a character (number or string):");

var charCode = input.charCodeAt(0);

if (!isNaN(input)) {
  alert(input + " is a number.");
} else if (charCode >= 65 && charCode <= 90) {
  alert(input + " is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  alert(input + " is a lowercase letter.");
} else {
  alert("Input is neither a number nor a letter.");
}
