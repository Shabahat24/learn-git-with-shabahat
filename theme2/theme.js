const lightThemeBtn = document.querySelector("#light-theme");
const darkThemeBtn = document.querySelector("#dark-theme");
const productCard = document.querySelector(".product-card");

// Use addEventListener to add event listener to the light theme button and remove the dark theme class and add the light theme class
lightThemeBtn.addEventListener("click",()=>{
     productCard.classList.remove("dark-theme");
     productCard.classList.add("light-theme");
});
// Use addEventListener to add event listener to the dark theme button and remove the light theme class and add the dark theme class
darkThemeBtn.addEventListener("click",() => {
    productCard.classList.remove("light-theme");
    productCard.classList.add("dark-theme");
});