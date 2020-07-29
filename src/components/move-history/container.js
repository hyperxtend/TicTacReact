import { connect } from 'react-redux';

import { goToMove } from '../../reducers/state-of-game/actions';

import MoveHistory from './component';

export const mapStateToProps = ({
  app: {
    status: { history },
  },
}) => ({
  history,
});

export const mapDispatchToProps = (dispatch) => ({
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
)(MoveHistory);
