import React, { Component } from 'react';
import './Timer.css';
class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    }
    this.startTimer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameStatus === 'restart') {
      this.setState({time: 0})
    }
    if (nextProps.gameStatus === 'inProgress') {
      this.startTimer();
    } else {
      this.endTimer();
    }
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => { this.setState({time: this.state.time + 1}) }, 1000)
    }
  }

  endTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return <div className="timer"><div className="timer__inner">{this.state.time}</div></div>
  }
}

export default Timer;