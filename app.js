import { board } from './board.js';

const gameBoard = document.querySelector(".board");
const overlay = document.querySelector('.overlay');

// detect cell position
let cellTargetPosition = [];



gameBoard.addEventListener('click', e => {
    const colIndex = parseInt(e.target.dataset.colIndex);
    const rowIndex = parseInt(e.target.parentNode.dataset.rowIndex);

    // get target position coords
    cellTargetPosition = [rowIndex, colIndex];
    console.log(cellTargetPosition);

    // open overlay with available letters
    overlay.classList.add('open');
});

console.log(board)