import { connect } from 'react-redux';

import { resetState } from '../../reducers/state-of-game/actions';
import calculateWinner from '../../utils/calculate-winner';

import ScoreBoard from './component';

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

export const mapDispatchToProps = (dispatch) => ({
  resetGameState: (actionPayload) => dispatch(resetState(actionPayload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
