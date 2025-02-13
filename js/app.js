const $gameCell = document.querySelector("#game-board");
const $gameScreenTokens = document.querySelectorAll(".game-screen-token");
const $gameBoardClass = document.querySelector(".game-board-class");
const $pointer = document.querySelector(".rowPointer");

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

/**
 *
 */

function clearBoard() {
  location.reload();
}

$gameScreenTokens.forEach(function ($gameScreenToken) {
  $gameScreenToken.addEventListener("click", function () {
    const x = $gameScreenToken.getAttribute("data-x");

    function dropToken(player) {
      for (let i = 5; i >= 0; i--) {
        if (gameBoard[i][x] === "") {
          console.log("C'est vide");
          document.querySelector(`
            
            [data-y="${i}"][data-x="${x}"]
            
            `).innerHTML = player;
          break;
        } else {
          console.log("C'est pas vide");
        }
      }
    }
    if (($gameScreenTokens.innerHTML = " ")) {
      if (currentPlayer === "red") {
        dropToken(redToken)
        currentPlayer = "yellow";
      } else {
        dropToken(yellowToken)
        currentPlayer = "red";
      }
    }
  });
});

// $gameScreenTokens.forEach(function($gameScreenToken) {
//     if (innerHTML = redToken) {
//         $gameScreenToken.innerHTML = redToken
//     } else if (innerHTML = yellowToken) {
//         $gameScreenToken.innerHTML = yellowToken
//     }
// })
