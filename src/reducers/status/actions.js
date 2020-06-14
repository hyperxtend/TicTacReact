import action from 'payload-action-creator';

export const SELECT_SQUARE = 'SELECT_SQUARE';
export const GO_TO_MOVE = 'GO_TO_MOVE';

// export const selectSquare = (index) => ({
//   type: SELECT_SQUARE,
//   index,
// });

// export const goToMove = (step) => ({
//   type: GO_TO_MOVE,
//   step,
// });

export const selectSquare = action(SELECT_SQUARE);
export const goToMove = action(GO_TO_MOVE);