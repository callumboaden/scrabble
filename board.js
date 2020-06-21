const gameBoard = document.querySelector(".board");

const board = generateBoard();

// generate board with 15 x 15 cells
function generateBoard() {
  let board = [];

  for (let i = 0; i < 15; i++) {
    let row = [];

    for (let j = 0; j < 15; j++) {
      row.push("");
    }

    board.push(row);
  }

  return board;
}

// render board on UI
function renderBoard() {
  for (let i = 0; i < board.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.dataset.rowIndex = i;

    for (let j = 0; j < board.length; j++) {
      let cellClass = board[i][j] ? board[i][j] : "cell";
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(cellClass);
      cell.dataset.colIndex = j;

      row.appendChild(cell);
    }

    gameBoard.appendChild(row);
  }
}

const boardPattern = [
  [
    "trippleWordScore",
    "",
    "",
    "doubleLetterScore",
    "",
    "",
    "",
    "trippleWordScore",
    "",
    "",
    "",
    "doubleLetterScore",
    "",
    "",
    "trippleWordScore",
  ],
  [
    "",
    "doubleWordScore",
    "",
    "",
    "",
    "trippleLetterScore",
    "",
    "",
    "",
    "trippleLetterScore",
    "",
    "",
    "",
    "doubleWordScore",
    "",
  ],
  [
    "",
    "",
    "doubleWordScore",
    "",
    "",
    "",
    "doubleLetterScore",
    "",
    "doubleLetterScore",
    "",
    "",
    "",
    "doubleWordScore",
    "",
    "",
  ],
  [
    "doubleLetterScore",
    "",
    "",
    "doubleWordScore",
    "",
    "",
    "",
    "doubleLetterScore",
    "",
    "",
    "",
    "doubleWordScore",
    "",
    "",
    "",
  ],
  [
    "",
    "",
    "",
    "",
    "doubleWordScore",
    "",
    "",
    "",
    "",
    "",
    "doubleWordScore",
    "",
    "",
    "",
    "",
  ],
  [
    "",
    "trippleLetterScore",
    "",
    "",
    "",
    "trippleLetterScore",
    "",
    "",
    "",
    "trippleLetterScore",
    "",
    "",
    "",
    "trippleLetterScore",
    "",
  ],
  [
    "",
    "",
    "doubleLetterScore",
    "",
    "",
    "",
    "doubleLetterScore",
    "",
    "doubleLetterScore",
    "",
    "",
    "",
    "doubleLetterScore",
    "",
    "",
  ],
  [
    "trippleWordScore",
    "",
    "",
    "doubleLetterScore",
    "",
    "",
    "",
    "center",
    "",
    "",
    "",
    "doubleLetterScore",
    "",
    "",
    "trippleWordScore",
  ],
];

function applyBoardPattern() {
  let inc = 0;

  // Loop through first 8 rows in board
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = boardPattern[i][j];
    }
  }

  // Loop through last 7 rows in board from end to center
  for (let i = board.length - 1; i > 7; i--) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = boardPattern[inc][j];
    }
    inc++;
  }
}

applyBoardPattern();

renderBoard();

export { board }
