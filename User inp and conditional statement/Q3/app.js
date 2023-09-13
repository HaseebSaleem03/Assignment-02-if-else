var signalColor= prompt("Color of road traffic signal:");
signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
  alert("Must Stop.");
} else if (signalColor === "yellow") {
  alert("Ready to move");
} else if (signalColor === "green"){
  alert("Move now");
}
