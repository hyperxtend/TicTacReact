import { connect } from 'react-redux';

import {
  selectSquare,
  goToMove,
  computerMove,
} from '../../reducers/state-of-game/actions';

import {
  getCurrentMovesPlayed,
  calculateWinner,
  moveForComputer,
} from './controller';
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
  onSelectSquare: (squareIndex, nextPlayer, history, moveNumber) => {
    const currentMovesPlayed = getCurrentMovesPlayed(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    if (!currentMovesPlayed[squareIndex]) {
      currentMovesPlayed[squareIndex] = nextPlayer ? 'X' : 'O';
      dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
    }
  },
  movesForPlayers: (squareIndex, nextPlayer, history, moveNumber) => {
    const currentMovesPlayed = moveForComputer(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    dispatch(computerMove({ squareIndex, currentMovesPlayed }));
  },
  jumpTo: (step) => dispatch(goToMove(step)),
});

export const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  previousPlayerMoves: stateProps.history.map((_, moveId) => ({
    buttonName: moveId ? `Go to move #${moveId}` : 'Restart',
    buttonClick: () => dispatchProps.jumpTo(moveId),
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlayAgainstComputer);
