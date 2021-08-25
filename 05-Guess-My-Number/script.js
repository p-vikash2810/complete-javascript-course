"use strict";

// document.querySelector(".message").textContent = "🎉 correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
document.querySelector(".guess").value = "";
let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

function displayMessage(message) {
  return (document.querySelector(".message").textContent = message);
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage("⛔️ No Number");

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;

    displayMessage("🎉 correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess in too high
  } else if (guess !== secretNumber) {
    if (score <= 1) {
      displayMessage("💥 You lost the game");
      document.querySelector(".score").textContent = 0;
    } else {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = randomNumber();
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
