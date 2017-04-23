import createGameConfig from './create_game_config';

export default function getGameDifficulty(difficulty) {
	const difficulties = {
		easy: createGameConfig(81, 10),
 		medium: createGameConfig(256, 40),
 		hard: createGameConfig(400, 99)
	};

	return difficulties[difficulty];
};