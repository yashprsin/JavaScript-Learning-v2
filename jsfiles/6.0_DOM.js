// ----------->    Chapter 6   <-----------
// ----------->    DOM - (Document Object Model)   <-----------

console.log("Welcome to DOM");
// alert("Learning DOM");

// ----------->    Window Object   <-----------
// This window object represents an open window in a browser. it is browser. It is browser's object (not JavaScript's) & is automatically create bt browser.
// Note : It is a global Object with lots of properties & methods.
window.console.log("Welcome Back!");
console.log(window);
// window.prompt("Enter your name!");

// Console.log print the value of parameter in console. 
// Console.dir - Special properties like - document properties and method to print.
console.log(window.document);
console.dir(window.document);
console.dir(document);
console.dir(document.body);
console.log(document.body);
console.log(document.head);
console.dir(document.body.childNodes[1]);

// Dynamic Changes 
document.body.style.background = "#ccc";
document.body.childNodes[1].innerText = "DOM";

// ----------->    Dom Manipulation   <-----------
// With id 
let topic = document.getElementById("heading");
console.log(topic);
// return value

// With class 
let paragraph = document.getElementsByClassName("container");
console.log(paragraph);
// return html collections

// With tag
let para = document.getElementsByTagName("p");
console.log(para);
// return html collections

// Qurey Selector for tag
let element = document.querySelector("p");
console.log(element);
// releted to value return 1st node

// ALL Qurey Selector for tag
let elements = document.querySelectorAll("p");
console.log(elements);
// releted to value return multiple node

// Qurey Selector for class 
let wthcls = document.querySelector(".container");
console.dir(wthcls);
// ALL Qurey Selector for class 
let wthclsa = document.querySelectorAll(".container");
console.dir(wthcls);

// Qurey Selector for class 
let wthid = document.querySelector("#heading");
console.dir(wthid);
// ALL Qurey Selector for class 
let wthida = document.querySelectorAll("#heading");
console.dir(wthida);

// ----------->    Properties   <-----------
// tagName          :   return tag for element nodes.
{
    let returnValue = document.querySelector("#heading");
    console.dir(returnValue);
    console.log(returnValue.tagName);
}
{
    // innerText        :   return the text content of the element.
    const source = document.getElementById("source");
    const textContentOutput = document.getElementById("textContentOutput");
    const innerTextOutput = document.getElementById("innerTextOutput");
    
    textContentOutput.value = source.textContent;
    innerTextOutput.value = source.innerText;

    console.log(source.innerText);

    // innerContent     :   return textual content even for hidden element.
    console.log(source.textContent);
}

{
    // innerHTML        :   return the plain text or HTML in the element.
    const myElement = document.getElementById("id-1");

    let contents = myElement.innerHTML;
    console.log(contents);
}