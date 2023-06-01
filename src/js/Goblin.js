export default class Goblin {
  constructor() {
    this.name = 'Goblin';
  }

  static createGoblin() {
    const element = document.createElement('img');
    element.classList.add('goblin');
    element.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';

    return element;
  }
}
