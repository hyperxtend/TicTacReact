import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(ScoreBoard);
