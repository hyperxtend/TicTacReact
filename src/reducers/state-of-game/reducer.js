import { gameState } from '../../components/game/controller';

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
  const squares = gameState(state);
  squares[action.payload] = state.xIsNext ? 'X' : 'O';
  switch (action.type) {
    case GO_TO_MOVE:
      return {
        ...state,
        history: state.history.slice(0, action.step + 1),
        moveNumber: action.step,
        xIsNext: !(action.step % 2),
      };

    case SELECT_SQUARE:
      return {
        ...state,
        history: [
          ...state.history,
          {
            squares,
          },
        ],
        xIsNext: !state.xIsNext,
        moveNumber: state.history.slice(0, state.moveNumber + 1).length,
      };

    default:
      return state;
  }
};
