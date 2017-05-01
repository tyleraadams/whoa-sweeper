import React, { Component } from 'react';
import get from 'lodash/get';
import './SetDifficulty.css';
const userAgent = get(navigator, 'userAgent');
const isFirefox = typeof userAgent === 'string' ? userAgent.toLowerCase().indexOf('firefox') > -1 : false;

class SetDifficulty extends Component {
	render() {
		return (
      <select
        className={`set-difficulty ${isFirefox ? 'set-difficulty--firefox' : ''}`}
        onChange={this.props.onChange}
      >
  			<option value="easy">Easy</option>
  			<option value="medium">Medium</option>
  			<option value="hard">Hard</option>
		  </select>);
	}
}

export default SetDifficulty;