import action from 'payload-action-creator';

export const SELECT_SQUARE = 'SELECT_SQUARE';
export const COMPUTER_MOVE = 'COMPUTER_MOVE';
export const SET_X_SCORE = 'SET_X_SCORE';
export const SET_O_SCORE = 'SET_O_SCORE';
export const SET_DRAW_SCORE = 'SET_DRAW_SCORE';
export const GAMES_PLAYED = 'GAMES_PLAYED';
export const RESET_STATE = 'RESET_STATE';
export const NEW_GAME = 'NEW_GAME';
export const UNDO_MOVE = 'UNDO_MOVE';
export const REDO_MOVE = 'REDO_MOVE';
export const CURRENT_STATE = 'CURRENT_STATE';

export const selectSquare = action(SELECT_SQUARE);
export const computerMove = action(COMPUTER_MOVE);
export const setXScore = action(SET_X_SCORE);
export const setOScore = action(SET_O_SCORE);
export const setDrawScore = action(SET_DRAW_SCORE);
export const gamesPlayed = action(GAMES_PLAYED);
export const resetState = action(RESET_STATE);
export const newGame = action(NEW_GAME);
export const undoMove = action(UNDO_MOVE);
export const redoMove = action(REDO_MOVE);
export const currentState = action(CURRENT_STATE);
