let score = 0
let wins = 0
let rollButton = document.getElementById("roll");
let logScore = document.getElementById("logScore")


const roll = () => {
    let newScore = Math.ceil(Math.random() * 6 );
    console.log(newScore)
        if (newScore == 1){
            console.log("You lose")
            score = 0
        } else if (newScore == 2){
            console.log("you scored 2")
            score += 2
        } else if (newScore == 3){
            console.log("you scored 3")
            score += 3
        } else if (newScore == 4){
            console.log("you scored 4")
            score += 4
        } else if (newScore == 5){
            console.log("you scored 5")
            score += 5
        } else if (newScore == 6){
            console.log("you scored 6")
            score += 6
        } else{
            console.log("broken")
        }
    checkScore()
}

const checkScore = () => {
    if(score >= 20){
        console.log("You Win")
        score = 0
    }
}


rollButton.addEventListener("click", (roll))
logScore.addEventListener("click", () => {
    console.log(score)
})