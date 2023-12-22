// Questions : Create a Game where you start with any random game number. Ask the user Keep Guessing the game number until the user enter correct value.

let num = 10; 
let verify = prompt("Enter a Number");

while(num !=verify ){
    verify = prompt("Enter Again Number");
}
console.log("Yes, That is correct number!");