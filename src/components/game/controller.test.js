import { determineGameStatus, calculateWinner } from './controller';

describe('calculateWinner', () => {
  let squares;
  it('checks array for winner from 1st position in the array', () => {
    squares = ['X', '', '', 'X', 'O', '', 'X', 'O', ''];
    expect(calculateWinner(squares)).toBe(squares[0]);
  });

  it('checks array for winner from 2nd position in the array', () => {
    squares = ['', 'X', 'O', 'O', 'X', 'X', '', 'X', 'O'];
    expect(calculateWinner(squares)).toBe(squares[1]);
  });

  it('checks array for winner from 3rd position in the array', () => {
    squares = ['', '', 'X', 'O', 'X', '', 'X', 'O', ''];
    expect(calculateWinner(squares)).toBe(squares[2]);
  });
  /*  Can't test for the winner of the 4th position and
   onwards as it would just return the 1st position of that winning combination
   */
});

describe('determineGameStatus', () => {
  it('checks if player 2 is next', () => {
    expect(determineGameStatus(undefined, 1, false)).toBe('Next player is O');
  });

  it('checks if player 1 is next', () => {
    expect(determineGameStatus(undefined, 2, true)).toBe('Next player is X');
  });

  it('checks if player 1 is the winner', () => {
    expect(determineGameStatus('X', 5, false)).toBe('X is the Winner!');
  });

  it('checks if player 2 is the winner', () => {
    expect(determineGameStatus('O', 6, true)).toBe('O is the Winner!');
  });

  it('checks game status for a draw game', () => {
    expect(determineGameStatus(false, 9, undefined)).toBe('Its a Draw!');
  });
});
