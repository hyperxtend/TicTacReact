export const determineGameStatus = (winner, moveNumber, xIsNext) => {
  if (winner) {
    return `${winner} is the Winner!`;
  }
  if (!winner && moveNumber === 9) {
    return 'Its a Draw!';
  }
  return `Next player is ${xIsNext ? 'X' : 'O'}`;
};

export const getCurrentMovesPlayed = (
  history,
  moveNumber,
  squareIndex,
  xIsNext
) => {
  const currentHistory = history.slice(0, moveNumber + 1);
  const currentMoves = currentHistory[moveNumber];
  const currentSquaresPlayed = currentMoves.slice();

  if (currentSquaresPlayed[squareIndex] === '') {
    currentSquaresPlayed[squareIndex] = xIsNext ? 'X' : 'O';
  }

  return currentSquaresPlayed;
};
