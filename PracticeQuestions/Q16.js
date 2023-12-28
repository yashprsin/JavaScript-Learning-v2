// Questions : Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
for (let d in divs){
    divs[d].innerText = "Box - "+ d;
}