import { connect } from 'react-redux';

import {
  selectSquare,
  goToMove,
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
  onSelectSquare: (squareIndex, nextPlayer, history, moveNumber) => {
    const currentMovesPlayed = getCurrentMovesPlayed(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
  },
  jumpTo: (step) => dispatch(goToMove(step)),
  setGameScore: (currentScore, winner, moveNumber) => {
    if (winner === 'X') {
      dispatch(setXScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    if (winner === 'O') {
      dispatch(setOScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    if (winner === '' && moveNumber === 9) {
      dispatch(setDrawScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    return currentScore;
  },
});

export const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  previousPlayerMoves: stateProps.history.map((_, moveId) => ({
    buttonName: moveId ? `Move #${moveId}` : 'Start',
    buttonClick: () => dispatchProps.jumpTo(moveId),
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlayAgainstFriend);
