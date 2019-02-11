let score = 0
let wins = 0
let losses = 0
let rollButton = document.getElementById("roll");
let logScore = document.getElementById("logScore")
let logWins = document.getElementById("logWins")
let logLosses = document.getElementById("logLosses")
let displayScore = document.getElementById("score")
let die = document.getElementById("die")

const roll = () => {
    let newScore = Math.ceil(Math.random() * 6 );
    console.log(newScore)
        if (newScore == 1){
            console.log("You lose")
            score = 0
            losses ++
            die.src="./img/dice1.png"
        } else if (newScore == 2){
            console.log("you scored 2")
            score += 2
            die.src="./img/dice2.png"
        } else if (newScore == 3){
            console.log("you scored 3")
            score += 3
            die.src="./img/dice3.png"
        } else if (newScore == 4){
            console.log("you scored 4")
            score += 4
            die.src="./img/dice4.png"
        } else if (newScore == 5){
            console.log("you scored 5")
            score += 5
            die.src="./img/dice5.png"
        } else if (newScore == 6){
            console.log("you scored 6")
            score += 6
            die.src="./img/dice6.png"
        } else{
            console.log("broken")
        }
    checkScore()
    updateScore()
}

const checkScore = () => {
    if(score >= 20){
        console.log("You Win")
        wins ++
        score = 0
    }
}

const updateScore = () => {
    displayScore.textContent = `Current score: ${score}`
}

rollButton.addEventListener("click", (roll))

logScore.addEventListener("click", () => {
    console.log(score)
})

logWins.addEventListener("click", () => {
    console.log(wins)
})

logLosses.addEventListener("click", () => {
    console.log(losses)
})