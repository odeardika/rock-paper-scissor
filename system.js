const rock_button = document.getElementById("rock");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickComputerHand(){
    let i = getRandomInt(0, 2);
    
}

let i = getRandomInt(0, 2);
console.info(i)