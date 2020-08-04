import { determineGameStatus, getCurrentMovesPlayed } from './controller';

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

  describe('getCurrentMovesPlayed', () => {
    let arrayOfMoves;
    let arrayIndex;

    it('checks initial array and no move played', () => {
      arrayOfMoves = ['', '', '', '', '', '', '', '', ''];
      arrayIndex = 0;
      expect(getCurrentMovesPlayed(arrayOfMoves, arrayIndex)).toBe('');
    });

    it('checks array index and array value at that index', () => {
      arrayOfMoves = ['', 'X', 'O', '', '', '', '', 'X', 'O'];
      arrayIndex = 1;
      expect(getCurrentMovesPlayed(arrayOfMoves, arrayIndex)).toBe('X');
    });

    it('checks array index and array value at that index', () => {
      arrayOfMoves = ['', 'X', 'O', '', '', '', '', 'X', 'O'];
      arrayIndex = 2;
      expect(getCurrentMovesPlayed(arrayOfMoves, arrayIndex)).toBe('O');
    });

    it('checks returned array if theres a winner', () => {
      arrayOfMoves = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
      arrayIndex = 2;
      expect(getCurrentMovesPlayed(arrayOfMoves, arrayIndex)).toBe('X');
    });
  });
});
