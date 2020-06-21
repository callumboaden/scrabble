const gameBoard = document.querySelector('.board');

const board = generateBoard();


// generate board with 15 x 15 cells
function generateBoard() {
    let board = []

    for (let i = 0; i < 15; i++) {
        let row = [];

        for (let j = 0; j < 15; j++) {
            row.push('');
        }

        board.push(row);
    }

    return board;
}

// render board on UI
function renderBoard() {

    for (let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < board.length; j++) {
            let cellClass = board[i][j] ? board[i][j].toLowerCase() : 'cell';
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(cellClass)

            row.appendChild(cell);
        }

        gameBoard.appendChild(row);
    }
}

/*

Board Design / Pattern
1 ['3xWS', '', '', '2xLS', '', '', '', '3xWS', '', '', '', '2xLS', '', '', '3xWS'],
2 ['', '2xWS', '', '', '', '3xLS', '', '', '', '3xLS', '', '', '', '2xWS', ''],
3 ['', '', '2xWS', '', '', '', '2xLS', '', '2xLS', '', '', '', '2xWS', '', ''],
4 ['2xLS', '', '', '2xWS', '', '', '', '2xLS', '', '', '', '2xWS', '', '', ''],
5 ['', '', '', '', '2xWS', '', '', '', '', '', '2xWS', '', '', '', ''],
6 ['', '3xLS', '', '', '', '3xLS', '', '', '', '3xLS', '', '', '', '3xLS', ''],
7 ['', '', '2xLS', '', '', '', '2xLS', '', '2xLS', '', '', '', '2xLS', '', ''],
8 ['3xWS', '', '', '2xLS', '', '', '', 'center', '', '', '', '2xLS', '', '', '3xWS']
*/

const boardPattern = [
    ['3xWS', '', '', '2xLS', '', '', '', '3xWS', '', '', '', '2xLS', '', '', '3xWS'],
    ['', '2xWS', '', '', '', '3xLS', '', '', '', '3xLS', '', '', '', '2xWS', ''],
    ['', '', '2xWS', '', '', '', '2xLS', '', '2xLS', '', '', '', '2xWS', '', ''],
    ['2xLS', '', '', '2xWS', '', '', '', '2xLS', '', '', '', '2xWS', '', '', ''],
    ['', '', '', '', '2xWS', '', '', '', '', '', '2xWS', '', '', '', ''],
    ['', '3xLS', '', '', '', '3xLS', '', '', '', '3xLS', '', '', '', '3xLS', ''],
    ['', '', '2xLS', '', '', '', '2xLS', '', '2xLS', '', '', '', '2xLS', '', ''],
    ['3xWS', '', '', '2xLS', '', '', '', 'center', '', '', '', '2xLS', '', '', '3xWS']
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
        inc++
    }

    console.log(board)
}

applyBoardPattern();

renderBoard();

