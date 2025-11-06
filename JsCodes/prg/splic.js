const Class6A = [
  "Maya Patel",
  "Rohan Sharma",
  "Sanya Gupta",
  "Aryan Kumar",
  "Diya Shah",
];

console.log("\nOriginal Class 6A:");
console.log(Class6A.join("\n"));

// Two students transfer out (remove 1 student starting from index 2)
const transferredOut = Class6A.splice(2, 1);
// Three new students join the class (add at index 1)
Class6A.splice(1, 0, "Kabir Singh", "Zara Ahmed", "Nikhil Verma");
try {
  console.log("\nStudent(s) who transferred out:");
  console.log(transferredOut.join("\n"));
  console.log("\nUpdated Class 6A after transfers:");
  console.log(Class6A.join("\n"));
} catch {
  console.error("Please read the instructions carefully and try again.");
}
