// Questions : Create an array to store companies -> "Bloombreg", "Microsoft", "Uber", "Google", "IBM", "Netflix" a. Remove the first company of the array, b. Remove Uber & Add Ola in its place, c. Add Amazon at the end.

let Companies = ["Bloombreg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(Companies);
Companies.shift();
console.log(Companies);

Companies.splice(1,1,"Ola");
console.log(Companies);

Companies.push("Amazon");
console.log(Companies);