import reducer, { initialState } from './reducer';
import { selectSquare, goToMove } from './actions';

describe('reducer', () => {
  it('checks initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('checks state of reducer for SELECT_SQUARE action', () => {
    const actionValues = {
      type: 'SELECT_SQUARE',
      payload: {
        squareId: 0,
        currentMovesPlayed: ['', 'X', '', '', '', '', '', '', ''],
      },
    };

    const stateValues = {
      history: [
        ['', '', '', '', '', '', '', '', ''],
        ['', 'X', '', '', '', '', '', '', ''],
      ],
      xIsNext: false,
      moveNumber: 1,
    };
    expect(reducer(undefined, actionValues)).toStrictEqual(stateValues);
  });

  it('checks if SELECT_SQUARE action is returned', () => {
    const payload = 3;
    const expectedAction = {
      type: 'SELECT_SQUARE',
      payload,
    };
    expect(selectSquare(payload)).toStrictEqual(expectedAction);
  });

  it('checks state of reducer for GO_TO_MOVE action', () => {
    const actionValues = {
      type: 'GO_TO_MOVE',
      payload: 0,
    };

    const stateValues = {
      history: [['', '', '', '', '', '', '', '', '']],
      moveNumber: 0,
      xIsNext: true,
    };
    expect(reducer(undefined, actionValues)).toStrictEqual(stateValues);
  });

  it('checks if GO_TO_MOVE action is returned', () => {
    const payload = 5;
    const expectedAction = {
      type: 'GO_TO_MOVE',
      payload,
    };
    expect(goToMove(payload)).toStrictEqual(expectedAction);
  });
});
