var game = {};
game.gameId = 1;
game.numPlayers = 4;


document.addEventListener("DOMContentLoaded", function (event) {
    
    for (let j = 1; j <= game.numPlayers; j++) {
        let p1s = document.querySelectorAll(".player" + j);

            for (let i = 0; i < 6; i++) {
                p1s[i].addEventListener("change", event => updateScore(j, p1s));

                if (updateScore(j, p1s)>62){
                    document.getElementById(j+"bonus").value=50;
                }
            }
    }

    function updateScore(playerIndex, playerScores) {
        let scorePlayer = 0;
        
        for (let i = 0; i < playerScores.length; i++) {
            if (playerScores[i].value !== "") {
                scorePlayer += parseInt(playerScores[i].value);
            }
        }
        let summa = document.getElementById(playerIndex + "summa");
        summa.value = scorePlayer;
    }






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
      

    //om document.querySelectorAll(".playerJ") alla element !=="" och scorePlayer >= 63 sätt Jbonus=50
    //else sätt Jbonus=0



}); //avslutar dom-loaded-grejen


