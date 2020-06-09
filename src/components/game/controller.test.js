import { determineGameStatus, calculateWinner } from './controller';

describe('calculateWinner', () => {
  let squares;
  describe('winner scenarios for player 1(player X)', () => {
    it('checks 1st winner combination for player', () => {
      squares = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
      expect(calculateWinner(squares)).toBe('X');
    });

    it('checks 2nd winner combination for player', () => {
      squares = ['', '', '', 'X', 'X', 'X', '', 'O', 'O'];
      expect(calculateWinner(squares)).toBe('X');
    });

    it('checks 3rd winner combination for player', () => {
      squares = ['', '', '', 'O', 'O', '', 'X', 'X', 'X'];
      expect(calculateWinner(squares)).toBe('X');
    });

    it('checks 4th winner combination for player', () => {
      squares = ['X', '', '', 'O', 'X', '', '', 'O', 'X'];
      expect(calculateWinner(squares)).toBe('X');
    });
  });
  describe('winner scenarios for player 2(player O)', () => {
    it('checks 5th winner combination for player', () => {
      squares = ['X', 'O', '', 'X', 'O', 'X', '', 'O', ''];
      expect(calculateWinner(squares)).toBe('O');
    });

    it('checks 6th winner combination for player', () => {
      squares = ['X', 'X', 'O', '', 'X', 'O', '', '', 'O'];
      expect(calculateWinner(squares)).toBe('O');
    });

    it('checks 7th winner combination for player', () => {
      squares = ['O', 'X', 'X', 'X', 'O', '', '', '', 'O'];
      expect(calculateWinner(squares)).toBe('O');
    });

    it('checks 8th winner combination for player', () => {
      squares = ['X', 'X', 'O', 'X', 'O', '', 'O', '', ''];
      expect(calculateWinner(squares)).toBe('O');
    });
  });
  describe('draw scenario for both players', () => {
    it('checks for a draw game between players', () => {
      squares = ['X', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'];
      expect(calculateWinner(squares)).toBe(undefined);
    });
  });
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
