import {
  SELECT_SQUARE,
  GO_TO_MOVE,
  SET_X_SCORE,
  SET_O_SCORE,
  SET_DRAW_SCORE,
} from './actions';

export const initialState = {
  history: [Array(9).fill('')],
  xIsNext: true,
  moveNumber: 0,
  playerXScore: 0,
  playerOScore: 0,
  scoreDraw: 0,
};

export default (state = initialState, action = {}) => {
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
        history: [...state.history, action.payload.currentMovesPlayed],
        xIsNext: !state.xIsNext,
        moveNumber: state.history.length,
      };

    case SET_X_SCORE:
      return {
        ...state,
        playerXScore: state.playerXScore + 1,
      };

    case SET_O_SCORE:
      return {
        ...state,
        playerOScore: state.playerOScore + 1,
      };
    case SET_DRAW_SCORE:
      return {
        ...state,
        drawScore: state.drawScore + 1,
      };

    default:
      return state;
  }
};
