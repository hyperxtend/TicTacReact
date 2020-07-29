import { mapStateToProps, mapDispatchToProps } from './container';

describe('mapStateToProps', () => {
  it('checks if state values are the same', () => {
    const history = [Array(9).fill('')];
    const xIsNext = true;
    const moveNumber = 0;
    const expectedState = {
      history: [Array(9).fill('')],
      moveNumber: 0,
      xIsNext: true,
      squares: Array(9).fill(''),
      winner: undefined,
    };
    expect(
      mapStateToProps({
        app: {
          status: { history, xIsNext, moveNumber },
        },
      })
    ).toEqual(expectedState);
  });
});

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
    const squareIndex = 2;
    const moveNumber = 4;
    mapDispatchToProps(dispatch).onSelectSquare(
      squareIndex,
      true,
      mockHistory,
      moveNumber
    );
    expect(dispatch.mock.calls[0][0].payload.currentMovesPlayed).toEqual(
      mockHistory[moveNumber]
    );
  });

  it('checks result from selectSquare function', () => {
    const mockHistory = [
      ['', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', 'X', '', '', '', ''],
      ['X', 'O', 'O', '', 'X', '', '', '', ''],
    ];
    const squareIndex = 2;
    const moveNumber = 4;
    const expected = {
      currentMovesPlayed: mockHistory[moveNumber],
      squareIndex,
    };

    mapDispatchToProps(dispatch).onSelectSquare(
      squareIndex,
      true,
      mockHistory,
      moveNumber
    );
    expect(dispatch.mock.calls[0][0].payload).toEqual(expected);
  });
});
