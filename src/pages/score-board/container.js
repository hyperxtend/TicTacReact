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
      drawScore,
      gamesPlayed,
    },
  },
}) => ({
  history,
  moveNumber,
  xIsNext,
  playerXScore,
  playerOScore,
  drawScore,
  gamesPlayed,
  squares: history[moveNumber],
  winner: calculateWinner(history[moveNumber]),
});

export default connect(mapStateToProps)(ScoreBoard);
