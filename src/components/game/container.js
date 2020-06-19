import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../../reducers/state-of-game/actions';

import { gameState } from './controller';
import Game from './component';

const mapStateToProps = (history) => ({
  history: history.app.status.history,
  moveNumber: history.app.status.moveNumber,
  xIsNext: history.app.status.xIsNext,
  state: history.app.status,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (squareId, xIsNext) => {
    const squaresPlayed = gameState;
    if (!squaresPlayed[squareId]) {
      squaresPlayed[squareId] = xIsNext ? 'X' : 'O';
      dispatch(selectSquare({ squareId, squaresPlayed, xIsNext }));
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
  squares: stateProps.history[stateProps.moveNumber].squares.squaresPlayed,
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Game);
