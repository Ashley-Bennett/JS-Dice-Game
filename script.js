let score = 0
let wins = 0
let losses = 0
let rollButton = document.getElementById("roll");
let displayScore = document.getElementById("score")
let die = document.getElementById("die")
let result = document.getElementById("result")
let winTotal = document.getElementById("wins")

const roll = () => {
    die.classList.remove("dieactive")
    void die.offsetWidth
    die.classList.add("dieactive")
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
        // winTotal.textContent = 
        // `Current wins: ${wins}` 
        // `Current losses: ${losses}`
        // `W/L Ratio: ${ratio}`
        result.textContent = `Congratulations, you won. +1 to total wins`
        wins ++
        score = 0
    } else if (score == 0){
        // winTotal.textContent =
        // `Current wins: ${wins}`
        // `Current losses: ${losses}`
        // `W/L Ratio: ${ratio}`;
        result.textContent = `You rolled a 1, start over`;
        score = 0;
    } else {
        // winTotal.textContent =
        // `Current wins: ${wins}`
        // `Current losses: ${losses}`
        // `W/L Ratio: ${ratio}`;
        result.textContent = ``;
    }
    let ratio = (Math.floor((wins / losses)*100)/100)
    winTotal.innerHTML =
    `Current wins: ${wins}<br> Current losses: ${losses}<br>W/L Ratio: ${ratio}`
    // let ratio = (wins / losses)
}



const updateScore = () => {
    displayScore.textContent = `Current score: ${score}`
    // die.classList.remove("dieactive")
}

rollButton.addEventListener("click", (roll))
die.addEventListener("click", (roll))