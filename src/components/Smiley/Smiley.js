import React, { Component } from 'react';
import './Smiley.css';
import appConfig from '../../config/app';

const model = appConfig.smiley;

class Smiley extends Component {
  constructor(props) {
    super();
    this.state =  { status: props.gameStatus }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({status: nextProps.gameStatus })
  }

  render() {
    return (
      <div className="smiley-wrapper">
      <button
        className="smiley-button"
        onClick={e => {
          e.preventDefault();
          this.props.onClick('restart');
        }}>
        <img src={model[this.state.status]} alt="smiley" />
      </button>
      </div>
    );
  }
}

export default Smiley;