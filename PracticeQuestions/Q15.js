// Questions : Create a H2 Heading element with text - "Hello JavaScipt!".Append from "I am learning Dom." to this string using JS.

let str = " I am learning Dom.";
let heading = document.querySelector('h2');
console.dir(heading);
heading.innerText = heading.innerText + str;
