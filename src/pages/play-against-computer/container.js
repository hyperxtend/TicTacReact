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
  playNewGame: (reset) => dispatch(newGame(reset)),
  goAMoveBackwards: (stepBackwards) => dispatch(undoMove(stepBackwards)),
  goAMoveForwards: (stepForward) => dispatch(redoMove(stepForward)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayAgainstComputer);
