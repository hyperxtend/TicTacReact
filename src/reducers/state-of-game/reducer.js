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
  switch (action.type) {
    case SELECT_SQUARE:
      return gameState(state, action);
    case GO_TO_MOVE:
      return gameState(state, action);
    default:
      return state;
  }
};
