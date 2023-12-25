// Questions : Take a number n as input from user. Create a array of the numbers form 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use reduce method to calculate product of all numbers in the array.

let lengthofarray = parseInt(prompt("Enter length of array"));
let arr = [];
for(let i = 1; i < lengthofarray; i++){
    // arr[i] = parseInt(prompt("Enter the element"));
    arr[i] = i;
};

console.log('Array : ', arr);

let sumofarr = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sumofarr);

let fac = arr.reduce((prev, curr) => {
    return prev * curr;
});

console.log(fac);