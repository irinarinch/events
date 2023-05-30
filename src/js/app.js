const board = document.querySelector('.board');

for (let i = 0; i < 16; i += 1) {
  const cell = document.createElement('div');

  cell.classList.add('cell');

  board.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
const character = document.createElement('img');

character.classList.add('character');
character.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';

function getRandomPosition() {
  const emptyCells = [];

  cells.forEach((cell) => {
    if (cell.children.length === 0) {
      emptyCells.push(cell);
    }
  });

  const index = Math.floor(Math.random() * emptyCells.length);

  emptyCells[index].appendChild(character);
}

getRandomPosition();

setInterval(getRandomPosition, 1000);
