import get from 'lodash/get';

export default function markUpBoard(board) {
  return board.map(function returnBoard(row, rowIndex) {
  	return row.map(function returnRow(space, spaceIndex) {
  		let value = space;

  		if (value === 'x') {
  			return value;
  		}

  		if (row[spaceIndex + 1] === 'x') {
  			value += 1;
  		}

  		if (row[spaceIndex - 1] === 'x') {
  			value += 1;
  		}

  		if (get(board, `[${rowIndex - 1}][${spaceIndex}]`) === 'x') {
  			value += 1;
  		}

  		if (get(board, `[${rowIndex - 1}][${spaceIndex - 1}]`) === 'x') {
  			value += 1;
  		}

  		if (get(board, `[${rowIndex - 1}][${spaceIndex + 1}]`) === 'x') {
  			value += 1;
  		}

  		if (get(board, `[${rowIndex + 1}][${spaceIndex}]`) === 'x') {
  			value += 1;
  		}

  		if (get(board, `[${rowIndex + 1}][${spaceIndex - 1}]`) === 'x') {
  			value += 1;
  		}

  		if (get(board, `[${rowIndex + 1}][${spaceIndex + 1}]`) === 'x') {
  			value += 1;
  		}

  		return value;
  	});
  });
};