class ScoreBoard {
  constructor(localStorage) {
    if (!localStorage) {
      return null;
    }
    this.storage = localStorage;
  }

  getScores() {
    return JSON.parse(this.storage.getItem('scoreBoard') || '[]');
  }

  setScores(scoreBoard) {
    this.storage.setItem('scoreBoard', JSON.stringify(scoreBoard));
  }
}

export default ScoreBoard;