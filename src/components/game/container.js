import { connect } from 'react-redux';

import { selectSquare, goToMove, changeMovesOrder } from '../../actions';

import Game from './game';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => {
      dispatch(selectSquare(id));
    },
    jumpTo: (step) => {
      dispatch(goToMove(step));
    },
    sortMoves: () => {
      dispatch(changeMovesOrder());
    }
  });

const GamePlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GamePlay;
