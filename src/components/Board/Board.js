import React, { Component } from 'react';
import './Board.css';
import Space from '../Space/Space';
import createSpaceModels from '../../utils/create_space_models';
import updateBoard from '../../utils/update_board';
import makeGameBoard from '../../utils/gameboard';
import getGameDifficulty from '../../utils/get_game_difficulty';

function determineIfRightClick(e) {
  let isRightMB;
  if ("which" in e) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
    isRightMB = e.which === 3;
  } else if ("button" in e)  {  // IE, Opera
    isRightMB = e.button === 2;
  }

  return isRightMB;
}

class Board extends Component {
	constructor(props) {
		super();

		this.state = {
      gameBoard: createSpaceModels(makeGameBoard(getGameDifficulty(props.difficulty))),
      inProgress: true
    };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.difficulty !== this.props.difficulty || nextProps.gameStatus === 'restart') {
      this.setState({
        gameBoard: createSpaceModels(makeGameBoard(getGameDifficulty(nextProps.difficulty)))
      })
      this.props.onGameStatusChange('inProgress');
    }

    if (nextProps.gameStatus !== this.props.gameStatus) {
			this.setState({
        inProgress: nextProps.gameStatus === 'inProgress'
      })
		}
	}

	handleClick(event) {
    event.preventDefault();
    const isRightClick = determineIfRightClick(event);

		const row = Number(event.target.getAttribute('data-row'));
		const space = Number(event.target.getAttribute('data-space'));

		this.setState({
			gameBoard: updateBoard(this.state.gameBoard, row, space, isRightClick)(this.props.onGameStatusChange)
		});
	}

  render() {

  	return (
      <div className="board">
        {this.state.gameBoard.map((row, rowIndex) => row.map((space, spaceIndex) => <Space onClick={this.state.inProgress ? this.handleClick.bind(this) : ''} onContextMenu={this.handleClick.bind(this)} value={space.value} size={row.length} revealed={space.revealed} row={rowIndex} space={spaceIndex} flagged={space.flagged}/>))}
      </div>
    );
  }
}

export default Board;