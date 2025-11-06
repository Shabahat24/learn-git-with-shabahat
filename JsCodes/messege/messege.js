// Use getElementsByClassName to get all message elements
const message = document.getElementsByClassName("message");
// Use getElementsByClassName to get all message title elements
const messageTitle = document.getElementsByClassName("message-title");
// Use for of loop to add background color as lightyellow to all even index messages and yellow to all odd index messages
let elementIndex = 0;
for (const element of message) {
 if (elementIndex % 2 === 0) {
    element.style.backgroundColor = "lightyellow";
  } else {
    element.style.backgroundColor = "yellow";
  }
  elementIndex++;
}
//  Use for of loop to add index to each message title
let messageIndex = 1;
for (const element of messageTitle) {
  element.innerText = `${messageIndex}. ${element.innerText}`;
  messageIndex++;
}
 