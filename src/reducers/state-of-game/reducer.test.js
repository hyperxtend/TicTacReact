import reducer, { initialState } from './reducer';
import { goToMove } from './actions';

describe('reducer', () => {
  it('checks initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('checks state of reducer for SELECT_SQUARE action', () => {
    const stateValues = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
      ],
      xIsNext: true,
      moveNumber: 2,
    };
    const mockSelectSquare = {
      payload: {
        squareIndex: 2,
        currentMovesPlayed: ['X', '', 'X', '', '', 'O', '', '', ''],
      },
      type: 'SELECT_SQUARE',
    };
    const expected = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', '', 'X', '', '', 'O', '', '', ''],
      ],
      xIsNext: false,
      moveNumber: 3,
    };
    expect(reducer(stateValues, mockSelectSquare)).toStrictEqual(expected);
  });

  it('checks state of reducer for GO_TO_MOVE action', () => {
    const stateValues = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', '', '', 'X', '', 'O', '', '', ''],
      ],
      moveNumber: 3,
      xIsNext: false,
    };
    const expected = {
      history: [Array(9).fill(''), ['X', '', '', '', '', '', '', '', '']],
      moveNumber: 1,
      xIsNext: false,
    };
    expect(reducer(stateValues, goToMove(1))).toStrictEqual(expected);
  });
  it('checks state of reducer for COMPUTER_MOVE action', () => {
    const stateValues = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', 'O', '', 'X', '', 'O', '', '', ''],
      ],
      moveNumber: 3,
      xIsNext: true,
    };
    const mockComputerMove = {
      payload: {
        squareIndex: 4,
        currentMovesPlayed: ['X', 'O', '', 'X', 'X', 'O', '', 'O', ''],
      },
      type: 'COMPUTER_MOVE',
    };
    const expected = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', 'O', '', 'X', '', 'O', '', '', ''],
        ['X', 'O', '', 'X', 'X', 'O', '', 'O', ''],
      ],
      moveNumber: 3,
      xIsNext: true,
    };
    expect(reducer(stateValues, mockComputerMove)).toStrictEqual(expected);
  });
});
