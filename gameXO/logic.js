let players = ['х', 'o'];
let activePlayer = 0;
let arrBoard = [];
let string;
let column;

function startGame() { 
  arrBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  renderBoard(arrBoard);
  alert("Первым ходит игрок: " + players[activePlayer])
}

function changePlayer() {
  activePlayer = (activePlayer + 1) % players.length;
}

function click(string, column) {
  arrBoard[string][column] = players[activePlayer];

  renderBoard(arrBoard);

  for (let i = 0; i < arrBoard.length; i++) {
   for (let j = 0; j < arrBoard.length; j++) {
       
      if (arrBoard[i][0] === players[activePlayer]
        && arrBoard[i][1] === players[activePlayer]
        && arrBoard[i][2] === players[activePlayer]) {
          showWinner(activePlayer);
      } else if (arrBoard[0][j] === players[activePlayer]
          && arrBoard[1][j] === players[activePlayer]
          && arrBoard[2][j] === players[activePlayer]) {
            showWinner(activePlayer);
      } else if (arrBoard[0][0] === players[activePlayer]
          && arrBoard[1][1] === players[activePlayer]
          && arrBoard[2][2] === players[activePlayer]) {
            showWinner(activePlayer);
      } else if (arrBoard[0][2] === players[activePlayer]
          && arrBoard[1][1] === players[activePlayer]
          && arrBoard[2][0] === players[activePlayer]) {
            showWinner(activePlayer);
      };
      changePlayer();
    };
  }
};