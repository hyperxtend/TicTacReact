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

export default (state, action = {}) => {
  switch (action.type) {
    case SELECT_SQUARE:
      return { ...state, ...action.payload };
    case GO_TO_MOVE:
      return { ...state, ...action.payload };
    default:
      return initialState;
  }
};
