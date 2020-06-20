const gameBoard = document.querySelector('.board');
renderBoard();

// render board with 15 x 15 tiles
function generateBoard() {
    let board = []

    for (let i = 0; i < 15; i++) {
        let row = [];

        for (let j = 0; j < 15; j++) {
            let tile = {};

            row.push(tile);
        }

        board.push(row);
    }

    return board;
}

// render board on UI
function renderBoard() {
    const board = generateBoard();

    for (let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < board.length; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            row.appendChild(cell);
        }

        gameBoard.appendChild(row);
    }

    // console.log(board);
}

