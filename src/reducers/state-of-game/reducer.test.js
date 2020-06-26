import reducer, { initialState } from './reducer';
import { selectSquare, goToMove } from './actions';

describe('reducer', () => {
  it('checks initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('checks if select square action is returned', () => {
    const payload = 3;
    const expectedAction = {
      type: 'SELECT_SQUARE',
      payload,
    };
    expect(selectSquare(payload)).toStrictEqual(expectedAction);
  });

  it('checks if go to move action is returned', () => {
    const payload = 5;
    const expectedAction = {
      type: 'GO_TO_MOVE',
      payload,
    };
    expect(goToMove(payload)).toStrictEqual(expectedAction);
  });
});
