const $gameCell = document.querySelector("#game-board");
const $gameScreenTokens = document.querySelectorAll(".game-screen-token");
const $gameBoardClass = document.querySelector(".game-board-class")

const redToken = `<img src="./assets/counter-red-large.svg" alt="">`
const yellowToken = `<img src="./assets/counter-yellow-large.svg" alt="">`

let currentPlayer = 'red'

const x = 0


let gameBoard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];


function clearBoard($completBoardDiv) {
    location.reload();
}

$gameScreenTokens.forEach(function($gameScreenToken) {
    $gameScreenToken.addEventListener("click", function() {
        if (currentPlayer === "red") {
            $gameScreenToken.innerHTML = redToken
            currentPlayer = "yellow"
        } else {
            $gameScreenToken.innerHTML = yellowToken
            currentPlayer = "red"
        }
    })
})


for (let i = 5; i >= 0; i--) {
    if (gameBoard[i][x] === "") {
      console.log("C'est vide");
    } else {
      console.log("C'est pas vide");
    }
  }