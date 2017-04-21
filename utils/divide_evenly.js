'use strict';

module.exports = function divideBoardEvenly(array) {
	const numberOfRows = Math.sqrt(array.length);
	const board = [];
	for (let i = 0; i < numberOfRows; i++) {
		board.push(array.slice(i * numberOfRows, numberOfRows * (i + 1)))
	}
	return board;
};