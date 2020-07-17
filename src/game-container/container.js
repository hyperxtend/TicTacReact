import { connect } from 'react-redux';

import { selectSquare, goToMove } from '../reducers/state-of-game/actions';

import {
  getCurrentMovesPlayed,
  calculateWinner,
} from '../pages/play-against-friend/controller';
import { getPlayersMoves } from '../pages/play-against-computer/controller';
import PlayAgainstComputer from '../pages/play-against-computer';
import PlayAgainstFriend from '../pages/play-against-friend';

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
    if (!currentMovesPlayed[squareIndex]) {
      currentMovesPlayed[squareIndex] = nextPlayer ? 'X' : 'O';
      dispatch(selectSquare({ squareIndex, currentMovesPlayed }));
    }
  },
  movesForPlayers: (squareIndex, xIsNext, history, moveNumber) => {
    const currentMovesPlayed = getPlayersMoves(
      history,
      moveNumber,
      squareIndex,
      xIsNext
    );
    dispatch(computerMove({ squareIndex, currentMovesPlayed }));
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

export default {
  PlayAgainstComputer: connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(PlayAgainstComputer),
  PlayAgainstFriend: connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(PlayAgainstFriend),
};
