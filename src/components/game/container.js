import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../reducers/state-of-game/actions';

import { getCurrentMovesPlayed, calculateWinner } from './controller';
import Game from './component';

const mapStateToProps = (state) => ({
  history: state.app.status.history,
  moveNumber: state.app.status.moveNumber,
  xIsNext: state.app.status.xIsNext,
  state: state.app.status,
  squares:
    state.app.status.history[state.app.status.moveNumber].currentMovesPlayed,
  winner: calculateWinner(
    state.app.status.history[state.app.status.moveNumber].currentMovesPlayed
  ),
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (squareIndex, nextPlayer, history, moveNumber) => {
    const currentMovesPlayed = getCurrentMovesPlayed(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
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
