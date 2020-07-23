import { connect } from 'react-redux';

import {
  setDrawScore,
  setXScore,
  setOScore,
} from '../../reducers/state-of-game/actions';

import ScoreBoard from './component';
import calculateWinner from './controller';

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
  scoreForPlayerX: (currentScore, winner) => {
    if (winner === 'X') {
      dispatch(setXScore(currentScore));
    }
  },
});

export const mergeProps = (stateProps) => ({
  ...stateProps,
  setPlayerXScore: (winner) => {
    if (winner === 'X') {
      return stateProps.playerXScore + 1;
    }
    return stateProps.playerXScore;
  },
  setPlayerOScore: (winner) => {
    if (winner === 'O') {
      return stateProps.playerOScore + 1;
    }
    return stateProps.playerOScore;
  },
  setDrawScore: (winner) => {
    if (!winner && stateProps.moveNumber === 9) {
      return stateProps.drawScore + 1;
    }
    return stateProps.drawScore;
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ScoreBoard);
