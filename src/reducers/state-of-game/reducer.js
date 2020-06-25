import { SELECT_SQUARE, GO_TO_MOVE } from './actions';

export const initialState = {
  history: [
    {
      squares: { currentMovesPlayed: Array(9).fill('') },
    },
  ],
  xIsNext: true,
  moveNumber: 0,
};

export default (state = initialState, action) => {
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
            squares: { currentMovesPlayed: action.payload.currentMovesPlayed },
          },
        ],
        xIsNext: !state.xIsNext,
        moveNumber: state.history.length,
      };

    default:
      return state;
  }
};
