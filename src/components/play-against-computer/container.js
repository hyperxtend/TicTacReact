import { connect } from 'react-redux';

import {
  selectSquare,
  goToMove,
  computerMove,
} from '../../reducers/state-of-game/actions';

import { getCurrentMovesPlayed, calculateWinner } from './controller';
import PlayAgainstComputer from './component';

export const mapStateToProps = ({
  app: {
    status: { history, xIsNext, moveNumber },
  },
}) => ({
  history,
  moveNumber,
  xIsNext,
  squares: history[moveNumber],
  winner: calculateWinner(history[moveNumber]),
});

export const mapDispatchToProps = (dispatch) => ({
  onSelectSquare: (squareIndex, nextPlayer, history, moveNumber) => {
    const currentMovesPlayed = getCurrentMovesPlayed(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    if (!currentMovesPlayed[squareIndex] && nextPlayer === true) {
      currentMovesPlayed[squareIndex] = 'X';
      dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
    }
  },
  onComputerMove: (squareIndex, nextPlayer, history, moveNumber) => {
    const computerMovePlayed = getCurrentMovesPlayed(
      history,
      moveNumber,
      squareIndex,
      nextPlayer
    );
    if (!computerMovePlayed[squareIndex] && nextPlayer === false) {
      const randomMove = Math.floor(Math.random() * 10);
      computerMovePlayed[randomMove] = 'O';
      dispatch(computerMove({ squareIndex, computerMovePlayed }));
    }
  },
  jumpTo: (step) => dispatch(goToMove(step)),
});

export const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  previousPlayerMoves: stateProps.history.map((_, moveId) => ({
    buttonName: moveId ? `Go to move #${moveId}` : 'Restart',
    buttonClick: () => dispatchProps.jumpTo(moveId),
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlayAgainstComputer);
