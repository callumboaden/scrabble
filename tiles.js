// Scrabble Letter Distribution

/* 
This set is composed of 200 tiles:

4 blank tiles (scoring 0 points) represented by hypen "-"
1 point: E ×24, A ×16, O ×15, T ×15, I ×13, N ×13, R ×13, S ×10, L ×7, U ×7
2 points: D ×8, G ×5
3 points: C ×6, M ×6, B ×4, P ×4
4 points: H ×5, F ×4, W ×4, Y ×4, V ×3
5 points: K ×2
8 points: J ×2, X ×2
10 points: Q ×2, Z ×2

*/

const player = document.querySelector('.player');

const gameTiles = [];
const playerTiles = [];

// generate all tiles in the game
function generateGameTiles() {
  let tile = {};
  let letter = {};
  const letters = [];
  const str = "abcdefghijklmnopqrstuvwxyz-";

  str.split("").forEach((char) => {
    letter = {
      letter: char,
      num: assignNum(char),
      points: assignPoints(char),
    };

    letters.push(letter);
  });

  letters.forEach((letter) => {
    for (let i = 0; i < letter.num; i++) {
      tile = {
        value: letter.letter,
        points: letter.points,
      };
      gameTiles.push(tile);
    }
  });
}

function assignNum(char) {
  return char === "e"
    ? 24
    : char === "a"
    ? 16
    : char === "o" || char === "t"
    ? 15
    : char === "i" || char === "n" || char === "r"
    ? 13
    : char === "s"
    ? 10
    : char === "d"
    ? 8
    : char === "l" || char === "u"
    ? 7
    : char === "c" || char === "m"
    ? 6
    : char === "g" || char === "h"
    ? 5
    : char === "b" ||
      char === "f" ||
      char === "p" ||
      char === "w" ||
      char === "y" ||
      char === "-"
    ? 4
    : char === "v"
    ? 3
    : char === "k" ||
      char === "j" ||
      char === "x" ||
      char === "q" ||
      char === "z"
    ? 2
    : "";
}

function assignPoints(char) {
  return char === "q" || char === "z"
    ? 10
    : char === "j" || char === "x"
    ? 8
    : char === "k"
    ? 5
    : char === "h" ||
      char === "f" ||
      char === "w" ||
      char === "y" ||
      char === "v"
    ? 4
    : char === "c" || char === "m" || char === "b" || char === "p"
    ? 3
    : char === "d" || char === "g"
    ? 2
    : char === "e" ||
      char === "a" ||
      char === "o" ||
      char === "t" ||
      char === "i" ||
      char === "n" ||
      char === "s" ||
      char === "l" ||
      char === "r" ||
      char === "u"
    ? 1
    : char === "-"
    ? 0
    : "";
}

function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function dealPlayerTiles() {
  while (playerTiles.length < 7) {
    let randomIndex = Math.floor(Math.random() * gameTiles.length);
    let tile = gameTiles.splice(randomIndex, 1);
    playerTiles.push(...tile);
  }
}

function renderPlayerTiles() {
  let markup = '';
  for (let i = 0; i < playerTiles.length; i++) {
    markup += `
      <div class="tile">
        <div class="tile__letter">${playerTiles[i].value}</div>
        <div class="tile__points">${playerTiles[i].points}</div>
      </div>
    `;
  }
  
  player.insertAdjacentHTML('beforeend', markup);
}

generateGameTiles();
shuffle(gameTiles);

dealPlayerTiles();
renderPlayerTiles();

console.log(playerTiles)