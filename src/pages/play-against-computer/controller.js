export const calculateWinner = (currentlyPlayedMoves) => {
  const possibleWinningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  /* For loop that goes through & checks that the array has the
   winner combination positions in it */
  for (
    let winningCombinationIndex = 0;
    winningCombinationIndex < possibleWinningCombinations.length;
    winningCombinationIndex += 1
  ) {
    const [a, b, c] = possibleWinningCombinations[winningCombinationIndex];
    /* If statement checks the 1st winning position in the array
     equals the other 2 positions the returns the 1st position */
    if (
      currentlyPlayedMoves[a] &&
      currentlyPlayedMoves[a] === currentlyPlayedMoves[b] &&
      currentlyPlayedMoves[a] === currentlyPlayedMoves[c]
    ) {
      return currentlyPlayedMoves[a];
    }
  }
  return undefined;
};

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

      if ((currentSquaresPlayed[randomIndex] === 'X') === true) {
        currentSquaresPlayed[randomIndex] = 'X';
        const nextAvailableIndex = currentSquaresPlayed.indexOf('');
        currentSquaresPlayed[nextAvailableIndex] = 'O';
        return currentSquaresPlayed;
      }
      if ((currentSquaresPlayed[randomIndex] === 'O') === true) {
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
