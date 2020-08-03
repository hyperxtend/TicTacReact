import { connect } from 'react-redux';

import {
  computerMove,
  goToMove,
  setXScore,
  setDrawScore,
  setOScore,
  gamesPlayed,
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
  jumpTo: (step) => dispatch(goToMove(step)),
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
)(PlayAgainstComputer);
