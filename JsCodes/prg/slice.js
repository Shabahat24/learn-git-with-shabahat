const Class6A = [
  "Maya Patel",
  "Rohan Sharma",
  "Sanya Gupta",
  "Aryan Kumar",
  "Diya Shah",
];

console.log("\nClass 6A Students:");
console.log(Class6A.join("\n"));

// Select one student who volunteered to lead the science fair project (from index 2 to 3)
const scienceFairLeader = Class6A.slice(2, 3);

// Select the rest of the science project team members (from index 1)
const projectTeamMembers = Class6A.slice(1);
try {
  console.log("\nScience Fair Project Leader:");
  console.log(scienceFairLeader.join("\n"));

  console.log("\nPotential Team Members:");
  console.log(projectTeamMembers.join("\n"));

  console.log("\nComplete Class List (for attendance):");
  console.log(Class6A.join("\n"));
} catch {
  console.error("Please read the instructions carefully and try again.");
}
