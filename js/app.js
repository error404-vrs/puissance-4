const $gameCell = document.querySelector("#game-board");
const $gameScreenTokens = document.querySelectorAll(".game-screen-token");
const $gameBoardClass = document.querySelector(".game-board-class");
const $pointer = document.querySelector(".rowPointer");

// Game screens
const $homeElement = document.querySelector(".home-element")
const $gameBoard = document.querySelector(".game-board")

// Game buttons
const $pvcGame = document.querySelector(".pvc-game")
const $gameRulesButton = document.querySelector(".rules-button")
const $rules = document.querySelector(".rules-element-hidden")
const $rulesContent = document.querySelector(".rules-class")

const $returnToMenuButton = document.querySelector(".main-nav-button")

const redToken = `<img src="./assets/counter-red-large.svg" alt="">`;
const yellowToken = `<img src="./assets/counter-yellow-large.svg" alt="">`;

let currentPlayer = "red";

let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];


function clearBoard() {
  $gameCell.remove = redToken && yellowToken
}
$gameScreenTokens.forEach(($tokensRow) => {
  $tokensRow.addEventListener("click", () => {
    const dataX = $tokensRow.getAttribute("data-x");
    for (let i = 5; i >= 0; i--) {
      if (gameBoard[i][dataX] === "") {
        console.log("C'est vide");
        gameBoard[i][dataX] = currentPlayer;
        if (currentPlayer === "red") {
          const selectedToken = document.querySelector(`.game-screen-token[data-y="${i}"][data-x="${dataX}"]`)
          selectedToken.innerHTML = redToken
          currentPlayer = "yellow";
        } else {
          const selectedToken = document.querySelector(`.game-screen-token[data-y="${i}"][data-x="${dataX}"]`)
          selectedToken.innerHTML = yellowToken
          currentPlayer = "red";
        }
        return;
      } else {
        console.log("Ce n'est pas vide");
      }
    }
  });
});




$pvcGame.addEventListener("click", function() {
  $homeElement.classList.add("hidden")
  $gameBoard.classList.remove("hidden")
})

$rules.addEventListener("click", function() {
  $homeElement.classList.add("hidden")
  $rules.classList.remove("hidden")
  $rulesContent.classList.remove("hidden")
})

$returnToMenuButton.addEventListener("click", function() {
  $gameBoardClass.classList.add("hidden")
  $homeElement.classList.remove("hidden")
})

