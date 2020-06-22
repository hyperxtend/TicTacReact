import { SELECT_SQUARE, GO_TO_MOVE } from './actions';

export const initialState = {
  history: [
    {
      squares: Array(9).fill(''),
    },
  ],
  xIsNext: true,
  moveNumber: 0,
};

export default (state = initialState, action = {}) => {
  // console.log(state);
  switch (action.type) {
    case GO_TO_MOVE:
      return {
        ...state,
        history: state.history.slice(0, action.payload + 1),
        moveNumber: action.payload,
        xIsNext: !(action.payload % 2),
      };

    case SELECT_SQUARE:
      return {
        ...state,
        history: [
          ...state.history,
          {
            squares: state.history[state.moveNumber].squares,
          },
        ],
        xIsNext: !state.xIsNext,
        moveNumber: state.history.slice(0, state.moveNumber + 1).length,
      };

    default:
      return state;
  }
};
