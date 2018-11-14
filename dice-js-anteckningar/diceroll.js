document.addEventListener("DOMContentLoaded", function(event){

function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomInt = [0,0,0,0,0];

function rollDices(event){
    for(let i=1;i<=5;i++){
        if (!document.getElementById("checkDice"+i).checked)
            randomInt[i-1]=getRandomInt(1,6);
            document.getElementById("dice"+i).className=generateClassName(randomInt[i-1]);
    }
    console.log(randomInt);
}

function generateClassName(number){
    if (number===0)
        return "hideDice";
    if (number===1)
        return "fas fa-dice-one";
    if (number===2)
        return "fas fa-dice-two";
    if (number===3)
        return "fas fa-dice-three";
    if (number===4)
        return "fas fa-dice-four";
    if (number===5)
        return "fas fa-dice-five";
    if (number===6)
        return "fas fa-dice-six";
}

var roll = document.getElementById("rollDices");
roll.addEventListener("click", rollDices);

}); //stänger domcl