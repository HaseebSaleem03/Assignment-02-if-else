var remainingFuel = parseFloat(prompt("Enter the remaining fuel in liters:"));
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
} else {
  alert("You have enough fuel.");
}
