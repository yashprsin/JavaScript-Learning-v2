// ----------->    Chapter 4   <-----------
// ----------->    Array   <-----------
// Note : String are Immutable.
// Note : Array are mutable.
{
    let student_marks = [ 98,25,26,45,87];
    console.log(student_marks);

    // length of array
    console.log(student_marks.length);

    // type of array : Object
    console.log(typeof(student_marks));

    let student_name = ["Yash", "Nitin", "litweb", "Komal", "Shivani"];
    console.log(student_name);

    // Access to array as a index or place
    console.log(student_name[1], student_marks[1]);
    console.log(student_name[0], student_marks[0]);
    
    // Change the value of array after define
    student_marks[1] = 78;
    console.log(student_name[1], student_marks[1]);
    student_name[2] = "Harish";
    console.log(student_name[2]);

    let heros = ["Iron Man", "Captain America", "Deadpool", "Ant Man", "Hulk", "Black Widow", "Captain Marvel", "Batman", "Aqua Man", "Thor", "Loki", "Odin", "Black Panther", "Spider Man"]

    console.log(heros);
    for (i=0; i< heros.length; i++){
        console.log(heros[i]);
    }

    console.log("3rd Type of print of array\n");

    for(let hero of heros ){
        console.log(hero);
    }
    
    console.log("4th Type of print of array\n");

    for(let hero in heros ){
        console.log(heros[hero]);
    }
    for(let hero in heros ){
        console.log(heros[hero].toUpperCase());
    }

}

// ----------->    Array Methods   <-----------

{
    // Push : Add to end
    let vegetables = ["Patato", "Pea", "Tamato", "Lady Finger"];
    vegetables.push("JackFruit");
    console.log(vegetables);
    vegetables.push("Garlic", "Black Beans", "Ginger");  
    console.log(vegetables);
    vegetables[8] = "Sweet Potato";
    console.log(vegetables);
    
    // pop : Deleted form end and return,
    console.log(vegetables.pop());
    console.log(vegetables);
    let Deleted_Vegetable = vegetables.pop();
    console.log(Deleted_Vegetable);
    console.log(vegetables);
    
    // toString : converted array into String

    let ArrayToConvertIntoString = vegetables.toString();
    console.log(ArrayToConvertIntoString);
    console.log(typeof(ArrayToConvertIntoString));
    
    let IntegerNumbers = [101, 102, 103, 104, 105, 106];
    let AToS = IntegerNumbers.toString();
    console.log(AToS);
    console.log(typeof(AToS));

    let Numbers = [1, 2, 3, 4, 5, 6];
    console.log(Numbers.toString());

    // Concat : join two array(add to array), 
    SeactionA = ["Asish", "Balveer", "Chadrapal", "Dhamveer"];
    SeactionB = ["Elvish", "Finn", "Garima", "Harish"];

    let student = SeactionA.concat(SeactionB);
    console.log(student);
    //  Unshift : Add array element in Start,
    let Student = ["Asish", "Ansh", "Arvind", "Ajay"];
    Student.unshift("Bablu");

    // Sift : Deleled array element to start
    let siftStudent = Student.shift();
    console.log(Student);
    console.log(siftStudent);
    console.log(Student);

    // Slice : Return a peice of the array
    // Note : Slice Method is not change of orignal array.

    let Fruit = ["Apple", "Mango", "Gauava", "Dragon Fruit"];
    console.log(Fruit);
    console.log(Fruit.slice(1,3));

    // Splice : Change original array (add, remove, replace)
    // Note : Splice method change orignal Array.
    let arr = [1,2,3,4,5,6,7,8,9];
    arr.splice(2,2,101,102);
    console.log(arr);
    arr.splice(3,1);
    console.log(arr);
    arr.splice(3,0, "Fab");
    console.log(arr);
    arr.splice(5);
    console.log(arr);
}