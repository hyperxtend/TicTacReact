import { mapDispatchToProps } from './container';

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn();

  it('check if go to move action dispatches correct value', () => {
    const mockHistory = [
      ['', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', 'X', '', '', '', ''],
    ];
    mapDispatchToProps(dispatch).onSelectSquare(2, true, mockHistory, 1);
    expect(dispatch.mock.calls[0][0].type).toEqual('SELECT_SQUARE');
  });

  it('check if go to move action dispatches correct value', () => {
    mapDispatchToProps(dispatch).jumpTo(5);
    expect(dispatch.mock.calls[1][0].type).toEqual('GO_TO_MOVE');
  });
});
