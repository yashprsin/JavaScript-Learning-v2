// Questions : Write a code which can give grades students according to their scores.
// Grade for example : A -> 80 to 100, B -> 70 to 79 C -> 60 to 69 D -> 50 to 59, F - 0 to 49.

Score = prompt("Enter your Score : ");

if (Score >100){
    console.log("Your Enter Invaild Score.");
}else if(Score >=80){
    console.log("Your Grade is : A");
}else if(Score >=70){
    console.log("Your Grade is : B");
}else if(Score >=60){
    console.log("Your Grade is : C");
}else if(Score >=50){
    console.log("Your Grade is : D");
}else{
    console.log("Your Grade is : F");
}