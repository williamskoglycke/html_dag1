var game = {};
game.gameId=1;
game.numPlayers=3;
// game.players=[];

// const userId;//input
// const userName;//input

player1={};
player1.name="William";
player1.score=[];
player2={name:"Johan", score:[1,1,1,1,1,1]};
player3={name:"Nina", score:[0,0,0,0,0,0]};
game.players=[player1,player2,player3];


document.addEventListener("DOMContentLoaded", function(event){

var calc_button=document.getElementById("calc");
calc_button.addEventListener("click", function(event){
    


player1.score.push(parseInt(document.getElementById("1ones").value));
player1.score.push(parseInt(document.getElementById("1twos").value));
player1.score.push(parseInt(document.getElementById("1threes").value));
player1.score.push(parseInt(document.getElementById("1fours").value));
player1.score.push(parseInt(document.getElementById("1fives").value));
player1.score.push(parseInt(document.getElementById("1sixes").value));




// var tempScores=document.querySelectorAll(".col2");


// for (var i=0; i<game.numPlayers; i++){
//     var player={};
//     player.id=userId;
//     player.name=userName;
//     player.scores=[];    
    
//     game.players.push(player);
// }



function getTotalScore(scores){
    let totalScore=0;
    scores.forEach(element => {
        totalScore+=element;
    });
    return totalScore;
}

game.players.forEach(element => {
element.totalScore=getTotalScore(element.score);
});

console.log(player1.totalScore);



}); //avslutar vad som ska ske när beräkna trycks
}); //avslutar dom-loaded-grejen






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



