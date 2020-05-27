import { SELECT_SQUARE, MOVES_ORDER, GO_TO_MOVE } from '../actions';
import calculateWinner from '../utilities';

const initialState = {
  history: [
    {
      squares: Array(9).fill(''),
    },
  ],
  movesAscendingOrder: true,
  xIsNext: true,
  moveNumber: 0,
};

const TicTacToeApp = (state = initialState, action) => {
  const history = state.history.slice(0, state.moveNumber + 1);
  const current = history[state.moveNumber];
  const squares = current.squares.slice();
  switch (action.type) {
    case MOVES_ORDER:
      return { ...state, movesAscendingOrder: !state.movesAscendingOrder };

    case GO_TO_MOVE:
      return {
        ...state,
        history: state.history.slice(0, action.step + 1),
        moveNumber: action.step,
        xIsNext: !(action.step % 2),
      };

    case SELECT_SQUARE:
      if (calculateWinner(squares) || squares[action.index]) {
        console.log('State', state);
        return state;
      }
      squares[action.index] = state.xIsNext ? 'X' : 'O';
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

export default TicTacToeApp;
