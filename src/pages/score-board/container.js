import { connect } from 'react-redux';

import ScoreBoard from './component';
import { calculateWinner, calculatePlayerScore } from './controller';

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

export const mergeProps = (stateProps) => ({
  ...stateProps,
  setPlayerScore: calculatePlayerScore(stateProps.winner),
});

export default connect(mapStateToProps, null, mergeProps)(ScoreBoard);
