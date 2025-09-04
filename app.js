let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompchoice = () => {
    const options = ['rock', 'paper', 'sisccors']
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    console.log('game was draw');
    msg.innerHTML = "game was draw"
     msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,comChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        msg.innerHTML = `you win! your ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "green"
    } else{
         compScore++;
        compScorePara.innerText = compScore ;
         msg.innerHTML = `you lose! ${comChoice} beats  your ${userChoice}`
          msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // computer choice
    const comChoice = genCompchoice()
    console.log("comp choice =", comChoice);
    if (userChoice === comChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // sisccor , paper 
            userWin = comChoice === "paper" ? false : true
        } else if (userChoice === 'paper') {
            // rock ,sicssors
            userWin = comChoice === 'sisccors' ? false : true
        } else {
            // rock paper
            userWin = comChoice === 'rock' ? false : true
        }
        showWinner(userWin,userChoice,comChoice)
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})