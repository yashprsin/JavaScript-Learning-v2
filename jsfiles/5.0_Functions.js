// ----------->    Chapter 5   <-----------
// ----------->    Functions & Methods   <-----------
// Functions : Block of code that performs a specific task, can be invoked whenever needed.

function Greeting(){
    console.log("Welcome to OneZero!");
}

Greeting();

function GreetingMessage(msg){
    console.log(msg);
}

GreetingMessage("Hello guys, We Create a fun of you.");

function SumOf2Numbers(x,y){
    console.log("Sum : ", x+y)
}

SumOf2Numbers(2,5);

// Using of return in Funtion 
// Note : Return only one value
// Note : After return the value you write something is never excute.
// Note : Function parameters like local varibles these have a local scope of function.

function DifferenceOf2Numbers(x,y){
    Sub = x-y;
    return Sub;
}

let values =  DifferenceOf2Numbers(10,5);
console.log("Substract : ", values);

// ----------->    Arrow Functions   <-----------
// Sum Fucntions
const SumOf3Numbers = (a,b,c) => {
    console.log("Sum : ", a+b+c);
}

SumOf3Numbers(1,2,3);

// Multiply Fucntions

const Multiplyof2Number = (x,y) =>{
    console.log("Multiply : ", x*y);
}

Multiplyof2Number(11,7);

// ----------->    ForEach Loop in Array   <-----------
// A callback is a function passed as an argument to another function.

let Intergers = [1,2,3,4,5,6,7];

Intergers.forEach(function printVal(val){
    console.log(val);
});

// Similar
Intergers.forEach(val => {
    console.log(val);
}); 

let cities = ["delhi", "pune", "kolkata", "jaipur", "chandigarh", "lacknow"];

cities.forEach(val => {
    console.log(val);
});

cities.forEach(val => {
    console.log(val.charAt(0).toUpperCase() + val.slice(1));
});

// they have 3 parameters value, index, array
// value
cities.forEach(val => {
    console.log(val);
});

// value, index
cities.forEach((val, idx) => {
    console.log(val, idx);
});

// value, index
cities.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});

// Higher order function/method -> function use as parameters or return a function
// foreach - higher order function.

// ----------->    Map Methods   <-----------
// Create a new array with the result of some operation. The value its callback return are used to from new array.
// This function is also used three parameters value, index, array.
let nums = [41,15,23,56,85];

nums.map(val => {
    console.log(val);
});

// also new return new array
let arr =  nums.map(val => {
    return val*val
});

console.log("Square value : ", arr);

// ----------->    Filter Methods   <-----------
// Create a new array of element the give true for a codition/Filter.
// This function is also used three parameters value, index, array.
// for example : 

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let even_arr =  arr1.filter(val => {
    return val%2 === 0;
});
let odd_arr =  arr1.filter(val => {
    return val%2 !== 0;
});
let greaterthan3 =  arr1.filter(val => {
    return val > 3;
});

console.log(even_arr);
console.log(odd_arr);
console.log(greaterthan3);

// --------->    Reduce Methods   <-----------
// Performs some operations & reduces the array to a single value. It returns that single value.
// for example : 

let fuc_arr = [1,2,3,4];
const sumofarr = fuc_arr.reduce((res, curr) => {
    return res + curr;
});

console.log(sumofarr);

let largestElement = nums.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});

console.log(largestElement);