import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../reducers/state-of-game/actions';

import { getCurrentMovesPlayed } from './controller';
import Game from './component';

const mapStateToProps = (state) => ({
  history: state.app.status.history,
  moveNumber: state.app.status.moveNumber,
  xIsNext: state.app.status.xIsNext,
  state: state.app.status,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (squareId, xIsNext, squaresPlayed) => {
    const currentMovesPlayed = getCurrentMovesPlayed(squaresPlayed);
    if (!currentMovesPlayed[squareId]) {
      currentMovesPlayed[squareId] = xIsNext ? 'X' : 'O';
      console.log(currentMovesPlayed);
      dispatch(selectSquare(squareId, xIsNext, currentMovesPlayed));
    }
  },
  jumpTo: (step) => dispatch(goToMove(step)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  previousPlayerMoves: stateProps.history.map((_, moveId) => ({
    buttonName: moveId ? `Go to move #${moveId}` : 'Restart',
    buttonClick: () => dispatchProps.jumpTo(moveId),
  })),
  squares: stateProps.history[stateProps.moveNumber].squares,
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Game);
