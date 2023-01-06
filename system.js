const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissor");
const output = document.getElementById("output");
output.style.display = "none";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickComputerHand(){
    let hand;
    let i = getRandomInt(0, 2);
    if(i == 0) hand = "rock";
    if(i == 1) hand = "paper";
    if(i == 2) hand = "scissor";
    
    return hand;
}

function cekResult(playerHand){
    let com = pickComputerHand();
    if(playerHand != com){
        if(playerHand != "rock"){
            if(playerHand != "paper"){
                //player using scissor
                if(com == "rock"){
                    output.textContent = `You lose the computer is using ${com} and you are using ${playerHand}`;
                }
                else{
                    output.textContent = `You win the computer is using ${com} and you are using ${playerHand}`;
                }
            }
            else{
                //player using paper
                if(com == "scissor"){
                    output.textContent = `You lose the computer is using ${com} and you are using ${playerHand}`;
                }
                else{
                    output.textContent = `You win the computer is using ${com} and you are using ${playerHand}`;
                }    
            }
        }
        else{
            //player using rock
            if(com == "paper"){
                output.textContent = `You lose the computer is using ${com} and you are using ${playerHand}`;
            }
            else{
                output.textContent = `You win the computer is using ${com} and you are using ${playerHand}`;
            }
        }
    }else{
        output.textContent = `It's a draw you and the computer are using ${com}`;
    }    
}


rock_button.addEventListener("click", cekResult("rock"));
paper_button.addEventListener("click", cekResult("paper"));
scissor_button.addEventListener("click", cekResult("scissor"));