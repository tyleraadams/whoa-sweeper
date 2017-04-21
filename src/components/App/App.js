import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';
import SetDifficulty from '../SetDifficulty/SetDifficulty';

class App extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: 'easy'
    }
  }

  onChange(event) {
    this.setState({ difficulty: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>MYNE SWEEPER</h2>
        </div>
        <SetDifficulty onChange={this.onChange.bind(this)}/>
        <Board difficulty={this.state.difficulty} />
      </div>
    );
  }
}

export default App;
