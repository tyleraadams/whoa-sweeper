import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Board.css';
import Space from '../Space/Space';
import makeGameBoard from '../../models/gameboard';
import createSpaceModels from '../../models/spaces';
import updateBoard from '../../utils/update_board';
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
      // gameBoard: createSpaceModels(makeGameBoard(getGameDifficulty(props.difficulty))),
      // inProgress: true
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
        {this.props.gameBoard.map((row, rowIndex) => row.map((space, spaceIndex) => (
          <Space
            onClick={this.state.inProgress ? this.handleClick.bind(this) : ''}
            onContextMenu={this.handleClick.bind(this)}
            value={space.value}
            size={row.length}
            revealed={space.revealed}
            row={rowIndex}
            space={spaceIndex}
            flagged={space.flagged}
          />
        )))}
      </div>
    );
  }
}

Board.propTypes = {
  difficulty: PropTypes.string.isRequired,
  gameStatus: PropTypes.string.isRequired,
  onGameStatusChange: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    gameBoard: state.gameboard
  };
}

export default connect(mapStateToProps)(Board);