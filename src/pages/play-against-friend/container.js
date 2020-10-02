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

import { getCurrentMovesPlayed, manageHistoryConflicts } from './controller';
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
  playNewGame: (reset) => dispatch(newGame(reset)),
  goAMoveBackwards: (stepBackwards, history, moveNumber) => {
    const newHistory = manageHistoryConflicts(history, moveNumber);
    dispatch(undoMove({ stepBackwards, newHistory }));
  },
  goAMoveForwards: (stepForward) => dispatch(redoMove(stepForward)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainstFriend);
