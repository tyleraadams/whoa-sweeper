import React, { Component } from 'react';
import get from 'lodash/get';
import './Smiley.css';
const model = {
  lost: '/dead.png',
  won: '/won.png',
  inProgress: '/smiley.png'
};

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
      <button className="smiley-button" onClick={(e) => { e.preventDefault(); this.props.onClick('rando')}}>
        <img src={model[this.state.status]} alt="smiley" />
      </button>
    );
  }
}

export default Smiley;