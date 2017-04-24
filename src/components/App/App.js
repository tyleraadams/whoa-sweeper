import React, { Component } from 'react';
import getAppConfig from '../../config/app';
import './App.css';
import Board from '../Board/Board';
import Smiley from '../Smiley/Smiley';
import Messages from '../Messages/Messages';
import SetDifficulty from '../SetDifficulty/SetDifficulty';

const appConfig = getAppConfig();

class App extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: 'easy',
      gameStatus: 'inProgress'
    }
  }
  shouldComponentUpdate() {
    return this.state.gameStatus === 'rando';
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
          <h1>{appConfig.name}</h1>
        </div>
        <Messages status={this.state.gameStatus} />
        <Smiley gameStatus={this.state.gameStatus} onClick={this.onGameStatusChange.bind(this)} />
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
