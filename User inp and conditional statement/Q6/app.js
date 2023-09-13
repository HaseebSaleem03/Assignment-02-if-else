var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks for the three subjects:"));

var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

var percentage = (totalObtainedMarks / (totalMarks)) * 100;

var grade, remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent!";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good!";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage < 60) {
  grade = "Fail";
  remarks = "sorry";
} 
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + totalObtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);
