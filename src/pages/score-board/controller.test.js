import calculateWinningAverage from './controller';

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
