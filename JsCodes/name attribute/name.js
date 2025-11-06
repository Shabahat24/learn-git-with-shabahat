// Use the getElementsByName method to get the first name, last name, and email address elements
const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const email = document.getElementsByName("email");
// Write a function to pre-fill the form with the given values
function preFillForm(first_name, last_name, email_address) {
  firstName[0].value = first_name;
  lastName[0].value = last_name;
  email[0].value = email_address;
}
 
try {
  preFillForm("Rahul", "Kumar", "rahul.kumar@somecompany.com");
} catch {
  console.error("Please read the instructions carefully and try again.");
}



