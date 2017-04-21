import React, { Component } from 'react';

class SetDifficulty extends Component {
	render() {
		return (<select onChange={this.props.onChange}>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>);
	}
}

export default SetDifficulty;