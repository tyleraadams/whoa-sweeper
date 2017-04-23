import React, { Component } from 'react';

class Space extends Component {
	render() {
		const { revealed, value, flagged } = this.props;
		const isMine = value === 'x';

		return (
		<div
			data-row={this.props.row}
			data-space={this.props.space}
      onClick={this.props.onClick}
			onContextMenu={this.props.onClick}
			className={`board__space board__space--${this.props.size} ${revealed ? 'board__space--revealed' : ''} ${isMine && revealed ?  'board__space--revealed--mine': '' } ${flagged ?  'board__space--flagged' : ''}`}>
			<span className={`board__value ${revealed ? 'board__value--revealed' : ''} ${isMine && revealed ? 'board__value--revealed--mine' : ''}`}>{this.props.value}</span>
		</div>
		);
	}
}

export default Space;