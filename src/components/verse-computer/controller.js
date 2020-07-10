/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

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
  for (
    let winningCombinationIndex = 0;
    winningCombinationIndex < possibleWinningCombinations.length;
    winningCombinationIndex++
  ) {
    const [a, b, c] = possibleWinningCombinations[winningCombinationIndex];
    if (
      currentlyPlayedMoves[a] &&
      currentlyPlayedMoves[a] === currentlyPlayedMoves[b] &&
      currentlyPlayedMoves[a] === currentlyPlayedMoves[c]
    ) {
      return [
        currentlyPlayedMoves[a],
        possibleWinningCombinations[winningCombinationIndex],
      ];
    }
  }
  return undefined;
};

export const determineGameStatus = (winner, moveNumber, xIsNext) => {
  if (winner) {
    return `${winner[0]} is the Winner!`;
  }
  if (!winner && moveNumber === 9) {
    return 'Its a Draw!';
  }
  return `Next player is ${xIsNext ? 'You (X)' : 'Computer (O)'}`;
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

export const calculateComputerMove = (history, moveNumber) => {
  const currentMoves = history[moveNumber];
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let initialSquareIndex = -1;
  for (const currentlyPlayedMoves in winningCombinations) {
    const winningMoves = [
      currentMoves[currentlyPlayedMoves][0],
      currentMoves[currentlyPlayedMoves][1],
      currentMoves[currentlyPlayedMoves][2],
    ];
    if (
      winningMoves[0] === winningMoves[1] ||
      winningMoves[1] === winningMoves[2] ||
      (winningMoves[0] === winningMoves[2] &&
        winningMoves.filter((moveValue) => moveValue === undefined).length ===
          1)
    ) {
      initialSquareIndex =
        winningCombinations[currentlyPlayedMoves][
          winningMoves.indexOf(undefined)
        ];
      break;
    }
  }
  if (initialSquareIndex === -1) {
    const computerMoves = [];

    for (const possibleMoves in currentMoves) {
      if (currentMoves[possibleMoves] === undefined) {
        computerMoves.push(possibleMoves);
      }
      initialSquareIndex =
        computerMoves.length > 0
          ? computerMoves[Math.floor(Math.random() * computerMoves.length)]
          : -1;
    }
    if (initialSquareIndex >= 0) {
      getCurrentMovesPlayed(history, moveNumber);
    }
  }
};

export const handleComputerMove = (
  squareIndex,
  xIsNext,
  history,
  moveNumber
) => {
  if (xIsNext) {
    const currentMoves = getCurrentMovesPlayed(history, moveNumber);
    currentMoves[squareIndex] = xIsNext ? 'X' : 'O';
    return setTimeout(calculateComputerMove(history, moveNumber), 500);
  }
};
