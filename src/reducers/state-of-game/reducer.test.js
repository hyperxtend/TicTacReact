import reducer, { initialState } from './reducer';
import {
  goToMove,
  setXScore,
  setOScore,
  setDrawScore,
  gamesPlayed,
  restState,
} from './actions';

describe('reducer', () => {
  it('checks initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('checks state of reducer for SELECT_SQUARE action', () => {
    const stateValues = {
      history: [Array(9).fill('')],
      xIsNext: true,
      moveNumber: 0,
      drawScore: 0,
      playerOScore: 0,
      playerXScore: 0,
      gamesPlayed: 0,
      winner: '',
    };
    const mockSelectSquare = {
      payload: {
        squareIndex: 1,
        currentMovesPlayed: ['', 'X', '', '', '', '', '', '', ''],
      },
      type: 'SELECT_SQUARE',
    };
    const expected = {
      history: [Array(9).fill(''), ['', 'X', '', '', '', '', '', '', '']],
      xIsNext: false,
      moveNumber: 1,
      drawScore: 0,
      playerOScore: 0,
      playerXScore: 0,
      gamesPlayed: 0,
      winner: '',
    };
    expect(reducer(stateValues, mockSelectSquare)).toStrictEqual(expected);
  });

  it('checks state of reducer for COMPUTER_MOVE action', () => {
    const stateValues = {
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', 'O', 'X', '', '', 'O', '', '', ''],
      ],
      xIsNext: true,
      winner: '',
      moveNumber: 2,
      playerXScore: 0,
      playerOScore: 0,
      drawScore: 0,
      gamesPlayed: 0,
    };
    const mockComputerMove = {
      payload: {
        squareIndex: 3,
        currentMovesPlayed: ['X', 'O', 'X', 'X', '', 'O', 'O', '', ''],
      },
      type: 'COMPUTER_MOVE',
    };
    const expected = {
      history: [
        ['', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', 'O', '', '', ''],
        ['X', 'O', 'X', '', '', 'O', '', '', ''],
        ['X', 'O', 'X', 'X', '', 'O', 'O', '', ''],
      ],
      xIsNext: true,
      winner: '',
      moveNumber: 3,
      playerXScore: 0,
      playerOScore: 0,
      drawScore: 0,
      gamesPlayed: 0,
    };
    expect(reducer(stateValues, mockComputerMove)).toStrictEqual(expected);
  });

  it('checks state of reducer for GO_TO_MOVE action', () => {
    const stateValues = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', 'X', '', '', '', '', ''],
        ['X', 'O', '', 'X', 'O', '', '', '', ''],
        ['X', 'O', '', 'X', 'O', 'X', '', '', ''],
        ['X', 'O', '', 'X', 'O', 'X', '', 'O', ''],
      ],
      moveNumber: 6,
      playerOScore: 0,
      playerXScore: 0,
      winner: '',
      xIsNext: true,
    };
    const expected = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        ['', '', '', '', '', '', '', '', ''],
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', 'X', '', '', '', '', ''],
      ],
      moveNumber: 3,
      playerOScore: 0,
      playerXScore: 0,
      winner: '',
      xIsNext: false,
    };
    expect(reducer(stateValues, goToMove(3))).toStrictEqual(expected);
  });

  it('checks state of reducer for SET_X_SCORE action', () => {
    const stateValues = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', 'X', '', '', '', ''],
        ['X', 'O', '', '', 'X', 'O', '', '', ''],
        ['X', 'O', '', '', 'X', 'O', '', '', 'X'],
      ],
      moveNumber: 5,
      playerOScore: 0,
      playerXScore: 0,
      winner: '',
      xIsNext: false,
    };
    const expected = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', 'X', '', '', '', ''],
        ['X', 'O', '', '', 'X', 'O', '', '', ''],
        ['X', 'O', '', '', 'X', 'O', '', '', 'X'],
      ],
      moveNumber: 5,
      playerOScore: 0,
      playerXScore: 1,
      winner: 'X',
      xIsNext: false,
    };
    expect(reducer(stateValues, setXScore(1))).toStrictEqual(expected);
  });
  it('checks state of reducer for SET_O_SCORE action', () => {
    const stateValues = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', 'X', '', '', '', '', ''],
        ['X', 'O', '', 'X', 'O', '', '', '', ''],
        ['X', 'O', '', 'X', 'O', 'X', '', '', ''],
        ['X', 'O', '', 'X', 'O', 'X', '', 'O', ''],
      ],
      moveNumber: 6,
      playerOScore: 0,
      playerXScore: 0,
      winner: '',
      xIsNext: true,
    };
    const expected = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', 'X', '', '', '', '', ''],
        ['X', 'O', '', 'X', 'O', '', '', '', ''],
        ['X', 'O', '', 'X', 'O', 'X', '', '', ''],
        ['X', 'O', '', 'X', 'O', 'X', '', 'O', ''],
      ],
      moveNumber: 6,
      playerOScore: 1,
      playerXScore: 0,
      winner: 'O',
      xIsNext: true,
    };
    expect(reducer(stateValues, setOScore(1))).toStrictEqual(expected);
  });
  it('checks state of reducer for SET_DRAW_SCORE action', () => {
    const stateValues = {
      drawScore: 0,
      gamesPlayed: 4,
      history: [
        Array(9).fill(''),
        ['', 'X', '', '', '', '', '', '', ''],
        ['O', 'X', '', '', '', '', '', '', ''],
        ['O', 'X', '', '', 'X', '', '', '', ''],
        ['O', 'X', '', '', 'X', '', '', 'O', ''],
        ['O', 'X', '', 'X', 'X', '', '', 'O', ''],
        ['O', 'X', '', 'X', 'X', 'O', '', 'O', ''],
        ['O', 'X', '', 'X', 'X', 'O', 'X', 'O', ''],
        ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', ''],
        ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'],
      ],
      moveNumber: 9,
      playerOScore: 2,
      playerXScore: 2,
      winner: '',
      xIsNext: false,
    };
    const expected = {
      drawScore: 1,
      gamesPlayed: 4,
      history: [
        Array(9).fill(''),
        ['', 'X', '', '', '', '', '', '', ''],
        ['O', 'X', '', '', '', '', '', '', ''],
        ['O', 'X', '', '', 'X', '', '', '', ''],
        ['O', 'X', '', '', 'X', '', '', 'O', ''],
        ['O', 'X', '', 'X', 'X', '', '', 'O', ''],
        ['O', 'X', '', 'X', 'X', 'O', '', 'O', ''],
        ['O', 'X', '', 'X', 'X', 'O', 'X', 'O', ''],
        ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', ''],
        ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'],
      ],
      moveNumber: 9,
      playerOScore: 2,
      playerXScore: 2,
      winner: '',
      xIsNext: false,
    };
    expect(reducer(stateValues, setDrawScore(1))).toStrictEqual(expected);
  });
  it('checks state of reducer for GAMES_PLAYED action', () => {
    const stateValues = {
      drawScore: 0,
      gamesPlayed: 0,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', 'X', '', '', '', ''],
        ['X', 'O', 'O', '', 'X', '', '', '', ''],
        ['X', 'O', 'O', '', 'X', 'X', '', '', ''],
        ['X', 'O', 'O', '', 'X', 'X', '', 'O', ''],
        ['X', 'O', 'O', 'X', 'X', 'X', '', 'O', ''],
      ],

      moveNumber: 7,
      playerOScore: 0,
      playerXScore: 1,
      winner: 'X',
      xIsNext: false,
    };
    const expected = {
      drawScore: 0,
      gamesPlayed: 1,
      history: [Array(9).fill('')],
      moveNumber: 0,
      playerOScore: 0,
      playerXScore: 1,
      winner: '',
      xIsNext: true,
    };
    expect(reducer(stateValues, gamesPlayed(1))).toStrictEqual(expected);
  });
  it('checks state of reducer for REST_STATE action', () => {
    const stateValues = {
      drawScore: 0,
      gamesPlayed: 3,
      history: [
        Array(9).fill(''),
        ['X', '', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', '', '', '', '', ''],
        ['X', 'O', '', '', 'X', '', '', '', ''],
        ['X', 'O', 'O', '', 'X', '', '', '', ''],
        ['X', 'O', 'O', '', 'X', 'X', '', '', ''],
        ['X', 'O', 'O', '', 'X', 'X', '', 'O', ''],
        ['X', 'O', 'O', 'X', 'X', 'X', '', 'O', ''],
      ],

      moveNumber: 7,
      playerOScore: 1,
      playerXScore: 2,
      winner: 'X',
      xIsNext: false,
    };
    expect(reducer(stateValues, restState(1))).toStrictEqual(initialState);
  });
});
