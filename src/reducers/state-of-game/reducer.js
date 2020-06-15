import { calculateWinner } from '../../components/game/controller';

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
  const history = state.history.slice(0, state.moveNumber + 1);
  const current = history[state.moveNumber];
  const squares = current.squares.slice();

  if (calculateWinner(squares) || squares[action.index]) {
    return state;
  }

  squares[action.index] = state.xIsNext ? 'X' : 'O';

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
        moveNumber: history.length,
      };

    default:
      return state;
  }
};
