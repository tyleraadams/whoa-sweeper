import React, { Component } from 'react';
import get from 'lodash/get';
import Model from '../../models/scoreboard.js'
import './Scoreboard.css';

class ScoreBoard extends Component {
  constructor(props) {
    super();
    this.model = new Model(window.localStorage)
    const previousWins = this.model.getScores();
    this.state =  { wins: previousWins || [] };
  }

  componentWillReceiveProps(nextProps) {
    const wins = this.state.wins;
    const numberOfWins = wins.length;
    const lastWinIndex = numberOfWins - 1;
    const lastWin = wins[lastWinIndex];

    if (nextProps.id !== get(lastWin, 'id') && nextProps.lastGameDuration) {
      this.setState({
        wins: this.state.wins.concat({
          name: 'me',
          difficulty: nextProps.difficulty,
          time: nextProps.lastGameDuration,
          id: nextProps.id
        })
      });
    }
  }

  componentDidUpdate() {
    this.model.setScores(this.state.wins);
  }

  render() {
    return <div className="scoreboard">
    <h3>Score Board</h3>
    <table>
      <thead>
        <tr>
            <td>Player</td>
            <td>Difficulty</td>
            <td>Time</td>
        </tr>
    </thead>
      {this.state.wins.map(win => (
        <tr key={win.id}>
          <td>{win.name}</td>
          <td>{win.difficulty}</td>
          <td>{win.time}</td>
        </tr>))}
    </table>
    </div>
  }
}

export default ScoreBoard;