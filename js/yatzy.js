var game = {};
game.gameId = 1;
game.numPlayers = 4;
var diceCounter = 0;


document.addEventListener("DOMContentLoaded", function (event) {

    for (let j = 1; j <= game.numPlayers; j++) {
        let p1s = document.querySelectorAll(".player" + j);

        for (let i = 0; i < 16; i++) {
            p1s[i].addEventListener("change", function (event) {
                updateScore(j, p1s);
                setNowPlaying(j);
            });
        }
    }

    function updateScore(playerIndex, playerScores) {
        let upperScore = 0;
        let totalScore=0;

        for (let i = 0; i < 6; i++) {
            if (playerScores[i].value !== "") {
                upperScore += parseInt(playerScores[i].value);
            }
        }
        if (upperScore > 62) {
            document.getElementById(playerIndex + "bonus").value = 50;
        } else {
            document.getElementById(playerIndex + "bonus").value = 0;
        }
        document.getElementById(playerIndex + "summa").value = upperScore;

        for (let i=0; i<playerScores.length;i++){
            if (playerScores[i].value !== "") {
                totalScore += parseInt(playerScores[i].value);
            }
        }
        document.getElementById(playerIndex + "result").value = totalScore;
    }
    
function setNowPlaying(playerIndex) {
        diceCounter = 0;
        var tempCard =document.getElementsByClassName("card" + playerIndex);
    
        tempCard[0].classList.remove("nowPlaying");
        
        if (playerIndex < game.numPlayers) {
            tempCard= document.getElementsByClassName("card" + (playerIndex + 1));
            tempCard[0].classList.add("nowPlaying");
            openPlayerColumn(playerIndex+1);
        }
        else {
            tempCard=document.getElementsByClassName("card1");
            tempCard[0].classList.add("nowPlaying");
            openPlayerColumn(1);
        }
        
    }

function openPlayerColumn(playerIndex){

        //borde stänga bara i .yatzyTable
        var allInputs = document.getElementsByTagName("input");
        for (let i=0; i<allInputs.length;i++){
            allInputs[i].disabled=true;
        }

        var nowPlayingInput=document.getElementsByClassName("player"+playerIndex);
        for(let i=0; i<nowPlayingInput.length;i++){
            nowPlayingInput[i].disabled=false;
        }
        var dices=document.getElementsByClassName("dice");
        for(let i=0; i<dices.length;i++){
            dices[i].disabled=false;
        }
} 






    
    
    var roll = document.getElementById("rollDices");
    roll.addEventListener("click", () => {
        if (diceCounter < 3) {
            rollDices();
        }
    });
    
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let randomInt = [0, 0, 0, 0, 0];
    var totalDice=0;

    function rollDices(event) {
        
        totalDice=0;
        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("checkDice" + i).checked){
                randomInt[i - 1] = getRandomInt(1, 6);
                document.getElementById("dice" + i).className = generateClassName(randomInt[i - 1]);
            }
            
            if (document.getElementById("checkDice"+i).checked){
                totalDice+=randomInt[i-1];
            }
        }
        diceCounter++;   
    }

    var count = document.getElementById("countDices");
    count.addEventListener("click", () => {
        totalDice=0;
        for (let i = 1; i <= 5; i++) {

        if (document.getElementById("checkDice"+i).checked){
            totalDice+=randomInt[i-1];
            }
        }
        document.getElementById("diceCount").innerHTML="Total: "+totalDice;
    });





    function generateClassName(number) {
        if (number === 0)
            return "hideDice";
        if (number === 1)
            return "fas fa-dice-one";
        if (number === 2)
            return "fas fa-dice-two";
        if (number === 3)
            return "fas fa-dice-three";
        if (number === 4)
            return "fas fa-dice-four";
        if (number === 5)
            return "fas fa-dice-five";
        if (number === 6)
            return "fas fa-dice-six";
    }

    



}); //avslutar dom-loaded-grejen


