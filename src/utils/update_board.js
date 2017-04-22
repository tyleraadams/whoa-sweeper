import get from 'lodash/get';

function calculateSurroundingCooridinates(x, y) {
  return [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
    [x - 1, y + 1],
    [x + 1, y + 1],
    [x - 1, y - 1],
    [x + 1, y - 1]
  ];
}

function setRevealed(obj) {
  obj.revealed = true;
  return obj;
}

function getValue(obj) {
  return get(obj, 'value');
}

function revealSurrounding (coordPair, newBoard) {
  const x = coordPair[0];
  const y = coordPair[1];
  const thisRow = get(newBoard, y);
  const thisSpace = get(thisRow, x);

  if (thisSpace) {
    setRevealed(thisSpace);
  }
}

export default function updateBoard(board, rowIndex, spaceIndex) {
  const clickedSpace = board[rowIndex][spaceIndex]
  const value = clickedSpace.value;

  const lookup = {
    x: function() {
      return board.map(newRow => newRow.map(newSpace => {
          if (getValue(newSpace) === 'x')  {
            setRevealed(newSpace);
          }

          return newSpace;
        })
      )
    },
    0: function () {
      const newBoard = board.map(newRow => newRow.map(newSpace => {
        return newSpace;
      }));

      const newSpace = newBoard[rowIndex][spaceIndex];
      setRevealed(newSpace);

      const surroundingCoords = calculateSurroundingCooridinates(spaceIndex, rowIndex);
      surroundingCoords.forEach(pair => revealSurrounding(pair,newBoard))
      return newBoard;
    },
    isAdjacent: function() {
      return [ ...board.slice(0, rowIndex),
        [...board[rowIndex].slice(0, spaceIndex),
        { revealed: true, value },
        ...board[rowIndex].slice(spaceIndex + 1, board[rowIndex].length ) ],
        ...board.slice(rowIndex + 1, board.length )
      ];
    }
  };

  return lookup[value] || lookup.isAdjacent
};