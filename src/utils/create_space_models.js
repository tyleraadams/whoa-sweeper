export default function(board) {
	return board.map(row => row.map(value => { return { revealed: false, value } }));
};