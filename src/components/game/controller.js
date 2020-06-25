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
    winningCombinationIndex++
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
  if (!winner && moveNumber === 9) {
    return 'Its a Draw!';
  }
  return `Next player is ${xIsNext ? 'X' : 'O'}`;
};

export const getCurrentMovesPlayed = (
  history,
  moveNumber,
  moveIndex,
  nextPlayer
) => {
  const currentHistory = history.slice(0, moveNumber + 1);
  const currentMoves = currentHistory[moveNumber];
  const currentSquaresPlayed = currentMoves.squares.currentMovesPlayed.slice();
  currentSquaresPlayed[moveIndex] = nextPlayer ? 'X' : 'O';
  return currentSquaresPlayed;
};
