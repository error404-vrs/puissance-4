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