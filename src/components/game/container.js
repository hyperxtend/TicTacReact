import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../reducers/state-of-game/actions';

import { gameState, calculateWinner } from './controller';
import Game from './component';

const mapStateToProps = (history) => ({
  history: history.app.status.history,
  moveNumber: history.app.status.moveNumber,
  xIsNext: history.app.status.xIsNext,
  gameState: history.app.status,
});

const mapDispatchToProps = (dispatch, action = {}) => ({
  onSelectSquare: (squareId, state, stateValues) => {
    if (!mergeProps.winner) {
      const squares = gameState(state);
      squares[action.payload] = mapStateToProps.xIsNext ? 'X' : 'O';
      dispatch(selectSquare({ squareId, state, stateValues }));
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
  winner: calculateWinner(stateProps.history[stateProps.moveNumber].squares),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Game);
