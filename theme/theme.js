let mainBody = document.getElementById("pageBody");
let btn = document.getElementById("toggleBtn");

let isDark = false;
function toggle() {
    if (isDark === false){
        mainBody.style.backgroundColor = "black";
        btn.innerText = "Light Theme";
    }
    else {
        mainBody.style.backgroundColor = "white";
        btn.innerText = "Dark Theme";
    }

    isDark =! isDark;

}