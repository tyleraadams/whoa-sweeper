import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    }
    setInterval(() => { this.setState({time: this.state.time + 1}) }, 1000)
  }

  render() {
    return <div>{this.state.time}</div>
  }
}

export default Timer;