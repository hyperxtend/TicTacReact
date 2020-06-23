import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../reducers/state-of-game/actions';
import { initialState } from '../../reducers/state-of-game/reducer';

import { getCurrentMovesPlayed } from './controller';
import Game from './component';

const mapStateToProps = (state) => ({
  history: state.app.status.history,
  moveNumber: state.app.status.moveNumber,
  xIsNext: state.app.status.xIsNext,
  state: state.app.status,
  squares: state.app.status.history[state.app.status.moveNumber].squares,
});

const mapDispatchToProps = (dispatch, state = initialState) => ({
  onSelectSquare: (squareId, nextPlayer) => {
    const currentMovesPlayed = getCurrentMovesPlayed(state);
    currentMovesPlayed[squareId] = nextPlayer ? 'X' : 'O';
    if (!currentMovesPlayed[squareId]) {
      dispatch(selectSquare(squareId, nextPlayer, currentMovesPlayed));
    }
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
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Game);
