// Questions : For a given with marks of student -> [85, 97, 44, 37, 76, 60] Find the average maeks of the entire class.

let student_marks = [85, 97, 44, 37, 76, 60];   
let sum = 0;
for(let mark of student_marks){
    sum += mark;
}
console.log(sum/student_marks.length);