// Use querySelector() to select the home-link element
const siteTitle = document.querySelector("#home-link");
// Use querySelectorAll() to select all post-link elements
const postTitle = document.querySelectorAll(".post-link");
// Use querySelectorAll() to select the second post element
const secondPost = document.querySelectorAll(".post:nth-child(2)")[0];
// Use innerText to set the site title as "Minimal Thoughts"
siteTitle.innerText = "Minimal Thoughts";
// Use forEach() to iterate over the post-link elements and set the color to darkred
postTitle.forEach((title) => {
  title.style.color = "darkred";
});
// Use style.backgroundColor to set the background color of the second post to rgb(255, 210, 255)
secondPost.style.backgroundColor = "rgb(255, 210, 255)";