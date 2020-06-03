import { connect } from 'react-redux';

import { selectSquare, goToMove, changeMovesOrder } from '../../actions';

import Game from './component';

const mapStateToProps = ({ history, moveNumber }) => ({ history, moveNumber });

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(selectSquare(id)),
  jumpTo: (step) => dispatch(goToMove(step)),
  sortMoves: () => dispatch(changeMovesOrder()),
  previousPlayerMoves: (history, jumpTo) =>
    history.map((_eachMove, moveId) => ({
      buttonName: moveId ? `Go to move #${moveId}` : 'Restart',
      onClick: () => jumpTo(moveId),
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
