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