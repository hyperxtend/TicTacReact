import calculateWinner from './controller';

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
});
