export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.startBtn = null;
  }

  init() {
    this.gamePlay.drawUi();

    this.startBtn = document.querySelector('.start-btn');
    this.startBtn.addEventListener('click', (event) => this.onBtnClick(event));
  }

  startNewGame() {
    this.gamePlay.spawnCounter = 0;
    this.gamePlay.killCounter = 0;
    this.gamePlay.failCounter = 0;
    this.gamePlay.lastGoblinPosition = null;

    this.gamePlay.runGoblin();
    this.gamePlay.gameBegun = true;
  }

  onBtnClick() {
    if (!this.gamePlay.gameBegun) {
      this.startNewGame();
    }
  }
}
