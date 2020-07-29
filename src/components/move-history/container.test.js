import { mapStateToProps, mapDispatchToProps, mergeProps } from './container';

describe('mapStateToProps', () => {
  it('check if history state value is equal to inital value', () => {
    const expectedState = {
      history: [Array(9).fill('')],
    };
    const history = [Array(9).fill('')];
    expect(
      mapStateToProps({
        app: {
          status: { history },
        },
      })
    ).toEqual(expectedState);
  });
});

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn();

  it('check if jumpTo function dispatches correct action', () => {
    mapDispatchToProps(dispatch).jumpTo(5);
    expect(dispatch.mock.calls[0][0].type).toEqual('GO_TO_MOVE');
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
