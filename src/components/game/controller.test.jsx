import { determineGameStatus } from './controller';

describe('testing game status function', () => {
  let playerX;
  let playerO;
  let nextPlayerOStatus;
  let nextPlayerXStatus;
  let drawGame;
  let drawStatus;
  let winnerX;
  let winnerO;
  let winnerXStatus;
  let winnerOStatus;

  beforeAll(() => {
    playerX = 'Next player is X';
    playerO = 'Next player is O';
    winnerX = 'X is the Winner!';
    winnerO = 'O is the Winner!';
    drawGame = 'Its a Draw!';
    nextPlayerOStatus = determineGameStatus(null, 1, false);
    nextPlayerXStatus = determineGameStatus(null, 2, true);
    winnerXStatus = determineGameStatus('X', 5, false);
    winnerOStatus = determineGameStatus('O', 6, true);
    drawStatus = determineGameStatus(false, 9, undefined);
  });

  it('checks if player O is next', () => {
    expect(nextPlayerOStatus).toBe(playerO);
  });

  it('checks if player X is next', () => {
    expect(nextPlayerXStatus).toBe(playerX);
  });

  it('checks if player X is the winner', () => {
    expect(winnerXStatus).toBe(winnerX);
  });

  it('checks if player X is the winner', () => {
    expect(winnerOStatus).toBe(winnerO);
  });

  it('checks if game status for a draw game', () => {
    expect(drawStatus).toBe(drawGame);
  });
});
