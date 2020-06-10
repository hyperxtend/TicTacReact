import { connect } from 'react-redux';

import { selectSquare, goToMove, changeMovesOrder } from '../../actions';

import Game from './component';

const mapStateToProps = ({ history, moveNumber, xIsNext }) => ({
  squares: history[moveNumber].squares,
  history,
  moveNumber,
  xIsNext,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (id) => dispatch(selectSquare(id)),
  jumpTo: (step) => dispatch(goToMove(step)),
  sortMoves: () => dispatch(changeMovesOrder()),
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
