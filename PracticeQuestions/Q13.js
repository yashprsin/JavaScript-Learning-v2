// Questions : We are given array of marks of students. Filter our of the marks of students that scored 90+.

let students_marks = [87, 93, 64, 99, 86];
const greater90 =  students_marks.filter(val => {
    return val > 90; 
});

console.log(greater90);


