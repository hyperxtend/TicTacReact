import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  getStateFromLocalStorage,
  saveStateToLocalStorage,
} from '../services/local-storage';

import reducers from './index';

const store = createStore(
  reducers,
  getStateFromLocalStorage(),
  composeWithDevTools()
);

store.subscribe(() => {
  const {
    playerXScore,
    playerOScore,
    drawScore,
    gamesPlayed,
  } = store.getState().app.status;

  saveStateToLocalStorage({
    app: {
      status: {
        playerXScore,
        playerOScore,
        drawScore,
        gamesPlayed,
        history: [Array(9).fill('')],
        moveNumber: 0,
      },
    },
  });
});

export default store;
