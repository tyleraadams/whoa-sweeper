'use strict';
const shuffle = require('./utils/shuffle');
const divideEvenly = require('./utils/divide_evenly');
const markUpBoard = require('./utils/markup_board');

module.exports = function gameBoard(config) {
	const spaces = [];
	const spacesTotal = config.spacesTotal || 81;
	const minesTotal = config.minesTotal || 10;
	const freeSpacesTotal = spacesTotal - minesTotal;
	const mine = 'x';
	let counter;

	counter = minesTotal;

	do {
		spaces.push(mine);
		counter -= 1;
	} while (counter);

	counter = freeSpacesTotal;

	do {
		spaces.push(0);
		counter -= 1;
	} while (counter);


	const randomizedSpaces = shuffle(spaces);
	const board = divideEvenly(randomizedSpaces);
	const markedUpBoard = markUpBoard(board);

	return markedUpBoard;
};



