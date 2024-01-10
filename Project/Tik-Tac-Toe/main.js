let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turn0 = true
const winptn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true
        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winptn){
        console.log(pattern[0],pattern[1],pattern[2]);
    }
}