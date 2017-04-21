'use strict';

module.exports = function createGameConfig(total, mines) {
	return {
		spacesTotal: total,
		minesTotal: mines
	};
};