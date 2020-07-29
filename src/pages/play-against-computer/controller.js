import calculateWinner from '../../utils/calculate-winner';

export const determineGameStatus = (winner, moveNumber, xIsNext) => {
  if (winner) {
    return `${winner} is the Winner!`;
  }
  if (!winner && moveNumber > 5) {
    return 'Its a Draw!';
  }

  return `Next player is ${xIsNext ? 'X' : 'O'}`;
};

export const getPlayersMoves = (history, moveNumber, squareIndex, xIsNext) => {
  const currentHistory = history.slice(0, moveNumber + 1);
  const currentMoves = currentHistory[moveNumber];
  const currentSquaresPlayed = currentMoves.slice();

  if (calculateWinner(currentSquaresPlayed)) {
    return currentHistory.slice(0)[0];
  }

  if (!currentSquaresPlayed[squareIndex]) {
    currentSquaresPlayed[squareIndex] = 'X';

    if (xIsNext === true || moveNumber === 0) {
      const randomIndex = Math.floor(Math.random() * 9);

      if (currentSquaresPlayed[randomIndex] === 'X') {
        currentSquaresPlayed[randomIndex] = 'X';
        const nextAvailableIndex = currentSquaresPlayed.indexOf('');
        currentSquaresPlayed[nextAvailableIndex] = 'O';
        return currentSquaresPlayed;
      }
      if (currentSquaresPlayed[randomIndex] === 'O') {
        currentSquaresPlayed[randomIndex] = 'O';
        const nextAvailableIndex = currentSquaresPlayed.indexOf('');
        currentSquaresPlayed[nextAvailableIndex] = 'O';
        return currentSquaresPlayed;
      }
      currentSquaresPlayed[randomIndex] = 'O';
    }
  }
  return currentSquaresPlayed;
};
