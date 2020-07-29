import { connect } from 'react-redux';

import { selectSquare } from '../../reducers/state-of-game/actions';
import calculateWinner from '../../utils';

import { getCurrentMovesPlayed } from './controller';
import PlayAgainstFriend from './component';

export const mapStateToProps = ({
  app: {
    status: { history, xIsNext, moveNumber },
  },
}) => ({
  history,
  moveNumber,
  xIsNext,
  squares: history[moveNumber],
  winner: calculateWinner(history[moveNumber]),
});

export const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (squareIndex, nextPlayer, history, moveNumber) => {
    const currentMovesPlayed = getCurrentMovesPlayed(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    if (!currentMovesPlayed[squareIndex]) {
      currentMovesPlayed[squareIndex] = nextPlayer ? 'X' : 'O';
      dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
    }
  },
});

export const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  previousPlayerMoves: stateProps.history.map((_, moveId) => ({
    buttonName: moveId ? `Go to move #${moveId}` : 'Restart',
    buttonClick: () => dispatchProps.jumpTo(moveId),
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlayAgainstFriend);
