var userInput = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

var greeting;

if (userInput >= 0 && userInput < 1200) {
  greeting = "Good morning!";
} else if (userInput >= 1200 && userInput < 1700) {
  greeting = "Good afternoon!";
} else if (userInput >= 1700 && userInput < 2100) {
  greeting = "Good evening!";
} else if (userInput >= 2100 && userInput <= 2359) {
  greeting = "Good night!";
} else {
  greeting = "Invalid input. Please enter a valid time.";
}

alert(greeting);
