import { calculateWinner, calculateWinningAverage } from './controller';

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

describe('calculateWinningAverage', () => {
  it('checks the percentage value calculated for a player', () => {
    const scoreOfPlayer = 10;
    const gamesPlayed = 18;
    const expected = 56;
    expect(
      parseInt(calculateWinningAverage(gamesPlayed, scoreOfPlayer), 0)
    ).toBe(expected);
  });
  it('checks the  initial percentage values for each player', () => {
    const scoreOfPlayer = 0;
    const gamesPlayed = 0;
    const expected = 0;
    expect(
      parseInt(calculateWinningAverage(gamesPlayed, scoreOfPlayer), 0)
    ).toBe(expected);
  });
});
