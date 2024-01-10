// Questions : Create a toggle button that changes the screen to dark-mode when Clicked & light mode when click again.
// Solution:
let mode = document.querySelector("#mode");
let currentmode = "light";
mode.addEventListener("click", () => {
    if (currentmode === "light"){
        document.querySelector("body").style.backgroundColor = "#000";
        document.querySelector("body").style.color = "#fff";
        currentmode = "dark";
        console.log(currentmode);
    }else if (currentmode === "dark"){
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "#fff";
        document.querySelector("body").style.color = "#000";
        console.log(currentmode);
    }
});