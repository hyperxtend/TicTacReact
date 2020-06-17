import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../reducers/state-of-game/actions';

import Game from './component';
import { calculateWinner } from './controller';

const mapStateToProps = (history) => ({
  history: history.app.status.history,
  moveNumber: history.app.status.moveNumber,
  xIsNext: history.app.status.xIsNext,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (squareId) => {
    if (calculateWinner !== undefined) {
      dispatch(selectSquare(squareId));
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
