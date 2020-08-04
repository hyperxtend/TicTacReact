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

  it('check if dispatched action resets the state of the game', () => {
    const mockPayload = 1;
    mapDispatchToProps(dispatch).resetGameState(mockPayload);
    expect(dispatch.mock.calls[0][0].type).toEqual('RESET_STATE');
  });
});
