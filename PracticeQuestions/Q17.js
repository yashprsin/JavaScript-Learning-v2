// Questions : Create a new button element. Give it a text "Click me", background color of red & text color of wihte.

let btn = document.createElement("button");
btn.innerText = "submit";
btn.style.color = "#fff";
btn.style.backgroundColor = "red";
let body = document.querySelector("body"); 
body.prepend(btn);