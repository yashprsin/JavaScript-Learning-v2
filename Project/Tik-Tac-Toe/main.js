let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-game");
let overlayss = document.querySelector(".overlay ");
let msg = document.querySelector("#message");


let turn0 = true
const winptn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enablebtn();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true
        checkWinner();
    });
});

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = turn;
    }
}
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        overlayss.classList.add("hide");
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`
    overlayss.classList.remove("hide");
    disablebtn();
}

const checkWinner = () => {
    for (let pattern of winptn) {
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 == pos1 && pos1 == pos2) {
                // console.log(`Player ${pos0} wins!`);
                showWinner(pos0)
            }
        }
    }
};
newgame.addEventListener('click', resetgame)
resetbtn.addEventListener('click', resetgame)