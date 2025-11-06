// Scenario: A tech company calculating server storage and data processing

const totalServerStorage = 9007199254740992n; // BigInt numbers for very large storage capacities (in bytes)
const dailyDataIngestion = 1099511627776n;
const backupStorage = 4503599627370496n;
// Declare BigInt variables here

// Regular numbers for smaller values
const numberOfServers = 150;
const hoursPerDay = 24;
const daysPerWeek = 7;

// BigInt arithmetic operations
const storageAfterOneDay = totalServerStorage + dailyDataIngestion;// Addition - calculating total storage after daily ingestion. Add your code here

const weeklyDataIngestion = dailyDataIngestion * BigInt(daysPerWeek); // Multiplication - calculating weekly data ingestion. Add your code here

const availableStorage = totalServerStorage - backupStorage// Subtraction - calculating available storage after backup. Add your code here

const dailyStoragePerServer = dailyDataIngestion / BigInt(numberOfServers);// Division - calculating daily storage per server (converting to BigInt first). Add your code here

const isBackupLessThanTotal = backupStorage < totalServerStorage;// Comparison operations with BigInt
// Comparing two BigInt values
// Add your code here

const isWeeklyDataLarge = weeklyDataIngestion > BigInt(1000000000000);// Comparing BigInt with regular number (must convert regular number to BigInt)
// Add your code here

const monthlyDataIngestion = dailyDataIngestion * 30n;// Checking if storage capacity is sufficient for a month
// Add your code here

// Mixed type comparison requires conversion
// Add your code here

const serverStorageInTB = totalServerStorage / 1099511627776n; // DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("Total server storage (bytes):", totalServerStorage);
  console.log("Storage after one day of ingestion:", storageAfterOneDay);
  console.log("Weekly data ingestion (bytes):", weeklyDataIngestion);
  console.log("Available storage after backup:", availableStorage);
  console.log("Daily storage per server:", dailyStoragePerServer);
  console.log("Is backup less than total storage?", isBackupLessThanTotal);
  console.log("Is weekly data > 1TB?", isWeeklyDataLarge);
  console.log("Is storage sufficient for a month?", isSufficientForMonth);
  console.log("Total storage in TB:", serverStorageInTB);
  console.log("Is total storage > 8000 TB?", isMoreThan8000TB);
} catch {
  console.error("Please read the instructions carefully and try again.");
}
