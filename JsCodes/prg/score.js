// Math test scores for a class
const mathScores = [85, 92, 78, 95, 88, 76, 90, 84];

// Initialize total score
let totalScore = 0;



// Using a while loop to calculate total and show each score
let i = 0;

while (i < mathScores.length) {

  totalScore += mathScores[i];

  console.log(`Student ${i + 1} score: ${mathScores[i]}/100`);

  i++;

}