// ----------->    Chapter 3   <-----------
// Loops :- Loops are used to execute a piece of code again & again


// ----------->    For Loop   <-----------
// For Example : 

{
    for(let i = 0; i < 5; i++){
        console.log("hello Bro");
    }    
}
// Print 0 to 5 number 

{
    for(let i = 0; i <= 5; i++){
        console.log("i = ", i);
    }
}

// Calculate 0 to 5 number 
{
    let sum = 0
    for(let i = 1; i <= 5; i++){
        sum = sum + i;
    }
    console.log(sum);
}

// ----------->    While Loop   <-----------

// For Example : 

{
    let i = 1;
    while(i<=5){
        console.log("i = ", i);
    i++;
    }   

}
// ----------->    Do While Loop   <-----------
// For Example : 
{
   let i = 20; 
   do {
    console.log("Hello");
    i++;
   }while(i <= 10);
}
{
   let i = 0; 
   do {
    console.log("i = ", i);
    i++;
   }while(i <= 10);
}
// ----------->    For-of Loop   <-----------

// for-of Loop : Basically us of String, Array 
// For Example : 

{
    str = "String";
    for(let i of str){
        console.log(i);
    }
}

{
    let str = "String";
    let size = 0
    for(let val of str){
        size++;
    }
    console.log("String Size : ", size);
}

// Note : for-of loop not use of object.

// ----------->    For-in Loop   <-----------
// For Example : 
{
    let Person = {
        name : "Tony Stark",
        bio : "Self Made Billionaire",
        net_worth : "98 billon Dollors",
        age : 46,
    }
    let str = "JavaScript";
    for(let key in Person ){
        console.log("Key : ", key, " Value : ", Person[key]);
    }
}

// ----------->    String in JS   <-----------
// for exp :
{
    let str = "String";
    console.log(typeof(str));
    
    // Length of String
    console.log("Length of string : ", str.length);
    
    // Indexing of String
    console.log("Index 2 of string : ", str[2]);
    console.log("Index 0 of string : ", str[0]);
}
// ----------->    Template Literals in JS   <-----------
// A way to have embedded expression in strings, template literals are always use back ticks
{
    let templateLiteral = `This is the template Literals.`;
    console.log(templateLiteral);

    let obj = {
        item : "book",
        price : 1299,
    }
    console.log(`The cost of ${obj.item} is ${obj.price} rupees.`);
}
// Note : To create a String by doing subtitution of placeholders called string Interpolation.

// ----------->    String Methods in JS   <-----------
// Note Method are not changing the origial value.
{
    let str = "JavaScript";
    // Uppercase 
    console.log("Uppercse : ", str.toUpperCase());
    // Lowercase 
    console.log("lowercse : ", str.toLowerCase());
}
{
    // trim : Remove start and end space !
    let str = "              This  is    a     string                ";
    console.log("Trim : ", str.trim());
}

{
    // Slicing 
    let str = "This is a String";
    console.log(str.slice(0,4));
    console.log(str.slice(10));

    // Search
    console.log(str.search("S"));

    // Concat - Join of 2 String. 
    let str1 = "This is Second Sring";
    console.log(str.concat(str1));
    console.log(str1.concat(str));
    console.log(str + str1);
    
    // Replace 
    let str2 = "hello";
    console.log(str2.replace("lo", "p"));
    // Replace 
    let str3 = "hellololollololollolo";
    console.log(str3.replaceAll("lo", "p"));
    
    // Index value 
    console.log(str3.charAt(13));
    
    

}