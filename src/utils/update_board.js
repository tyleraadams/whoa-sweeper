export default function updateBoard(board, row, space) {
  return [ ...board.slice(0, row),
    [...board[row].slice(0, space),
    { revealed: true, value: board[row][space].value },
    ...board[row].slice(space + 1, board[row].length ) ],
    ...board.slice(row + 1, board.length )
    ];
};