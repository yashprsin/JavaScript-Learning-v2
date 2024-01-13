let u_Score = 0;
let c_Score = 0;

const choices = document.querySelectorAll(".choice");

const c_choice = () => {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

let drowmsg = document.querySelector(".winner-d").classList;
let winmsg = document.querySelector(".winner-w").classList;
let losemsg = document.querySelector(".winner-l").classList;
const playgame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = c_choice();
    console.log("Computer = ", compChoice);

    if (compChoice === userChoice) {
        console.log("Drow");
        drowmsg.remove("hide");
        winmsg.add("hide");
        losemsg.add("hide");
    }
    else if (userChoice === "rock" && compChoice === "scissors" || userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper") {
        console.log("Your Win");
        winmsg.remove("hide");
        drowmsg.add("hide");
        losemsg.add("hide");
        u_Score += 1
    }
    else {
        console.log("You Lose");
        c_Score += 1
        losemsg.remove("hide");
        winmsg.add("hide");
        drowmsg.add("hide");
    }
    document.querySelector('#times-u').innerText = u_Score;
    document.querySelector('#times-c').innerText = c_Score;
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("Clixk")
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
