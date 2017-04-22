import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';
import Messages from '../Messages/Messages';
import SetDifficulty from '../SetDifficulty/SetDifficulty';

class App extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: 'easy',
      gameStatus: 'inProgress'
    }
  }

  onChange(event) {
    this.setState({ difficulty: event.target.value})
  }

  onGameStatusChange(status) {
    this.setState({ gameStatus: status})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>MYNE SWEEPER</h2>
        </div>
        <Messages status={this.state.gameStatus} />
        <SetDifficulty onChange={this.onChange.bind(this)}/>
        <Board
          difficulty={this.state.difficulty}
          gameStatus={this.state.gameStatus}
          onGameStatusChange={this.onGameStatusChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
