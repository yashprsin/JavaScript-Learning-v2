// ----------->    Chapter 2   <-----------
// ----------->    Operators & Conditional Statements   <-----------

// ----------->    Comments In JS   <-----------

// This is a single line comment.
/* This is the multiline
Comment by Libweb.
*/

// ----------->    Operators In JS   <-----------
// +    Used to perform some operation on data.
// +    Arithmetic Operator
// +    "+ , - , x , /"
// +    Modulus, Exponention, Increment, Decerement

// ----------->    Arthmetic Operators   <-----------
let a = 5;
let b = 2;

console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);

// ----------->    Modulus   <-----------
console.log("a % b =", a%b);

// ----------->    Exponention   <-----------
console.log("a ** b =", a**b);

// ----------->    Uniary Operator   <-----------
{
    // Post Increment and Decrement Operator
    
    let a = 2;
    let b = 5;
    console.log("a = ",a + " & b = ", b);
    a = a + 1;
    console.log("a =", a);
    a++;
    console.log("a =", a);
    b = b - 1;
    console.log("b =", b);
    b--;
    console.log("b =", b);    
}
{
    // Post Increment and Decrement Operator
    let a = 2;
    let b = 5;
    console.log("a = ",a + " & b = ", b);
    console.log("--a =", --a);
    ++b;
    console.log("a-- =", a--);
    ++a;
    console.log("--b =", --b);
}
// ----------->    Assignment Operator   <-----------
// +    "=, +=, -=, *=, %=, **="
{
    let a = 5;
    a += 4; // a = a + 4
    console.log("a = ", a);
}
{
    let a = 5;
    a -= 4; // a = a - 4
    console.log("a = ", a);
}
{
    let a = 5;
    a *= 4; // a = a * 4
    console.log("a = ", a);
}
{
    let a = 5;
    a **= 4; // a = a ** 4
    console.log("a = ", a);
}
{
    let a = 5;
    a /= 4; // a = a / 4
    console.log("a = ", a);
}
{
    let a = 5;
    a %= 4; // a = a % 4
    console.log("a = ", a);
}

// ----------->    Comparison Operator   <-----------
// +    " == ", " === ", " != ", " !== ", " > ", " < ", " >= ", " <= "

{
    let a = 2;
    let b = 6;
    console.log("2 == 6 ", a == b);
}
{
    let a = 6;
    let b = 6;
    console.log("6 == 6 ", a == b);
}
{
    let a = 6;
    let b = 6;
    console.log("6 != 6 ", a != b);
}
{
    let a = 6;
    let b = "6";
    console.log("6 == '6' ", a == b);
}
{
    let a = 6;
    let b = "6";
    console.log("6 === '6' ", a === b);
}
{
    let a = 6;
    let b = "6";
    console.log("6 !== '6' ", a !== b);
}
{
    let a = 5;
    let b = 3;
    console.log("5 < 3", a < b);
}
{
    let a = 5;
    let b = 3;
    console.log("5 > 3", a > b);
}
{
    let a = 5;
    let b = 3;
    console.log("5 <= 3", a <= b);
}
{
    let a = 5;
    let b = 3;
    console.log("5 >= 3", a >= b);
}

// ----------->    Logical Operator   <-----------
// +    "!", "||", "&&"

{
    let a = 5;
    let b = 3;
    let condition_1 = a>b;
    let condition_2 = a===5;
    console.log("condition 1 && condition 2 ", condition_1 && condition_2);
}
{
    let a = "5";
    let b = 3;
    let condition_1 = a>b;
    let condition_2 = a===5;
    console.log("condition 1 && condition 2 ", condition_1 && condition_2);
}
{
    let a = "5";
    let b = 3;
    let condition_1 = a>b;
    let condition_2 = a===5;
    console.log("condition 1 || condition 2 ", condition_1 || condition_2);
}
{
    let a = "5";
    let b = 3;
    let condition_1 = a>b;
    let condition_2 = a===5;
    console.log("condition 1 ! condition 2 ", !(condition_1 < condition_2));
}

// ----------->    Conditional Statement   <-----------
// + Conditional Statement
// + Conditional 1
{
    let age = 16;
    
    if(age >= 18){
        console.log("Yes, you can vote!");
    }
    if(age < 18){
        console.log("Yes, you can't vote!");
    }
}
// + Conditional 2
{
    let mode = "dark";
    let color;

    if(mode === "dark"){
        color = "dark-mode";
    }else{
        color = "light-mode";
    }
    console.log("Mode : ", color);
}
// + Conditional 3
{
    let number = 7;
    
    if(number%2===0){
        console.log("Number : "+number+" is Even!");
    }else{
        console.log("Number : "+number+" is odd!");
    }
}
// + Conditional 4
{
    let mode = "blue";
    let color;
    
    if (mode === "dark"){
        color = "dark-mode";
    }else if (mode === "pink"){
        color = "girl-mode";
    }else if (mode === "blue"){
        color = "beach-mode";
    }else{
        color = "white";
    }
    console.log("Screen Mode : ", color);
}
// + Conditional 5
{
    let mode = "dark";
    
    if (mode === "dark") console.log("Mode : dark-mode")
}
// + Conditional 6
{
    let mode = "e";

    if (mode === "dark") console.log("Mode : dark-mode")
    else console.log("Mode : light-mode")
}
// ----------->    Ternary Opertor   <-----------
// Explain - let assume a:b,c it means a hold the conditon b return Ture and c return False

{
    let age = 25;
    let result = age >= 18 ? "You are Adult!" : "Not Adult!"
    console.log(result)
}
{
    let age = 15;
    age >= 18 ? console.log("You are Adult!") : console.log("Not Adult!")   
}

// Switch Statement on MDN