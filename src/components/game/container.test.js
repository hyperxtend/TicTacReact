import { mapDispatchToProps } from './container';

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn();

  it('check onSelectSquare function dispatches correct action', () => {
    const mockHistory = [
      ['', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', 'X', '', '', '', ''],
    ];
    mapDispatchToProps(dispatch).onSelectSquare(2, false, mockHistory, 3);
    expect(dispatch.mock.calls[0][0].type).toEqual('SELECT_SQUARE');
  });

  it('checks if onSelectSquare is called', () => {
    const mockHistory = [
      ['', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', 'X', '', '', '', ''],
      ['X', 'O', 'O', '', 'X', '', '', '', ''],
    ];
    const moveNumber = 4;
    mapDispatchToProps(dispatch).onSelectSquare(
      2,
      true,
      mockHistory,
      moveNumber
    );
    expect(dispatch.mock.calls[0][0].payload.currentMovesPlayed).toEqual(
      mockHistory[moveNumber]
    );
  });

  it('check if jumpTo function dispatches correct action', () => {
    mapDispatchToProps(dispatch).jumpTo(5);
    expect(dispatch.mock.calls[1][0].type).toEqual('GO_TO_MOVE');
  });
});
