import { determineGameStatus, getPlayersMoves } from './controller';

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

describe('getPlayerMoves', () => {
  it('checks moves played by both computer & user', () => {
    const squareIndex = 3;
    const xIsNext = true;
    const history = [
      Array(9).fill(''),
      ['X', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', 'O', '', '', ''],
      ['X', '', '', 'X', '', 'O', '', '', ''],
      ['X', 'O', '', 'X', '', 'O', '', '', ''],
      ['X', 'O', '', 'X', '', 'O', '', 'O', ''],
      ['X', 'O', '', 'X', '', 'O', '', 'O', ''],
    ];
    const moveNumber = 4;
    const expected = ['X', 'O', '', 'X', '', 'O', '', '', ''];
    expect(getPlayersMoves(history, moveNumber, squareIndex, xIsNext)).toEqual(
      expected
    );
  });

  it('checks result if computer chooses a square user already chose', () => {
    const squareIndex = 4;
    const xIsNext = true;
    const history = [
      Array(9).fill(''),
      ['X', '', '', '', '', 'O', '', '', ''],
      ['X', 'O', '', 'X', '', 'O', '', '', ''],
      ['X', 'O', 'X', 'X', '', 'O', '', 'X', 'O'],
    ];
    const moveNumber = 3;
    const expected = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
    expect(getPlayersMoves(history, moveNumber, squareIndex, xIsNext)).toEqual(
      expected
    );
  });

  it('checks result if computer chooses a square player already chose', () => {
    const squareIndex = 4;
    const xIsNext = true;
    const history = [
      Array(9).fill(''),
      ['X', '', '', '', '', 'O', '', '', ''],
      ['X', 'O', '', 'X', '', 'O', '', '', ''],
      ['X', 'O', 'X', 'X', '', 'O', '', 'X', 'O'],
    ];
    const moveNumber = 3;
    const expected = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
    expect(getPlayersMoves(history, moveNumber, squareIndex, xIsNext)).toEqual(
      expected
    );
  });

  it('checks result if computer chooses a square computer already chose', () => {
    const squareIndex = 6;
    const xIsNext = true;
    const history = [
      Array(9).fill(''),
      ['X', '', '', '', '', 'O', '', '', ''],
      ['X', 'O', '', 'X', '', 'O', '', '', ''],
      ['X', 'O', 'X', 'X', '', 'O', '', 'X', 'O'],
    ];
    const moveNumber = 3;
    const expected = ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'];
    expect(getPlayersMoves(history, moveNumber, squareIndex, xIsNext)).toEqual(
      expected
    );
  });

  it('checks if array of empty strings is return after winner is declared', () => {
    const squareIndex = 4;
    const xIsNext = true;
    const history = [
      Array(9).fill(''),
      ['X', '', '', '', '', 'O', '', '', ''],
      ['X', 'O', '', '', 'X', 'O', '', '', ''],
      ['X', 'O', 'O', '', 'X', 'O', '', '', 'X'],
    ];
    const moveNumber = 3;
    const expected = Array(9).fill('');
    expect(getPlayersMoves(history, moveNumber, squareIndex, xIsNext)).toEqual(
      expected
    );
  });
});
