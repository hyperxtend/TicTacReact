import { connect } from 'react-redux';

import { computerMove } from '../../reducers/state-of-game/actions';
import calculateWinner from '../../utils/calculate-winner';

import { getPlayersMoves } from './controller';
import PlayAgainstComputer from './component';

export const mapStateToProps = ({
  app: {
    status: { history, xIsNext, moveNumber },
  },
}) => ({
  history,
  moveNumber,
  xIsNext,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayAgainstComputer);
