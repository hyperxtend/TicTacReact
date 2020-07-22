import reducer, { initialState } from './reducer';
import { selectSquare, goToMove } from './actions';

describe('reducer', () => {
  it('checks initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('checks state of reducer for SELECT_SQUARE action', () => {
    const stateValues = {
      history: [['', '', '', '', '', '', '', '', '']],
      xIsNext: true,
      moveNumber: 0,
      drawScore: 0,
      playerOScore: 0,
      playerXScore: 0,
    };
    expect(reducer(undefined, selectSquare)).toStrictEqual(stateValues);
  });

  it('checks state of reducer for GO_TO_MOVE action', () => {
    const stateValues = {
      history: [['', '', '', '', '', '', '', '', '']],
      moveNumber: 0,
      xIsNext: true,
      drawScore: 0,
      playerOScore: 0,
      playerXScore: 0,
    };
    expect(reducer(undefined, goToMove)).toStrictEqual(stateValues);
  });
});
