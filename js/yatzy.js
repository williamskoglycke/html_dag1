var game = {};
game.gameId = 1;
game.numPlayers = 3;

// player1 = {};
// player1.name = "William";
// player1.score = [];
// player2 = { name: "Johan", score: [1, 1, 1, 1, 1, 1] };
// player3 = { name: "Nina", score: [0, 0, 0, 0, 0, 0] };
// game.players = [player1, player2, player3];


document.addEventListener("DOMContentLoaded", function (event) {
    
    for (let j = 1; j <= game.numPlayers; j++) {
        let p1s = document.querySelectorAll(".player" + j);
            for (let i = 0; i < 6; i++) {
                p1s[i].addEventListener("change", event => updateScore(j, p1s));
            }
    }

    function updateScore(playerIndex, playerScores) {
        let scorePlayer = 0;
        for (let i = 0; i < playerScores.length; i++) {
            if (playerScores[i].value !== "") {
                scorePlayer += parseInt(playerScores[i].value);
            }
        }
        var summa = document.getElementById(playerIndex + "summa");
        summa.value = scorePlayer;
    }


    //om document.querySelectorAll(".playerJ") alla element !=="" och scorePlayer >= 63 sätt Jbonus=50
    //else sätt Jbonus=0



    
    function getTotalScore(scores) {
        let totalScore = 0;
        scores.forEach(element => {
            totalScore += element;
        });
        return totalScore;
    }

    // game.players.forEach(element => {
    //     element.totalScore = getTotalScore(element.score);
    // });

    // console.log(player1.totalScore);


}); //avslutar dom-loaded-grejen



// for (var i=0; i<game.numPlayers; i++){
//     var player={};
//     player.id=userId;
//     player.name=userName;
//     player.scores=[];    

//     game.players.push(player);
// }



// function getWinner(players){
//     winner=players[0];
//     for (var i=1;i<players.length;i++){
//         if (players[i].totalScore>winner.totalScore){
//             winner=players[i];
//         }
//     }
// return winner;
// }


// game.winner=getWinner(game.players);
// game.winnerScore=game.winner.totalScore;
// console.log(game.winner);



