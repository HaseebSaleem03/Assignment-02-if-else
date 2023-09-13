var correctPassword = "admin123"; 
var enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
  alert("Please enter your password.");
} else {
  if (enteredPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
  } else {
    alert("Incorrect password.");
  }
}
