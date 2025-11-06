const registerForm = document.querySelector("#register-form");

// Use the 'submit' event to listen to form submissions on the form
// Use preventDefault() to prevent the default form submission behavior

// Create an empty object to store the form responses

// Loop through the form elements and store the values in the formResponses object

// Use console.table() to output the form responses in a table format on the console
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let formResponses = {};
  for (let el of event.target.elements) {
    formResponses[el.name] = el.value;
  }
  console.table(formResponses);
});

 
