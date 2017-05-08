import React, { Component } from 'react';
import Select from 'react-select';
import get from 'lodash/get';
import './SetDifficulty.css';
import './ReactSelect.css';
import options from './difficulty_model.json';

class SetDifficulty extends Component {
  constructor() {
    super();

    this.state = {
      value: 'easy'
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value) {
    const difficulty = get(value, 'value');
    this.setState({ value: difficulty });
    this.props.onChange(difficulty);
  }

	render() {
		return (
      <div className="select-wrapper">
      <Select
        name="form-field-name"
        options={options}
        onChange={this.setValue}
        value={this.state.value}
        clearable={false}
        className="select"
      />
     </div>);
	}
}

export default SetDifficulty;