import calculateWinner from '../../utils/calculate-winner';

export const determineGameStatus = (winner, moveNumber, xIsNext) => {
  if (winner) {
    return `${winner} is the Winner!`;
  }
  if (!winner && moveNumber === 9) {
    return 'Its a Draw!';
  }
  return `Next player is ${xIsNext ? 'X' : 'O'}`;
};

export const getCurrentMovesPlayed = (history, moveNumber) => {
  const currentHistory = history.slice(0, moveNumber + 1);
  const currentMoves = currentHistory[moveNumber];
  const currentSquaresPlayed = currentMoves.slice();
  if (calculateWinner(currentSquaresPlayed)) {
    return currentHistory.slice(0)[0];
  }
  return currentSquaresPlayed;
};
