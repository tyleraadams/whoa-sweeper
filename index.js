'use strict';
const gameBoard = require('./gameboard');
const getGameDifficulty = require('./utils/get_game_difficulty');

console.log(gameBoard(getGameDifficulty('hard')));


