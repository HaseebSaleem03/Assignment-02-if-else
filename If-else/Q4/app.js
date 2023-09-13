var character = prompt("Enter a character (string of length 1):");

character = character.toLowerCase();

var isVowel = false;

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  isVowel = true;
}

if (isVowel) {
  alert("'" + character + "' is a vowel.");
} else {
  alert("'" + character + "' is not a vowel.");
}
