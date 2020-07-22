import { connect } from 'react-redux';

import { setXScore } from '../../reducers/state-of-game/actions';

import ScoreBoard from './component';
import { calculateWinner } from './controller';

export const mapStateToProps = ({
  app: {
    status: {
      history,
      xIsNext,
      moveNumber,
      playerXScore,
      playerOScore,
      scoreDraw,
    },
  },
}) => ({
  history,
  moveNumber,
  xIsNext,
  playerXScore,
  playerOScore,
  scoreDraw,
  squares: history[moveNumber],
  winner: calculateWinner(history[moveNumber]),
});

export const mapDispatchToProps = (dispatch) => ({
  setPlayerXScore: (currentValue, winner) => {
    if (winner === 'X') {
      dispatch(setXScore(currentValue));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
