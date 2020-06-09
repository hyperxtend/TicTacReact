import { determineGameStatus } from './controller';

describe('determineGameStatus', () => {
  it('checks if player 2 is next', () => {
    expect(determineGameStatus(null, 1, false)).toBe('Next player is O');
  });

  it('checks if player 1 is next', () => {
    expect(determineGameStatus(null, 2, true)).toBe('Next player is X');
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
