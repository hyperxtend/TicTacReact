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
  onSelectSquare: (squareId, nextPlayer) => {
    const currentMovesPlayed = getCurrentMovesPlayed();
    if (!currentMovesPlayed[squareId]) {
      currentMovesPlayed[squareId] = nextPlayer ? 'X' : 'O';
      dispatch(selectSquare(squareId, nextPlayer, currentMovesPlayed));
    }
    console.log(squareId, nextPlayer, currentMovesPlayed);
    return currentMovesPlayed;
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
