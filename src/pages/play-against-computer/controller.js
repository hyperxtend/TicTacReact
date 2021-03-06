export const determineGameStatus = (winner, moveNumber, xIsNext) => {
  if (winner) {
    return `${winner} is the Winner!`;
  }
  if (!winner && moveNumber >= 5) {
    return 'Its a Draw!';
  }

  return `Next player is ${xIsNext ? 'X' : 'O'}`;
};

export const getPlayersMoves = (history, moveNumber, squareIndex, xIsNext) => {
  const currentHistory = history.slice(0, moveNumber + 1);
  const currentMoves = currentHistory[moveNumber];
  const currentSquaresPlayed = currentMoves.slice();

  if (!currentSquaresPlayed[squareIndex]) {
    currentSquaresPlayed[squareIndex] = 'X';

    if (xIsNext === true || moveNumber === 0) {
      const randomIndex = Math.floor(Math.random() * 9);
      const nextAvailableIndex = currentSquaresPlayed.indexOf('');

      if (currentSquaresPlayed[randomIndex] === 'X') {
        currentSquaresPlayed[nextAvailableIndex] = 'O';
        return currentSquaresPlayed;
      }

      if (currentSquaresPlayed[randomIndex] === 'O') {
        currentSquaresPlayed[nextAvailableIndex] = 'O';
        return currentSquaresPlayed;
      }
      currentSquaresPlayed[randomIndex] = 'O';
    }
  }
  return currentSquaresPlayed;
};
