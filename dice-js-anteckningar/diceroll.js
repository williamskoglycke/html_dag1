document.addEventListener("DOMContentLoaded", function(event){



    function getRandomInt(max, min) {
      return Math.floor(Math.random() * (max - min)) + min;
    }


var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");


// function setTextField(number){
//     textField.innerHTML=number;
// }

function updateValue(event){
    document.getElementById("dice1").innerHTML = getRandomInt(1,6);

    //INNERHTML vid start- och sluttag. value vid element som har ett value!!!!!!!

}

// b1.addEventListener("click", (event) => setTextField(getRandomInt(1,6)) );
// b2.addEventListener("click", (event) => setTextField(getRandomInt(1,6)) );
// b3.addEventListener("click", (event) => setTextField(getRandomInt(1,6)) );

b1.addEventListener("click", updateValue);
b2.addEventListener("click", updateValue);
b3.addEventListener("click", updateValue);

}); //stänger domcl