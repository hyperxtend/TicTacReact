import { mapStateToProps, mapDispatchToProps, mergeProps } from './container';

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

  it('check if movesForPlayers function dispatches correct action', () => {
    const squareIndex = 3;
    const xIsNext = true;
    const history = [
      Array(9).fill(''),
      ['X', '', '', '', '', '', '', '', ''],
      ['X', '', '', '', '', 'O', '', '', ''],
      ['X', '', '', 'X', '', 'O', '', '', ''],
      ['X', 'O', '', 'X', '', 'O', '', '', ''],
    ];
    const moveNumber = 4;
    mapDispatchToProps(dispatch).movesForPlayers(
      squareIndex,
      xIsNext,
      history,
      moveNumber
    );
    expect(dispatch.mock.calls[0][0].type).toEqual('COMPUTER_MOVE');
  });

  it('check if jumpTo function dispatches correct action', () => {
    mapDispatchToProps(dispatch).jumpTo(5);
    expect(dispatch.mock.calls[1][0].type).toEqual('GO_TO_MOVE');
  });

  it('check if setGameScore dispatches, increases player X score & games played', () => {
    const mockPayload = 1;
    const winner = 'X';
    mapDispatchToProps(dispatch).setGameScore(mockPayload, winner);
    expect(dispatch.mock.calls[2][0].type).toEqual('SET_X_SCORE');
    expect(dispatch.mock.calls[3][0].type).toEqual('GAMES_PLAYED');
  });

  it('check if setGameScore dispatches, increases player O score & games played', () => {
    const mockPayload = 2;
    const winner = 'O';
    mapDispatchToProps(dispatch).setGameScore(mockPayload, winner);
    expect(dispatch.mock.calls[4][0].type).toEqual('SET_O_SCORE');
    expect(dispatch.mock.calls[5][0].type).toEqual('GAMES_PLAYED');
  });

  it('check if setGameScore dispatches, increases player draw score & games played', () => {
    const mockPayload = 3;
    const winner = '';
    const moveNumber = 9;
    mapDispatchToProps(dispatch).setGameScore(mockPayload, winner, moveNumber);
    expect(dispatch.mock.calls[6][0].type).toEqual('SET_DRAW_SCORE');
    expect(dispatch.mock.calls[7][0].type).toEqual('GAMES_PLAYED');
  });
});

describe('mergeProps', () => {
  it('checks if the correct amount of elements are mapped', () => {
    const stateProps = {
      history: [
        ['', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', 'X', '', '', '', ''],
        ['X', 'O', 'O', '', 'X', '', '', '', ''],
      ],
      moveNumber: 4,
      xIsNext: true,
    };
    const dispatch = jest.fn();
    expect(
      mergeProps(stateProps, mapDispatchToProps(dispatch)).previousPlayerMoves
        .length
    ).toBe(stateProps.history.length);
  });
});
