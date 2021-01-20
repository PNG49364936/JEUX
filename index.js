var player1 = "Champion1";
var player2 = "Champion2";
var player3 = "Champion3";
var player4 = "Computer";


// Function to change the player name
function editNames() {
  player1 = prompt("Change Champion1 name");
  player2 = prompt("Change Champion2 name");
  player3 = prompt("Change Champion3 name");



  document.querySelector("p.Champion1")
    .innerHTML = player1;
  //JOUEUR 2
  if (player2 = player2) {
    document.querySelector("p.Champion2")
      .innerHTML = player2;
  } else {
    document.querySelector("p.Champion2")
      .innerHTML = player4;
  }
  //JOUEUR 3
  if (player3 = player3) {
    document.querySelector("p.Champion3")
      .innerHTML = player3;
  } else {
    document.querySelector("p.Champion3")
      .innerHTML = player4;
  }

}

function rollTheDice() { //ajoute
  setTimeout(function() {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;

      var randomDiceImage = "dice" + randomNumber1 + ".png";

      var randomImageSource = "images/" + randomDiceImage;

      var image1 = document.querySelectorAll("img")[0];

      image1.setAttribute("src", randomImageSource);


      var randomNumber2 = Math.floor(Math.random() * 6) + 1;

      var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

      document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

      //troisieme dé
      var randomNumber3 = Math.floor(Math.random() * 6) + 1;

      var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

      document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

      if (player2 === player2) {
        player2 = player4
      }
      if (player3 === player3) {
        player3 = player4
      }

    /////////////////////////////////////////////////////////////////////////////
    if (randomNumber1 === randomNumber2 && randomNumber1 === randomNumber3 ){
       document.querySelector("h2").innerHTML = "Joueur(s)"+", gros lot!!";
       document.querySelector("h2").style.color = "gold";


    }else if (randomNumber1 === randomNumber2 || randomNumber1 === randomNumber3) {
     document.querySelector("h2").innerHTML = "Perdu";
     document.querySelector("h2").style.color = "red";

   } else if (randomNumber2 === randomNumber1 || randomNumber2 === randomNumber3) {
     document.querySelector("h2").innerHTML = "Perdu";
     document.querySelector("h2").style.color = "red";

   } else if (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2) {
     document.querySelector("h2").innerHTML = "Perdu";
     document.querySelector("h2").style.color = "red";

   } else if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
     document.querySelector("h2").innerHTML = player1 + " wins";
     document.querySelector("h2").style.color = "blue";
   } else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
     document.querySelector("h2").innerHTML = player2 + " wins";
     document.querySelector("h2").style.color = "blue";
   } else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
     document.querySelector("h2").innerHTML = player3 + " wins"
     document.querySelector("h2").style.color = "blue";
   }










////////////////////////
}, 0001);
}
