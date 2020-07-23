import action from 'payload-action-creator';

export const SELECT_SQUARE = 'SELECT_SQUARE';
export const COMPUTER_MOVE = 'COMPUTER_MOVE';
export const GO_TO_MOVE = 'GO_TO_MOVE';
export const SET_X_SCORE = 'SET_X_SCORE';
export const SET_O_SCORE = 'SET_O_SCORE';
export const SET_DRAW_SCORE = 'SET_DRAW_SCORE';
export const GAMES_PLAYED = 'GAMES_PLAYED';

export const selectSquare = action(SELECT_SQUARE);
export const computerMove = action(COMPUTER_MOVE);
export const goToMove = action(GO_TO_MOVE);
export const setXScore = action(SET_X_SCORE);
export const setOScore = action(SET_O_SCORE);
export const setDrawScore = action(SET_DRAW_SCORE);
export const gamesPlayed = action(GAMES_PLAYED);
