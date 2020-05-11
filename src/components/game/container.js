import { connect } from 'react-redux';
import { selectSquare, goToMove, changeMovesOrder } from '../../actions';
import Game from './game';

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(selectSquare(id))
    },
    jumpTo: (step) => {
      dispatch(goToMove(step))
    },
    sortMoves: () => {
      dispatch(changeMovesOrder())
    }
  }
};

const GamePlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GamePlay;