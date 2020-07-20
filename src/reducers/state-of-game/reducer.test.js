import reducer, { initialState } from './reducer';
import { selectSquare, goToMove, computerMove } from './actions';

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
      xIsNext: false,
      moveNumber: 2,
    };
    const expected = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
        undefined,
      ],
      xIsNext: true,
      moveNumber: 3,
    };
    expect(reducer(stateValues, selectSquare(3))).toEqual(expected);
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
        ['X', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', '', '', 'X', '', 'O', '', '', ''],
        ['X', 'O', '', 'X', '', 'O', '', '', ''],
      ],
      moveNumber: 4,
      xIsNext: true,
    };
    const expected = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', '', '', 'X', '', 'O', '', '', ''],
        ['X', 'O', '', 'X', '', 'O', '', '', ''],
        undefined,
      ],
      moveNumber: 5,
      xIsNext: true,
    };
    expect(reducer(stateValues, computerMove(5))).toStrictEqual(expected);
  });
});
