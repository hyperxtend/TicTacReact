import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../actions';

import Game from './component';

const mapStateToProps = (history) => ({
  history: history.app.status.history,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (id) => dispatch(selectSquare(id)),
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
