const printQueue = [];

// Write a function named addUrgentPrint that adds a document to the front of the printQueue array.
// It should log a message indicating that the document was added to the front of the queue.
// e.g. "URGENT - Added to front of queue: CEO Presentation"
function addUrgentPrint(document) {
  printQueue.unshift(document);
  console.log(`URGENT - Added to front of queue: ${document}`);
}
function addPrint(document) {
  printQueue.push(document);
  console.log(`Added to queue: ${document}`);
}

// Write a function named processPrint that removes the first document from the printQueue array and logs a message indicating that the document was printed.
// If the printQueue array is empty, it should log a message indicating that there are no documents in the queue.
// e.g. "Printing: Monthly Report"
// e.g. "No documents in queue"
function processPrint() {
  const printed = printQueue.shift();
  if (printed) {
    console.log(`Printing: ${printed}`);
  } else {
    console.log("No documents in queue");
  }
}
try {
  addPrint("Monthly Report");
  addPrint("Team Schedule");
  addUrgentPrint("CEO Presentation");

  console.log("\nCurrent Queue:");
  console.table(printQueue);

  console.log("\nProcessing prints:");
  processPrint();
  processPrint();
  processPrint();
  processPrint();
} catch {
  console.error("Please read the instructions carefully and try again.");
}
