import swal from 'sweetalert';
import Goblin from './Goblin';

export default class GamePlay {
  constructor() {
    this.spawnCounter = null;
    this.killCounter = null;
    this.failCounter = null;
    this.lastGoblinPosition = null;
    this.gameBegun = false;
  }

  drawUi() {
    this.board = document.querySelector('.board');

    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      cell.addEventListener('click', (event) => this.onCellClick(event));

      this.board.appendChild(cell);
    }
  }

  showGameScore() {
    const killCounter = document.querySelector('.kill-counter');
    const failCounter = document.querySelector('.fail-counter');

    this.failCounter = this.spawnCounter - this.killCounter;

    killCounter.textContent = this.killCounter;
    failCounter.textContent = this.failCounter;
  }

  getRandomPosition(goblin) {
    this.cells = document.querySelectorAll('.cell');

    const emptyCells = [];

    this.cells.forEach((cell) => {
      if (cell.children.length === 0 && cell !== this.lastGoblinPosition) {
        emptyCells.push(cell);
      }
    });

    const index = Math.floor(Math.random() * emptyCells.length);

    emptyCells[index].appendChild(goblin);

    this.lastGoblinPosition = null;

    this.goblin = document.querySelector('.goblin');

    this.showGameScore();
  }

  runGoblin() {
    const goblin = Goblin.createGoblin();

    this.getRandomPosition(goblin);

    this.interval = setInterval(() => {
      this.spawnCounter += 1;

      this.getRandomPosition(goblin);
      this.checkWinOrLose(10, 5);
    }, 1000);
  }

  deleteGoblin() {
    this.goblin.parentElement.removeChild(this.goblin);
  }

  killGoblin() {
    this.killCounter += 1;
    this.lastGoblinPosition = this.goblin.parentElement;

    this.deleteGoblin();
  }

  onCellClick(event) {
    if (event.target === this.goblin) {
      this.killGoblin();
    }
  }

  checkWinOrLose(kill, fail) {
    if (this.failCounter === fail) {
      this.stopGame();
      swal('Вы проиграли', `Упущено ${fail} гоблинов.`, 'error');
    }

    if (this.killCounter === kill) {
      this.stopGame();
      swal('Вы выиграли!', `${kill} гоблинов убито`, 'success');
    }
  }

  stopGame() {
    this.gameBegun = false;
    this.deleteGoblin();
    clearInterval(this.interval);
  }
}
