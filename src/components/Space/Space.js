import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Space.css';

class Space extends Component {
	render() {
		const {
      revealed,
      value,
      flagged
    } = this.props;

		const isMine = value === 'x';

		return (
    <div className={`board__grid board__grid--${this.props.size}`}>
  		<div
  			data-row={this.props.row}
  			data-space={this.props.space}
        onClick={this.props.onClick}
  			onContextMenu={this.props.onClick}
  			className={`board__space ${revealed ? 'board__space--revealed' : ''} ${isMine && revealed ?  'board__space--revealed--mine': '' } ${flagged ?  'board__space--flagged' : ''}`}>
  			<span className={`board__value ${revealed ? 'board__value--revealed' : ''} ${isMine && revealed ? 'board__value--revealed--mine' : ''}`}>{value}</span>
  		</div>
    </div>
		);
	}
}

Space.propTypes = {
  row: PropTypes.number.isRequired,
  space: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  flagged: PropTypes.bool,
  revealed: PropTypes.bool
};

export default Space;