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
});
