import action from 'payload-action-creator';

export const SELECT_SQUARE = 'SELECT_SQUARE';
export const GO_TO_MOVE = 'GO_TO_MOVE';

// export const selectSquareInt = (index) => ({
//   type: SELECT_SQUARE,
//   index,
// });
// console.log('Track', selectSquareInt);

export const selectSquare = action(SELECT_SQUARE);
export const goToMove = action(GO_TO_MOVE);

// function actionType(type) {
//   return function actionPayload(payload) {
//     return {
//       // eslint-disable-next-line object-shorthand
//       payload: payload,
//       // eslint-disable-next-line object-shorthand
//       type: type,
//     };
//   };
// }
const mockNum = 9;
console.log('Mock Call:', selectSquare(mockNum));
