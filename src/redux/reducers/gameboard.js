import createSpaceModels from '../../models/spaces';
import makeGameBoard from '../../models/gameboard';
import getGameDifficulty from '../../utils/get_game_difficulty';

const newBoard = createSpaceModels(makeGameBoard(getGameDifficulty('easy')));
const gameboard = (state = newBoard, action) => {
  // switch (action.type) {
  //   case 'SET_VISIBILITY_FILTER':
  //     return action.filter
  //   default:
      return state
  // }
}

export default gameboard;