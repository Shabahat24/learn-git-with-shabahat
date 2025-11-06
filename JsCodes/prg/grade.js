// Student grades for different subjects
const studentGrades = {
  MATH: 85,
  SCIENCE: 92,
  HISTORY: 78,
  ENGLISH: 95,
  ART: 88,
};

// Initialize total grade
let totalGrade = 0;
let subjectCount = 0;

for (const subject in studentGrades) {

  totalGrade += studentGrades[subject];

  subjectCount++;

  console.log(`${subject}: ${studentGrades[subject]}/100`);

}

 // Using a for-in loop to calculate total and show each subject grade


console.log("STUDENT REPORT CARD:");
console.log("-------------------");

// Implement the for-in loop to calculate total and show each subject grade

// Calculate and display average
const averageGrade = totalGrade / subjectCount;
console.log("-------------------");
console.log(`Average Grade: ${averageGrade.toFixed(1)}/100`);
