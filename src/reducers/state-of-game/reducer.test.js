import reducer, { initialState } from './reducer';

describe('reducer', () => {
  it('checks initial state', () => {
    expect(reducer()).toEqual(initialState);
  });
});
