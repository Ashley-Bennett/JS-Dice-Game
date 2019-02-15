let score = 0
let wins = 0
let losses = 0
let rollButton = document.getElementById("roll");
let displayScore = document.getElementById("score")
let die = document.getElementById("die")
let result = document.getElementById("result")
let winTotal = document.getElementById("wins")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let grid = document.getElementsByClassName("grid-main")[0]
let grid2 = document.getElementsByClassName("grid-2")[0]

player1.addEventListener("click", () => {
    grid.style.display = "grid"
    grid2.style.display = "none"
    document.getElementById("mainMenu").style.display = "block"
    document.getElementById("intro").style.display = "none"
})


document.getElementById("mainMenu").addEventListener("click", () => {
    grid.style.display = "none"
    grid2.style.display = "none"
    document.getElementById("mainMenu").style.display = "none"
    document.getElementById("intro").style.display = "block"
    score = 0
    wins = 0
    losses = 0
})

// const mainMenu = () => {
//     grid.style.display = "none"
//     document.getElementById("mainMenu").style.display = "none"
//     document.getElementById("intro").style.display = "block"
    
// }

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


//multiplayer
let die1 = document.getElementById("player1Die")
let die2 = document.getElementById("player2Die")
let displayScore1 = document.getElementById("score1")
let score1 = 0
let displayScore2 = document.getElementById("score2")
let score2 = 0
let wins1 = 0

const roll1 = () => {
    die1.classList.remove("dieactive")
    void die1.offsetWidth
    die1.classList.add("dieactive")
    let newScore = Math.ceil(Math.random() * 6 );
    console.log(newScore)
        if (newScore == 1){
            console.log("You lose")
            score1 = 0
            die1.src="./img/dice1.png"
        } else if (newScore == 2){
            console.log("you scored 2")
            score1 += 2
            die1.src="./img/dice2.png"
        } else if (newScore == 3){
            console.log("you scored 3")
            score1 += 3
            die1.src="./img/dice3.png"
        } else if (newScore == 4){
            console.log("you scored 4")
            score1 += 4
            die1.src="./img/dice4.png"
        } else if (newScore == 5){
            console.log("you scored 5")
            score1 += 5
            die1.src="./img/dice5.png"
        } else if (newScore == 6){
            console.log("you scored 6")
            score1 += 6
            score2 = 0
            die1.src="./img/dice6.png"
        } else{
            console.log("broken")
        }
    checkScore1()
    updateScore1()
}

const checkScore1 = () => {
    if(score1 >= 20){
        score1 = 0
        score2 = 0
    }
}

const updateScore1 = () => {
    displayScore1.innerHTML = `Current score:<br> ${score1}`
    displayScore2.innerHTML = `Current score:<br> ${score2}`
}

die1.addEventListener("click",(roll1))

const roll2 = () => {
    die2.classList.remove("dieactive")
    void die2.offsetWidth
    die2.classList.add("dieactive")
    let newScore = Math.ceil(Math.random() * 6 );
    console.log(newScore)
        if (newScore == 1){
            console.log("You lose")
            score2 = 0
            die2.src="./img/dice1.png"
        } else if (newScore == 2){
            console.log("you scored 2")
            score2 += 2
            die2.src="./img/dice2.png"
        } else if (newScore == 3){
            console.log("you scored 3")
            score2 += 3
            die2.src="./img/dice3.png"
        } else if (newScore == 4){
            console.log("you scored 4")
            score2 += 4
            die2.src="./img/dice4.png"
        } else if (newScore == 5){
            console.log("you scored 5")
            score2 += 5
            die2.src="./img/dice5.png"
        } else if (newScore == 6){
            console.log("you scored 6")
            score2 += 6
            score1 = 0
            die2.src="./img/dice6.png"
        } else{
            console.log("broken")
        }
    checkScore2()
    updateScore2()
}

const checkScore2 = () => {
    if(score2 >= 20){
        score1 = 0
        score2 = 0
    }
}

const updateScore2 = () => {
    displayScore1.innerHTML = `Current score:<br> ${score1}`
    displayScore2.innerHTML = `Current score:<br> ${score2}`
}

die2.addEventListener("click",(roll2))

player2.addEventListener("click", () => {
    grid.style.display = "none"
    grid2.style.display = "grid"
    document.getElementById("mainMenu").style.display = "block"
    document.getElementById("intro").style.display = "none"
})

