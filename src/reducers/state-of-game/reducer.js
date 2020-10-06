import {
  SELECT_SQUARE,
  NEW_GAME,
  COMPUTER_MOVE,
  SET_X_SCORE,
  SET_O_SCORE,
  SET_DRAW_SCORE,
  GAMES_PLAYED,
  RESET_STATE,
  UNDO_MOVE,
  REDO_MOVE,
} from './actions';

export const initialState = {
  past: [],
  future: [],
  history: [Array(9).fill('')],
  xIsNext: true,
  moveNumber: 0,
  winner: '',
  playerXScore: 0,
  playerOScore: 0,
  drawScore: 0,
  gamesPlayed: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        history: [Array(9).fill('')],
        moveNumber: 0,
        winner: '',
        past: [],
        future: [],
        xIsNext: true,
      };
    case UNDO_MOVE:
      return {
        ...state,
        history: state.history.slice(0, state.moveNumber),
        future: [...state.history],
        past: [...state.history],
        xIsNext: !state.xIsNext,
        moveNumber: state.moveNumber - 1,
      };
    case REDO_MOVE:
      return {
        ...state,
        history: [...state.future],
        past: [...state.history],
        future: [...state.history],
        xIsNext: !state.xIsNext,
        moveNumber: state.moveNumber + 1,
      };
    case SELECT_SQUARE:
      return {
        ...state,
        history: [...state.history, action.payload.currentMovesPlayed],
        xIsNext: !state.xIsNext,
        moveNumber: state.moveNumber + 1,
        future: [...state.history, action.payload.currentMovesPlayed],
        past: [...state.history, action.payload.currentMovesPlayed],
      };
    case COMPUTER_MOVE:
      return {
        ...state,
        history: [...state.history, action.payload.currentMovesPlayed],
        xIsNext: state.xIsNext,
        moveNumber: state.moveNumber + 1,
        past: [...state.history, action.payload.currentMovesPlayed],
      };
    case SET_X_SCORE:
      return {
        ...state,
        winner: 'X',
        playerXScore: state.playerXScore + 1,
        past: [],
        future: [],
      };
    case SET_O_SCORE:
      return {
        ...state,
        winner: 'O',
        playerOScore: state.playerOScore + 1,
        past: [],
        future: [],
      };
    case SET_DRAW_SCORE:
      return {
        ...state,
        winner: '',
        drawScore: state.drawScore + 1,
        past: [],
        future: [],
      };
    case GAMES_PLAYED:
      return {
        ...state,
        history: [Array(9).fill('')],
        xIsNext: true,
        winner: '',
        moveNumber: 0,
        playerXScore: state.playerXScore,
        playerOScore: state.playerOScore,
        gamesPlayed: state.gamesPlayed + 1,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
