import { connect } from 'react-redux';

import {
  setDrawScore,
  setXScore,
  setOScore,
  gamesPlayed,
} from '../../reducers/state-of-game/actions';

import ScoreBanner from './component';
import { calculateWinner } from './controller';

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
    if (winner === undefined && moveNumber === 9) {
      dispatch(setDrawScore(currentScore));
      dispatch(gamesPlayed(currentScore));
    }
    return currentScore;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBanner);
