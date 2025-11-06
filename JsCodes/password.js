// Write a function that checks if the password has the right length
function checkPassword(password) {
  const lengthOfPassword = password.length;
  // ... rest of the function

// The password must be at least 8 characters long and less than 12 characters long
 if (lengthOfPassword < 8) {
    return "Password must be at least 8 characters long";
  }
// If the password is not valid, return the error message
if (lengthOfPassword > 12) {
    return "Password must be less than 12 characters long";
  }
// If the password is valid, return the message "Password is valid"
return "Password is valid";
// If the password is not valid, return the error message
}
try {
  console.log(checkPassword("123")); // Too short
  console.log(checkPassword("Ab3x9Kp2Yz4QAA")); // Too long
  console.log(checkPassword("Pass1234")); // Valid password
  console.log(checkPassword("SecureAbc9")); // Valid password
} catch {
  console.error("Please read the instructions carefully and try again");
}
