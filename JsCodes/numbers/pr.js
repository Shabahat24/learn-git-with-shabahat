/*// Scenario: A tech company calculating server storage and data processing

const totalServerStorage = 9007199254740992n; // BigInt numbers for very large storage capacities (in bytes)
const dailyDataIngestion = 1099511627776n;
const backupStorage = 4503599627370496n;
// Declare BigInt variables here

// Regular numbers for smaller values
const numberOfServers = 150;
const hoursPerDay = 24;
const daysPerWeek = 7;

// BigInt arithmetic operations
const storageAfterOneDay = totalServerStorage + dailyDataIngestion; // Addition

const weeklyDataIngestion = dailyDataIngestion * BigInt(daysPerWeek); // Multiplication

const availableStorage = totalServerStorage - backupStorage; // Subtraction (added semicolon)

const dailyStoragePerServer = dailyDataIngestion / BigInt(numberOfServers); // Division (BigInt)

const isBackupLessThanTotal = backupStorage < totalServerStorage; // Comparison of two BigInt values

const isWeeklyDataLarge = weeklyDataIngestion > 1000000000000n; // Compare to 1TB as BigInt

const monthlyDataIngestion = dailyDataIngestion * 30n; // Monthly ingestion

// ✔️ Missing checks added:
const isSufficientForMonth = totalServerStorage >= monthlyDataIngestion; // Is storage enough for a month?

const serverStorageInTB = totalServerStorage / 1099511627776n; // Convert to TiB (1 TiB = 1099511627776 bytes)
const isMoreThan8000TB = serverStorageInTB > 8000n; // Compare in BigInt

// DO NOT MODIFY THE CODE BELOW THIS LINE
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

const sym = Symbol("test"); 
console.log(String(sym));
let arr = new Array(3); 
console.log(arr.length);
let arr = [1, 2, 3, , 5]; 
console.log(arr.length);
let arr = Array.of(5); 
console.log(arr);
 let arr = [10, 20, 30]; 
 console.log(arr[1]);
 let arr = [1, 2, 3]; 
 console.log(arr[10]);
  let arr = [1, 2, 3, 4]; arr[-1] = 99; 
  console.log(arr.length);
   let arr = [1, 2, 3]; 
   console.log(arr.at(-1));
    let arr = [5, 10, 15]; arr[1] = 20; 
    console.log(arr);
     let arr = [1, 2]; arr.push(3); 
     console.log(arr);
      let arr = [1, 2, 3]; 
      console.log(arr.pop());
       let arr = [1, 2, 3]; arr.shift(); 
       console.log(arr);
        let arr = [10, 20, 30, 40]; arr.splice(1, 2); 
        console.log(arr);*/
        // Declare a constant
const PI = 3.14159;

// Attempt to reassign it
PI = 3.14; // This will cause an error

