import React, { Component } from 'react';
import './SetDifficulty.css';

class SetDifficulty extends Component {
	render() {
		return (<select className="set-difficulty" onChange={this.props.onChange}>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>);
	}
}

export default SetDifficulty;