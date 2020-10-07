import { connect } from 'react-redux';

import {
  selectSquare,
  newGame,
  undoMove,
  redoMove,
  setXScore,
  setDrawScore,
  setOScore,
  gamesPlayed,
} from '../../reducers/state-of-game/actions';
import calculateWinner from '../../utils/calculate-winner';

import { getCurrentMovesPlayed } from './controller';
import PlayAgainstFriend from './component';

export const mapStateToProps = ({
  app: {
    status: {
      history,
      xIsNext,
      moveNumber,
      playerXScore,
      playerOScore,
      drawScore,
      past,
      future,
    },
  },
}) => ({
  history,
  moveNumber,
  xIsNext,
  playerXScore,
  playerOScore,
  drawScore,
  past,
  future,
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
    dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
  },
  scoreForPlayerX: (currentScore, winner) => {
    if (winner === 'X') {
      dispatch(setXScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    return currentScore;
  },
  scoreForPlayerO: (currentScore, winner) => {
    if (winner === 'O') {
      dispatch(setOScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    return currentScore;
  },
  scoreForDraw: (currentScore, winner, moveNumber) => {
    if (winner === '' && moveNumber === 9) {
      dispatch(setDrawScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    return currentScore;
  },
  newGame: (reset) => dispatch(newGame(reset)),
  undoPreviousMove: (stepBackwards) => dispatch(undoMove(stepBackwards)),
  redoUndoneMove: (stepForward) => dispatch(redoMove(stepForward)),
});

export const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  undoMove: () => {
    if (stateProps.history.length > 1) {
      dispatchProps.undoPreviousMove();
    }
  },
  redoMove: () => {
    if (
      stateProps.history.length > 1 &&
      stateProps.past.length === stateProps.future.length &&
      stateProps.history[stateProps.moveNumber] ===
        stateProps.past[stateProps.moveNumber]
    ) {
      dispatchProps.redoUndoneMove();
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlayAgainstFriend);
