var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

setDiceImage(randomNumber1, randomNumber2);

determineWinner(randomNumber1, randomNumber2);

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function setDiceImage(p1, p2) {
  document.getElementsByClassName("img1")[0].setAttribute("src",  `images/dice${p1}.png`);
  document.getElementsByClassName("img2")[0].setAttribute("src",  `images/dice${p2}.png`);
}

function determineWinner(p1, p2) {
  var title = "Refresh Me";

  if (p1 > p2) {
    title = "🚩 Player 1 Wins!";
  }
  else if (p1 < p2) {
    title = "Player 2 Wins! 🚩";
  }
  else
  {
    title = "Draw!";
  }

  document.getElementsByTagName("h1")[0].innerHTML = title;
}
