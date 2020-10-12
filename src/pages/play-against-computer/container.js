import { connect } from 'react-redux';

import {
  computerMove,
  newGame,
  undoMove,
  redoMove,
  setXScore,
  setDrawScore,
  setOScore,
  gamesPlayed,
  currentState,
} from '../../reducers/state-of-game/actions';
import calculateWinner from '../../utils/calculate-winner';

import { getPlayersMoves } from './controller';
import PlayAgainstComputer from './component';

export const mapStateToProps = ({
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
}) => ({
  history,
  moveNumber,
  xIsNext,
  playerXScore,
  playerOScore,
  drawScore,
  squares: history[moveNumber],
  winner: calculateWinner(history[moveNumber]),
});

export const mapDispatchToProps = (dispatch) => ({
  movesForPlayers: (squareIndex, xIsNext, history, moveNumber) => {
    const currentMovesPlayed = getPlayersMoves(
      history,
      moveNumber,
      squareIndex,
      xIsNext
    );
    dispatch(computerMove({ squareIndex, currentMovesPlayed }));
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
    if (winner === '' && moveNumber >= 5) {
      dispatch(setDrawScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    return currentScore;
  },
  newGame: () => dispatch(newGame()),
  undoPreviousMove: () => dispatch(undoMove()),
  redoUndoneMove: () => dispatch(redoMove()),
  currentState: () => dispatch(currentState()),
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
    if (stateProps.history.length === stateProps.moveNumber) {
      dispatchProps.currentState();
    } else if (
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
)(PlayAgainstComputer);
