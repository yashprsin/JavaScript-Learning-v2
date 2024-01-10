// ----------->    Events   <-----------
// The changes in the state of an object is known as Event.
// Event are fired to notify code of "interesting change" that may affect code excution.

// Types of Events 
//  + Mouse Events (Click, Double click ..etc)
//  + Keyboard events (keypress, keyup, keydown)
//  + Form Events (Submit etc.)
//  + Print event & many more.

// Events Handing in JS

btn1 = document.querySelector("#btn-1");
btn2 = document.querySelector("#btn-2");
btn1.onclick = () => {
    console.log("Button Clicked!");
}
// console.log(btn1);
document.querySelector("#div1").onmouseover = () => {
    console.log("Mouse Over Div")
}
// properties of events 
btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}
// Events Listener
const div3 = document.getElementById('div3');
const btn3 = document.getElementById('Handler');
div3.addEventListener("click", () => {
    console.log("Hello I an Event Listener.");
})

const Handler1 = () => {
    console.log("Handler - 1");
};
const Handler2 = () => {
    console.log("Handler - 2");
};
const Handler3 = () => {
    console.log("Handler - 3");
};
const Handler4 = () => {
    console.log("Handler - 4");
};
btn3.addEventListener("click", Handler1);
btn3.addEventListener("click", Handler2);
btn3.addEventListener("click", Handler3);
btn3.addEventListener("click", Handler4);
// remove Listener
btn3.removeEventListener("click", Handler1);