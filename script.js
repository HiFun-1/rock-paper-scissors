let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! 🎉👏 Your "${userChoice}" beats "${compChoice}"`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! 🤷‍♂️🤦‍♂️ "${compChoice}" beats  your "${userChoice}"`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice : ", userChoice);
    //Generate computer choice
    const compChoice = getCompChoice();
    console.log("compChoice : ", compChoice);

    if(userChoice === compChoice)
    {
        console.log("DRAW!");
        msg.innerText = "Draw!🤝🤝 Play Again!👍👍";
        msg.style.backgroundColor = "#081b31";
    }
    else
    {
        let userWin  = true;
        if(userChoice === "rock")
            userWin = compChoice === "paper" ? false : true;
        else if(userChoice === "paper")
            userWin = compChoice === "rock" ? true : false;
        else
            userWin = compChoice === "paper" ? true : false;
    
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});