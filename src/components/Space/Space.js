import React, { Component } from 'react';
import './Space.css';

class Space extends Component {
	render() {
		const { revealed, value, flagged } = this.props;
		const isMine = value === 'x';

		return (
    <div className={`board__grid board__grid--${this.props.size}`}>
  		<div
  			data-row={this.props.row}
  			data-space={this.props.space}
        onClick={this.props.onClick}
  			onContextMenu={this.props.onClick}
  			className={`board__space ${revealed ? 'board__space--revealed' : ''} ${isMine && revealed ?  'board__space--revealed--mine': '' } ${flagged ?  'board__space--flagged' : ''}`}>
  			<span className={`board__value ${revealed ? 'board__value--revealed' : ''} ${isMine && revealed ? 'board__value--revealed--mine' : ''}`}>{this.props.value}</span>
  		</div>
    </div>
		);
	}
}

export default Space;