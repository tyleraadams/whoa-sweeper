import React, { Component } from 'react';
import getAppConfig from '../../config/app';
import './App.css';
import Board from '../Board/Board';
import Smiley from '../Smiley/Smiley';
import Timer from '../Timer/Timer';
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

  onChange(value) {
    this.setState({ difficulty: value, gameStatus: 'restart' });
  }

  onGameStatusChange(status) {
    this.setState({ gameStatus: status})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1><span>{appConfig.name}</span></h1>
        </div>
        <Messages status={this.state.gameStatus} />
        <div className="menu-bar">
         <div className="menu-bar__inner">
          <Smiley
            gameStatus={this.state.gameStatus}
            onClick={this.onGameStatusChange.bind(this)}
          />
          <SetDifficulty onChange={this.onChange.bind(this)}/>
          <Timer gameStatus={this.state.gameStatus} />
          </div>
          </div>
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