import React, { Component } from 'react';
import './Board.css';
import Space from '../Space/Space';
import createSpaceModels from '../../utils/create_space_models';
import updateBoard from '../../utils/update_board';
import makeGameBoard from '../../../gameboard';
import getGameDifficulty from '../../../utils/get_game_difficulty';

class Board extends Component {
	constructor(props) {
		super();

		this.state = {
      gameBoard: createSpaceModels(makeGameBoard(getGameDifficulty(props.difficulty)))
    };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.difficulty !== this.props.difficulty) {
			this.setState({
        gameBoard: createSpaceModels(makeGameBoard(getGameDifficulty(nextProps.difficulty)))
      })
		}
	}

	handleClick(event) {
		const row = Number(event.target.getAttribute('data-row'));
		const space = Number(event.target.getAttribute('data-space'));

		this.setState({
			gameBoard: updateBoard(this.state.gameBoard, row, space)
		});
	}

  render() {
  	return (
      <div className="board">
        {this.state.gameBoard.map((row, rowIndex) => row.map((space, spaceIndex) => <Space onClick={this.handleClick.bind(this)} value={space.value} size={row.length} revealed={space.revealed} row={rowIndex} space={spaceIndex}/>))}
      </div>
    );
  }
}

export default Board;