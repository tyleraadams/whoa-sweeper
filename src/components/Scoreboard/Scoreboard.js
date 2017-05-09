import React, { Component } from 'react';

class ScoreBoard extends Component {
  constructor(props) {
    super();
    this.state =  { wins: [] }
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.lastWin !== this.props.lastWin) {
    //   this.setState({wins: this.state.wins.concat({
    //     name: 'me',
    //     difficulty: nextProps.difficulty,
    //     time: nextProps.time
    //   })
    // });
    // }

  }

  render() {
    return <div>
      {this.state.wins.map(win => <div>
        {win.name} {win.difficulty} {win.time}
      </div>)}
    </div>
  }
}

export default ScoreBoard;