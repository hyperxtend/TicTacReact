import { mapStateToProps, mapDispatchToProps } from './container';

describe('mapStateToProps', () => {
  it('checks if state values are the same', () => {
    const history = [Array(9).fill('')];
    const xIsNext = true;
    const moveNumber = 0;
    const playerXScore = 0;
    const playerOScore = 0;
    const drawScore = 0;
    const expectedState = {
      history: [Array(9).fill('')],
      moveNumber: 0,
      xIsNext: true,
      winner: undefined,
      squares: Array(9).fill(''),
      playerXScore: 0,
      playerOScore: 0,
      drawScore: 0,
    };
    expect(
      mapStateToProps({
        app: {
          status: {
            history,
            xIsNext,
            moveNumber,
            playerXScore,
            playerOScore,
            drawScore,
          },
        },
      })
    ).toEqual(expectedState);
  });
});

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn();

  it('check onSelectSquare function dispatches correct action player X', () => {
    const mockHistory = [
      ['', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', '', '', '', ''],
      ['X', 'O', '', '', '', '', '', '', ''],
    ];
    const expected = ['X', 'O', '', '', 'X', '', '', '', ''];
    mapDispatchToProps(dispatch).onSelectSquare(4, true, mockHistory, 2);
    expect(dispatch.mock.calls[0][0].payload.currentMovesPlayed).toEqual(
      expected
    );
  });

  it('check onSelectSquare function dispatches correct action for player O', () => {
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
    ];
    const squareIndex = 2;
    const moveNumber = 3;
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
    ];
    const squareIndex = 4;
    const moveNumber = 3;
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

  it('check if scoreForPlayerX function dispatches actions to increase score & games played', () => {
    const mockPayload = 1;
    const winner = 'X';
    mapDispatchToProps(dispatch).scoreForPlayerX(mockPayload, winner);
    expect(dispatch.mock.calls[4][0].type).toEqual('SET_X_SCORE');
    expect(dispatch.mock.calls[5][0].type).toEqual('GAMES_PLAYED');
  });

  it('check if scoreForPlayerO function dispatches actions to increase score & games played', () => {
    const mockPayload = 2;
    const winner = 'O';
    mapDispatchToProps(dispatch).scoreForPlayerO(mockPayload, winner);
    expect(dispatch.mock.calls[6][0].type).toEqual('SET_O_SCORE');
    expect(dispatch.mock.calls[7][0].type).toEqual('GAMES_PLAYED');
  });

  it('check if scoreForDraw function dispatches actions to increase score & games played', () => {
    const mockPayload = 3;
    const winner = '';
    const moveNumber = 9;
    mapDispatchToProps(dispatch).scoreForDraw(mockPayload, winner, moveNumber);
    expect(dispatch.mock.calls[8][0].type).toEqual('SET_DRAW_SCORE');
    expect(dispatch.mock.calls[9][0].type).toEqual('GAMES_PLAYED');
  });

  it('check if newGame dispatches', () => {
    const mockPayload = 4;
    mapDispatchToProps(dispatch).newGame(mockPayload);
    expect(dispatch.mock.calls[10][0].type).toEqual('NEW_GAME');
  });
});
