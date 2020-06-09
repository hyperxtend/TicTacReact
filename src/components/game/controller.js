export const calculateWinner = (squares) => {
  // squares - an array of played moves
  // lines - an array of arrays with the each possible winning combination
  const lines = [
    // a, b, c - positions in the array for a winning combinations in the array
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    /* If statement checks the 1st winning position in the array
     equals the other 2 positions the returns the 1st position */
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // squares[a] - the 1st position in the array of the winning combination
      return squares[a];
    }
  }
  return null;
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
