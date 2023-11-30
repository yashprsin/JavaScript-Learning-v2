// ----------->    Variable Data Types   <-----------

// ----------->    Console.log(print)   <-----------
console.log("Hello js");
console.log('Hello js');

// ----------->    Variables in JS   <-----------
// Variables are containers for data
age = 25;
nam = "LitWeb";
name2 = "JavaScript";
console.log(age);
console.log(nam);
console.log("Language : " + name2);
price = 99.99;
console.log("Soft Boy Price is : " + price);

// Note : Null is the represents an intentional absence of a value.
x = null;
console.log(x);

// A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.
y = undefined;
console.log(y);

// ----------->    Boolean Variable   <-----------
isfollow = true;
notfollow = false;
console.log(isfollow);
console.log(notfollow);

// Note : Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time

// Variable Rules
// -> Variable names are case sensitive "a" & "A"  is different.
// -> Only letter, digits, underscore(_) and $ is allowed (not even space)
// -> Only letter, underscore(_) or $ should be 1st character
// -> Reserved words cannot be variable names.
_name = "underscore";
$name = "doller";

console.log(_name);
console.log($name);
// + fullName   ->   Camel Case
// + fullname   ->   Normal Case
// + full-name  ->   Kabab Case
// + full_name  ->   Snake Case
// + FullName   ->   Pascal Case

// ----------->    Let, Const & var   <-----------
// + Var    ->  Variable can be re-declared & Updated. A global Scope Variable.
// + Let    ->  Variable cannot be re-declared but be can Update. A Block scope variable.
// + Const  ->  Varibaek cannot be re-declared or Updated. A Block scope variable.

// Note : before 2015 use 'var' But In 2015 JavaScript Updated of ES6. So after is update we can't be used var as professional use case.
// Explain : ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

var age = 18;
var age = 19;
var age = 20;

console.log(age);
let ageV1 = 25
console.log(ageV1);
ageV1 = 27
console.log(ageV1);

const Age = 14
console.log(Age);
// Age = 3
const PI = 3.14
console.log(PI);

// Example blocks

{
    let toyCar = 99.00;
    console.log("Toy Car \nINR - "+ toyCar);
}
{
    let toyCar = 999.00;
    console.log("Toy Car \nINR - "+ toyCar);
}

// ----------->    Data Types   <-----------
// + Primitive Data tyes these are basically 7 types.
// + Numbers 
let number = 12;
let fNumber = 10.90;
console.log("Number without decimal : " + typeof(number));
console.log("Float with decimal : " + typeof(fNumber));
// + String
let language = "JavaScript";
console.log(typeof(language));
// + Boolean 
let isFollow = true;
console.log(typeof(isFollow));
// + undefine 
let x1;
console.log(typeof(x1));
// + null 
let y1 = null;
console.log(typeof(y1));
// + BigInt 
let number2 = BigInt("123451");
console.log(number2+" - "+typeof(number2));
// + Symbol
let sys = Symbol("Hello!");
console.log(sys);
console.log(typeof(sys));


// + Non Primitive Data type -> Object -> Some Categories of - Arrays, Fuctions
// Object is the collections of value. like - Student data - name,age, marks, contact, attenace, grade 

const Student = {
    fullName1 : "Shubham Kumar",
    age : 24,
    marks : 329,
    isPass : true,
    contact : 1234567890,
    attenace : 63,
    grade : "B+",
};
console.log(Student);
console.log(Student["fullName1"]);
console.log(Student["age"]);
console.log(Student.fullName1);
console.log(Student.contact);
Student["age"] = Student["age"] + 10
console.log(Student["age"]);


