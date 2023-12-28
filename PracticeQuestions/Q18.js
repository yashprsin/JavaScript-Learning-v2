// Questions : Create a <p> tag in html, give it a class & Some styling. 
// + Now create a new class in CSS and try to append this class to the <p> element.
// + Did you notice,  how you overwrite the class name when you add a new one? Solve this problem using classList.

// let para = document.createElement("p");
// para.setAttribute("class", "para");
// para.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet veritatis nam, at sapiente saepe, quasi tenetur sed ipsa hic porro nulla expedita molestias corporis vitae rerum voluptatem. Numquam, non fugiat.";
// para.style.color = "purple";
// para.style.fontWeight = "bold";
// document.querySelector("body").append(para);

let para = document.querySelector(".Content");
para.classList.add('topic');